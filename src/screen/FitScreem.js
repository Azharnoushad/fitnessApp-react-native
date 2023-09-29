import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../Context";

const FitScreem = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { excersises } = params;

  const [index, setIndex] = useState(0);


  const currentExcersise = excersises[index];

  const skipToNext = () => {
    navigation.navigate("Rest");
    setIndex(index + 1);
  };

  const skipToPrev = () => {
    setIndex(index - 1);
  };

  // useContext============================================================

  const {completed,setCompleted,minutes,setMinutes,calories,setCalories,workOut,setWorkOut} = useContext(FitnessItems)

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: currentExcersise.image }}
          style={{ width: "100%", height: 400 }}
          resizeMode="cover"
        />
        <Text style={{ marginVertical: 30, fontSize: 30, fontWeight: "bold" }}>
          {currentExcersise.name}
        </Text>
        <Text style={{ fontSize: 40, fontWeight: 900, marginBottom: 30 }}>
          x{currentExcersise.sets}
        </Text>

        {index === excersises.length - 1 ? (
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50,
            }}
            onPress={() => {
              setCompleted([])

              navigation.navigate("Home");
            }}
          >
            <Text
              style={{
                color: "#fff",
                paddingHorizontal: 120,
                paddingVertical: 10,
                backgroundColor: "#3944BC",
                borderRadius: 10,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              FINISED
            </Text>
          </Pressable>
        ) : (
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50,
            }}
            onPress={() => {
              navigation.navigate("Rest");
              setCompleted([...completed,currentExcersise.name])
              setWorkOut(workOut +1)
              setMinutes(minutes + 2.5)
              setCalories(calories + 6.30)
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
          >
            <Text
              style={{
                color: "#fff",
                paddingHorizontal: 120,
                paddingVertical: 10,
                backgroundColor: "#3944BC",
                borderRadius: 10,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              DONE
            </Text>
          </Pressable>
        )}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30,
          }}
        >
          {index !== 0 ? (
            <Pressable
              style={{ justifyContent: "center", alignItems: "center" }}
              onPress={skipToPrev}
            >
              <Text
                style={{
                  color: "#fff",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  backgroundColor: "#369d39",
                  borderRadius: 20,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                PREV
              </Text>
            </Pressable>
          ) : (
            ""
          )}

          {index === excersises.length - 1 ? (
            <Pressable
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={()=>navigation.navigate("Home")}
          >
            <Text
              style={{
                color: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "#369d39",
                borderRadius: 20,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              SKIP
            </Text>
          </Pressable>
          ) : (
            <Pressable
              style={{ justifyContent: "center", alignItems: "center" }}
              onPress={skipToNext}
            >
              <Text
                style={{
                  color: "#fff",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  backgroundColor: "#369d39",
                  borderRadius: 20,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                SKIP
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default FitScreem;

const styles = StyleSheet.create({});
