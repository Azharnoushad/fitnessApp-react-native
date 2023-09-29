import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import ItemSepratore from "./ItemSepratore";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FitnessCards = () => {
  const fitnessData = fitness;
  return (
    <View>
      {fitnessData.map((item,index) => {
        return (
          <Pressable
            key={index}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <ItemSepratore height={20} />

            <Image
              source={{ uri: item.image }}
              style={{ width: "90%", height: 140, borderRadius: 7 }}
            />

            <Text
              style={{
                position: "absolute",
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
                left: 30,
                top: 30,
              }}
            >
              {item.name}
            </Text>
            <MaterialCommunityIcons name="lightning-bolt" size={26} color="white" style={{position:"absolute",bottom:15,fontWeight:"bold",left:30}}/>
          </Pressable>
        );
      })}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
