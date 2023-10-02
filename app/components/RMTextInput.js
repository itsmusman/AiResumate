import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function RMTextInput({
  image,
  style,
  iconComponent,
  ...otherProps
}) {
  return (
    <View style={[styles.container, style]}>
      {image && (
        <Image style={styles.icon} source={image} resizeMode="contain" />
      )}
      <TextInput style={[styles.textInput]} {...otherProps} />
      {iconComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 8,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.appColor,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  icon: {
    marginRight: 10,
    width: 15,
    height: 15,
  },
  textInput: {
    fontSize: 16,
    width: "100%",
  },
});
