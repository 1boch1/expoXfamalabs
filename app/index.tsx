import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index()
{
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 40
      }}
    >

      <TouchableOpacity style={styles.pulsante} onPress={() => router.navigate('/compilaSurvey')}>
        <Text style={styles.testo} numberOfLines={1} adjustsFontSizeToFit={true}>
          Vai al survey
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.pulsante} onPress={() => router.navigate('/listaSurvey')}>
        <Text style={styles.testo} numberOfLines={1} adjustsFontSizeToFit={true}>
          Vai alla lista
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  pulsante: {
    width: 300,
    height: 100,
    backgroundColor: "#4282eaff",
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
  },
  testo: {
    color: "white",
    textAlign: "center",
  }
});

