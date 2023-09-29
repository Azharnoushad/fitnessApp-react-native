import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="#000"/>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
