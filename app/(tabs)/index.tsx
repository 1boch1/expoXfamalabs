import { router } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';
import { useGetSurveysQuery } from '../../stores/todoSurveysApi';

export default function ListaSurveyTODO()
{
  const { data: surveys, error, isLoading } = useGetSurveysQuery();
  const completed = useSelector((state: RootState) => state.survey.completedSurveys);

  return (
    <View style={{ flex: 1, paddingTop: 50, width: "80%", margin: "auto" }}>
      <Text className="font-extrabold text-2xl mb-10">Compila un questionario</Text>

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={{ color: 'red' }}>Errore nel recuperare i questionari.</Text>}

      <FlatList
        data={surveys || []}
        renderItem={({ item }) =>
        {
          const isDone = completed.includes(item.id);

          return (
            <View className='mb-8 flex-grow flex-row justify-between items-center border-stone-600 border-2 p-4 rounded-lg'>
              <Text className='font-semibold'>{item.name}</Text>
              <Button
                title={isDone ? "Completato" : "Compila"}
                onPress={() =>
                  router.push({
                    pathname: '/survey/[id]',
                    params: { id: item.id }
                  })
                }
                disabled={isDone}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
