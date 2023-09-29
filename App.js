import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";
import StackNavigator from "./src/StackNavigator";
import { FitnessContext } from "./src/Context";

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}

const styles = StyleSheet.create();
