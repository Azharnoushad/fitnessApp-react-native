import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import  {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from './screen/HomeScreen'
import WorkoutScreen from './screen/WorkoutScreen'
import FitScreem from './screen/FitScreem'
import RestScreen from './screen/RestScreen'



const Stack = createNativeStackNavigator()
const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Workout" component={WorkoutScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Fit" component={FitScreem} options={{headerShown:false}}/>
            <Stack.Screen name="Rest" component={RestScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})