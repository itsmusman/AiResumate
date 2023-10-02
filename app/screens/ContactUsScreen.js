import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import LandingNavigationBar from "../components/LandingNavigationBar";
import colors from "../config/colors";

export default function ContactUsScreen({ navigation }) {
  const data = [
    {
      id: "1",
      text: "We value your feedback and questions about AI Resumate! Our team is dedicated to providing exceptional customer support and ensuring that your experience with the app is seamless and hassle-free.",
    },
    {
      id: "2",
      text: "If you have any questions or concerns about the app, our support team is available to assist you 24/7. You can reach out to us via email, phone, or live chat, and we'll be happy to help you with any issues you may be experiencing.",
    },
    {
      id: "3",
      text: "We also welcome any feedback or suggestions you may have about the app. Your input is crucial in helping us continually improve and enhance AI Resumate's features and functionality. Whether you have a feature request, a bug report, or simply want to share your thoughts, we encourage you to get in touch with us. ",
    },
    {
      id: "4",
      text: "We're committed to providing a user-friendly and intuitive app experience, and we're always looking for ways to make AI Resumate better. Your feedback is invaluable to us and helps us ensure that the app meets the needs of our users.",
    },
    {
      id: "5",
      text: "Thank you for choosing AI Resumate, and we look forward to hearing from you soon!",
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
      {/* <BannerAdComponent /> */}
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
