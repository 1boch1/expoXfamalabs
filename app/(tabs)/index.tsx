import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../stores/index';
import { fetchSurveys } from '../../stores/surveySlice';

export default function ListaSurveyTODO()
{
  const dispatch = useDispatch<AppDispatch>();

  const surveys = useSelector((state: RootState) => state.survey.surveys);
  const status = useSelector((state: RootState) => state.survey.status);

  const surveysState = { surveys, status }; // ho fatto così per non confondere poi le variabili come oggetti state classici del componente (sono costretto a fare state.*)

  useEffect(() =>
  {
    dispatch(fetchSurveys());  // quando dispatch è pronto (schermata montata) faccio chiamata "API"
  }, [dispatch]);

  return (
    <View style={{ flex: 1, paddingTop: 50, width: "80%", margin: "auto" }}>
      <Text className="font-extrabold text-2xl mb-10">Compila un questionario</Text>

      {surveysState.status === 'loading' && <ActivityIndicator size="large" color="#0000ff" />}

      {surveysState.status === 'failed' && <Text style={{ color: 'red' }}>Errore nel recuperare i questionari.</Text>}

      <FlatList
        data={surveysState.surveys}
        renderItem={({ item }) => (
          <View className='mb-8 flex-grow flex-row justify-between items-center border-stone-600 border-2 p-4 rounded-lg '>
            <Text className='font-semibold'>{item.name}</Text>
            <Button title="Compila" onPress={() =>
            {
              router.push({
                pathname: '/survey/[id]',
                params: { id: item.id }
              })
            }} />
          </View>

        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
