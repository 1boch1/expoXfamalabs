import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { markAsCompleted } from '../../stores/completedSurveysSlice';
import { useGetSurveyByIdQuery } from '../../stores/todoSurveysApi';

export default function SurveyForm()
{
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const dispatch = useDispatch();

    const { data: survey, isLoading, error } = useGetSurveyByIdQuery(id);

    const [answers, setAnswers] = useState<Record<string, string>>({});

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

    const handleAnswerChange = (question: string, value: string) =>
    {
        setAnswers((prev) => ({ ...prev, [question]: value }));
    };

    const handleSubmit = () =>
    {
        const unanswered = Object.keys(survey.fields).filter((q) => !answers[q]);

        if (unanswered.length > 0)
        {
            Alert.alert('Attenzione', 'Per favore rispondi a tutte le domande.');
            return;
        }

        console.log('Risposte inviate:', answers);
        dispatch(markAsCompleted(survey.id));

        Alert.alert('Fatto!', 'Hai completato il questionario.', [
            {
                text: 'OK',
                onPress: () => router.back(),
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{survey.name}</Text>

            {Object.entries(survey.fields).map(([question, options]) => (
                <View key={question} style={styles.questionBlock}>
                    <Text style={styles.question}>{question}</Text>
                    <Picker
                        selectedValue={answers[question] || ''}
                        onValueChange={(value) => handleAnswerChange(question, value)}
                        style={{ color: 'black' }}
                    >
                        <Picker.Item label="Seleziona una risposta..." value="" color="gray" />
                        {options.map((opt) => (
                            <Picker.Item key={opt} label={opt} value={opt} color="black" />
                        ))}
                    </Picker>
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
        marginBottom: 0,
    },
    error: {
        fontSize: 18,
        color: 'red',
    },
});
