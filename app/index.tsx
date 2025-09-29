import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Index()
{
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Vai alla compilazione" onPress={() => router.navigate('/compilaSurvey')} />
      <Button title="Vai alla lista" onPress={() => router.navigate('/listaSurvey')} />
    </View>
  );
}
