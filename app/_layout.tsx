import { Stack } from "expo-router";

export default function RootLayout()
{
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="compilaSurvey"
        options={{
          title: "Compila sondaggio",
        }}
      />
      <Stack.Screen
        name="listaSurvey"
        options={{
          title: "Lista sondaggi",
        }}
      />
    </Stack>
  );
}
