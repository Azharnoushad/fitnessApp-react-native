import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RestScreen = () => {
  const timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);
  const navigation = useNavigation()

  const timerFun = () => {
    setTimeout(()=>{
        if(timeLeft <=0){
            navigation.goBack()
            clearTimeout(timer)
        }
        setTimeLeft(timeLeft-1)
    },1000)
  };

  useEffect(()=>{
    timerFun()
    return () => clearTimeout(timer)
  })

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={{ width: "100%", height: 420 }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        TAKE A BRAKE
      </Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#3944BC",
            borderRadius: 50,
            width: 70,
            height: 70,
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 60, alignSelf: "center" }}
          >
            {timeLeft}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});
