import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import LandingNavigationBar from "../components/LandingNavigationBar";
import colors from "../config/colors";

export default function OtherAppScreen({ navigation }) {
  const data = [
    {
      id: "1",
      text: "GenieDevs offers a range of mobile applications to users, including the popular AI Resumate app which helps users create resumes quickly using AI. ",
    },
    {
      id: "2",
      text: `Other apps include 
      1. Syon UK Consultancy 
      2. GenieDevs App,
      3. Pure Nation`,
    },
    {
      id: "3",
      text: "All of the apps are user-friendly and designed to meet the needs of different users. GenieDevs is committed to continuously improving and enhancing its apps to ensure they remain valuable to users.",
    },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.text}</Text>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <LandingNavigationBar
        iconLeft="arrow-back"
        btnLeft={() => {
          navigation.goBack();
        }}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    borderRadius: 8,
    padding: 5,
    marginBottom: 1,
  },
  title: {
    fontSize: 16,
    fontStyle: "normal",
    color: colors.appColorDark,
  },
});
