import { StyleSheet, Text, View,  Image,ScrollView } from "react-native";
import React from "react";
import FitnessCards from "../components/FitnessCards";

const HomeScreen = () => {
  return (
    <ScrollView >
      <View
        style={{
          backgroundColor: "#000000",
          padding: 10,
          width: "100%",
          flex:1
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>

        <View style={styles.subContainer}>
          <View style={styles.subCalc}>
            <Text style={styles.subContainerText}>0</Text>
            <Text
              style={{
                ...styles.subContainerText,
                fontWeight: 300,
                paddingTop: 5,
              }}
            >
              WORKOUTS
            </Text>
          </View>
          <View style={styles.subCalc}>
            <Text style={styles.subContainerText}>0</Text>
            <Text
              style={{
                ...styles.subContainerText,
                fontWeight: 300,
                paddingTop: 5,
              }}
            >
              KCAL
            </Text>
          </View>
          <View style={styles.subCalc}>
            <Text style={styles.subContainerText}>0</Text>
            <Text
              style={{
                ...styles.subContainerText,
                fontWeight: 300,
                paddingTop: 5,
              }}
            >
              MINUTES
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={{
              width: "90%",
              height: 140,
              marginTop: 20,
              borderRadius: 7,
            }}
          />
        </View>
      <FitnessCards/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  subCalc: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  subContainerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
