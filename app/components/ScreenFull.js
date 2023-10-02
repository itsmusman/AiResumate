import { SafeAreaView, StyleSheet, Text, View, Platform,StatusBar } from "react-native";
import React from "react";
import Constants from "expo-constants";
import colors from "../config/colors";

export default function ScreenFull({ children, style }) {
  return <View style={[styles.mainContainer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop:  0,
  },
});
