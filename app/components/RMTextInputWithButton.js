import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import colors from "../config/colors";
import RMText from "./RMText";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RMBoldTextInput({
  title,
  image,
  style,
  error,
  iconComponent,
  autoCapitalize,
  onPress,
  ...otherProps
}) {
  return (
    <View style={{ backgroundColor: colors.white }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        {title && <RMText style={styles.titleLabel}>{title}</RMText>}
        <View style={{ flex: 1 }} />
        {error && <RMText style={styles.errorLabel}>{error}</RMText>}
      </View>
      <View
        style={[
          styles.multiContainer,
          style,
          error && { borderColor: colors.red },
        ]}
      >
        {image && (
          <Image style={styles.icon} source={image} resizeMode="contain" />
        )}
        <TextInput
          autoCapitalize={autoCapitalize ? autoCapitalize : "sentences"}
          style={[styles.textInput]}
          {...otherProps}
        />
        {iconComponent}
      </View>
      {onPress && (
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              position: "absolute",
              color: colors.appColor,
              padding: 8,
              borderColor: colors.appColor,
              borderWidth: 1,
              borderRadius: 10,
              right: 8,
              bottom: 18,
            }}
          >
            SAVE
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  multiContainer: {
    flexDirection: "row",
    marginVertical: 10,
    borderBottomWidth: 1,
    minHeight: 84,
    maxHeight: 200,
    borderColor: colors.appColor,
  },
  icon: {
    marginRight: 10,
    width: 15,
    height: 15,
  },
  textInput: {
    fontSize: 16,
    padding: 20,
    paddingRight: 80,
    // fontWeight: "bold",
    width: "100%",
    // backgroundColor: "lightgrey",
    backgroundColor: colors.white,
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
