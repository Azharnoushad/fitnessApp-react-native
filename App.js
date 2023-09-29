import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";
import StackNavigator from "./src/StackNavigator";

export default function App() {
  return (
   <StackNavigator/>
  );
}

const styles = StyleSheet.create();
