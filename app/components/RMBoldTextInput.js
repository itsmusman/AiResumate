import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import colors from "../config/colors";
import RMText from "./RMText";

export default function RMBoldTextInput({
  title,
  image,
  style,
  error,
  myEditable,
  iconComponent,
  autoCapitalize,
  ...otherProps
}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        {title && <RMText style={styles.titleLabel}>{title}</RMText>}
        <View style={{ flex: 1 }} />
        {error && <RMText style={styles.errorLabel}>{error}</RMText>}
      </View>
      <View
        style={[
          otherProps.multiline ? styles.multiContainer : styles.container,
          style,
          error && { borderColor: colors.red },
        ]}
      >
        {image && (
          <Image style={styles.icon} source={image} resizeMode="contain" />
        )}
        <TextInput
          opacity={1}
          autoCapitalize={autoCapitalize ? autoCapitalize : "sentences"}
          style={[styles.textInput]}
          {...otherProps}
        />
        {iconComponent}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginVertical: 10,
    borderBottomWidth: 1,
    height: 44,
    borderColor: colors.appColor,
  },
  multiContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginVertical: 10,
    borderBottomWidth: 1,
    minHeight: 44,
    maxHeight: 200,
    borderColor: colors.appColor,
  },
  icon: {
    marginRight: 10,
    width: 15,
    height: 15,
  },
  textInput: {
    opacity: 1.0,
    padding: 8,
    fontSize: 24,
    fontWeight: "bold",
    width: "100%",
    // backgroundColor: "lightgrey",
  },
  titleLabel: {
    marginTop: 20,
    color: colors.appColor,
  },
  errorLabel: {
    fontSize: 12,
    color: "#FF0D10",
    textAlign: "right",
  },
  multiContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginVertical: 10,
    borderBottomWidth: 1,
    minHeight: 44,
    maxHeight: 200,
    borderColor: colors.appColor,
  },
});
