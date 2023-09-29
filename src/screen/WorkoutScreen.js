import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ItemSepratore from "../components/ItemSepratore";
import { FitnessItems } from "../Context";
import { Ionicons } from '@expo/vector-icons';


const WorkoutScreen = () => {

  const {completed,setCompleted} = useContext(FitnessItems)
  const { params } = useRoute();

  const { id, image, excersises, name } = params;

  const navigation = useNavigation();

  
  
  return (
    <ScrollView
      style={{
        backgroundColor: "#fefefe",
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <AntDesign
          name="arrowleft"
          size={28}
          color="white"
          style={{ position: "absolute", top: 25, left: 25, zIndex: 99 }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: "#fff",
            position: "absolute",
            left: 10,
            top: 160,
            zIndex: 99,
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>

        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 200 }}
          resizeMode="cover"
        />
        {excersises.map((item) => {
          return (
            <Pressable key={item.id} style={{ paddingLeft: 20 }}>
              <ItemSepratore height={20} />
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 120, height: 90 }}
                  resizeMode="cover"
                />
                <View>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 20,
                      marginBottom: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{ color: "gray", fontSize: 16, fontWeight: "bold" }}
                  >
                    Sets : {item.sets}
                  </Text>
                </View>
              </View>
              {
                completed.includes(item.name) ? (<Ionicons name="checkmark-circle-sharp" size={24} color="green" style={{position:"absolute",right:30,top:40}}/>) : (null)
              }
                
            </Pressable>
          );
        })}
        <ItemSepratore height={45} />
        <Pressable
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            navigation.navigate("Fit",{
              excersises:excersises
            })
            setCompleted([])
          }}
        >
          <Text
            style={{
              color: "#fff",
              paddingHorizontal: 50,
              paddingVertical: 10,
              backgroundColor: "#3944BC",
              borderRadius: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Start
          </Text>
        </Pressable>
        <ItemSepratore height={30} />
      </View>
    </ScrollView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
