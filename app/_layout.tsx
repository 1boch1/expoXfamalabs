import { Stack } from "expo-router";
import "../global.css";

import { Provider } from 'react-redux';
import { store } from '../stores'; // Importa lo store

export default function RootLayout()
{
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="survey/[id]" options={{ title: "Compila" }} />
      </Stack>
    </Provider>
  );
}
