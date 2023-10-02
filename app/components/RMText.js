import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RMText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});
