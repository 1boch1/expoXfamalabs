import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { markAsCompleted } from '../../stores/completedSurveysSlice';
import { useGetSurveyByIdQuery } from '../../stores/todoSurveysApi';
import { buildAnswerSchema } from '../../utils/answerSchema';

export default function SurveyForm()
{
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const dispatch = useDispatch();

    const { data: survey, isLoading, error } = useGetSurveyByIdQuery(id);

    const [answers, setAnswers] = useState<Record<string, string | undefined>>({});
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    if (isLoading)
    {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error || !survey)
    {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Questionario non trovato</Text>
            </View>
        );
    }

    const handleAnswerChange = (fieldId: string, value: string) =>
    {
        setAnswers((prev) => ({ ...prev, [fieldId]: value }));

        // se l'utente cambia una risposta, pulisco eventuale errore associato
        setFieldErrors((prev) =>
        {
            const newErrors = { ...prev };
            delete newErrors[fieldId];
            return newErrors;
        });
    };

    const handleSubmit = () =>
    {
        // trim stringhe delle risposte
        const normalized: Record<string, any> = {};
        for (const k of Object.keys(answers))
        {
            const v = answers[k];
            normalized[k] = typeof v === 'string' ? v.trim() : v;
        }

        const schema = buildAnswerSchema(survey);

        try
        {
            schema.parse(normalized); // se non va bene lancia eccezione

            console.log('Risposte inviate:', normalized); // qua idealmente poi le manderei al server
            dispatch(markAsCompleted(survey.id));

            Alert.alert('Fatto!', 'Hai completato il questionario.', [
                {
                    text: 'OK',
                    onPress: () => router.back(),
                },
            ]);
        } catch (e)
        {
            if (e instanceof z.ZodError)
            {
                const newErrors: Record<string, string> = {};

                e.errors.forEach((err) =>
                {
                    const key = String(err.path[0] ?? 'global');
                    newErrors[key] = err.message;
                });

                setFieldErrors(newErrors);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{survey.name}</Text>

            {survey.fields.map((field) => (
                <View key={field.id} style={styles.questionBlock}>
                    <Text style={styles.question}>{field.question}</Text>

                    {field.type === 'choice' ? (
                        <Picker
                            selectedValue={answers[field.id] ?? ''}
                            onValueChange={(value) => handleAnswerChange(field.id, value)}
                            style={{ color: 'black' }}
                        >
                            <Picker.Item label="Seleziona una risposta..." value="" color="gray" />
                            {field.options.map((opt) => (
                                <Picker.Item key={opt} label={opt} value={opt} color="black" />
                            ))}
                        </Picker>
                    ) : (
                        <TextInput
                            style={styles.textInput}
                            value={answers[field.id] ?? ''}
                            onChangeText={(t) => handleAnswerChange(field.id, t)}
                            placeholder="Inserisci la tua risposta"
                        />
                    )}

                    {fieldErrors[field.id] && (
                        <Text style={styles.error}>{fieldErrors[field.id]}</Text>
                    )}
                </View>
            ))}

            <Button title="Invia" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    questionBlock: {
        marginBottom: 20,
    },
    question: {
        fontSize: 16,
        marginBottom: 8,
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
        color: 'black',
    },
    error: {
        fontSize: 14,
        color: 'red',
        marginTop: 4,
    },
});
