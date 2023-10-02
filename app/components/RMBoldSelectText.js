import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import colors from "../config/colors";
import RMText from "./RMText";
import Icons from "@expo/vector-icons/Ionicons";

export default function RMBoldSelectText({
  title,
  image,
  style,
  error,
  myEditable,
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
        <View style={{ marginLeft: 10, flex: 1, flexDirection: "row" }}>
          <TextInput
            opacity={1}
            autoCapitalize={autoCapitalize ? autoCapitalize : "sentences"}
            style={[styles.textInput]}
            {...otherProps}
          />
          <View style={{ paddingVertical: 6, paddingHorizontal: 12 }}>
            <Icons
              name={image ? image : "filter"}
              size={28}
              color={colors.appColor}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.white,
    marginVertical: 10,
    borderBottomWidth: 1,
    minHeight: 44,
    borderColor: colors.appColor,
  },
  multiContainer: {
    flex: 1,
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
    flex: 1,
    opacity: 1.0,
    padding: 1,
    fontSize: 24,
    fontWeight: "bold",
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
});
