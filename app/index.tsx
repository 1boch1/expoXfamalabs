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
      }}
    >

      <TouchableOpacity style={styles.pulsante} onPress={() => router.navigate('/compilaSurvey')}>
        <Text style={{ color: "white" }} numberOfLines={1} adjustsFontSizeToFit={true}>
          Vai al survey
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ ...styles.pulsante }} onPress={() => router.navigate('/compilaSurvey')}>
        <Text style={{ color: "white" }} numberOfLines={1} adjustsFontSizeToFit={true}>
          Vai alla lista
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  pulsante: {
    backgroundColor: "#4282eaff",
    padding: 20,
  },
});

