import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

export default function UserList({ onPress, title, subtitle, summary }) {
  return (
    <View style={styles.mainViewContainer}>
      {/* <Image
        style={{ marginLeft: -40, width: 60, height: 60, borderRadius: 30 }}
        source={{
          uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        }}
      /> */}
      <View style={styles.textViewContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>
            {title}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>
            {" / "}
          </Text>

          <Text
            style={{
              marginTop: 4,
              fontSize: 11,
              fontWeight: "300",
              color: "black",
            }}
          >
            {subtitle}
          </Text>
        </View>

        <Text
          numberOfLines={2}
          style={{
            marginTop: 4,
            fontSize: 11,
            fontWeight: "300",
            color: "black",
          }}
        >
          {summary}
        </Text>
      </View>

      <View
        style={{
          height: 50,
          width: 40,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
        onPress={onPress}
      >
        <Image
          source={require("../assets/icons/option.png")}
          style={{ width: 15, height: 15 }}
        />
        {/* <Entypo name="dots-two-horizontal" size={16} color="black" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 20,
    justifyContent: "space-evenly",
    backgroundColor: "white",
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 11,
    borderWidth: 1.0,
    borderColor: colors.lightGray,
    shadowColor: colors.black,
    shadowOffset: { width: -0.5, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  textViewContainer: {
    flex: 1,
    margin: 8,
  },
});
