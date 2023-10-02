import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

export default function templateItem({ item, onPress }) {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.mainViewContainer}>
      <TouchableOpacity onPress={onPress}>
        {/* 
        <Text
          numberOfLines={1}
          style={{  
            textAlign: "center",
            fontWeight: "bold",
            margin: 8 
          }}>{item.title}</Text> 
        */}
        <Image
          style={{
            width: "100%",
            height: width * (31 / 100) * 1.22,
            borderRadius: 8,
            borderRadius: 8,
            resizeMode: "contain",
          }}
          source={item.thumb}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: "#00000055",
            borderRadius: 4,
            bottom: 4,
            right: 4,
            paddingHorizontal: 4,
            paddingVertical: 2,
          }}
        >
          <Text style={{ fontSize: 12, color: "white" }}>{item.id}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewContainer: {
    width: "31%",
    backgroundColor: "#efefef",
    borderRadius: 8,
    margin: "1%",
    borderColor: colors.gray,
    borderWidth: 1,
  },
});
