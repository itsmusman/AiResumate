import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.mainContainer, style]}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "red",
    marginTop: 0,
  },
});
