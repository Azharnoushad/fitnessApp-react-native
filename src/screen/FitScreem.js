import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

const FitScreem = () => {
  const { params } = useRoute();
  const { excersises } = params;

  const [index, setIndex] = useState(0);

  const currentExcersise = excersises[index];

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
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
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30,
          }}
        >
          <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
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
          <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
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
        </View>
      </View>
    </View>
  );
};

export default FitScreem;

const styles = StyleSheet.create({});
