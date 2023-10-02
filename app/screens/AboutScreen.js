import React from "react";
import colors from "../config/colors";

import { FlatList, StyleSheet, Text, View } from "react-native";

import LandingNavigationBar from "../components/LandingNavigationBar";

export default function AboutScreen({ navigation }) {
  const data = [
    {
      id: "1",
      text: "AI Resumate is a revolutionary app that makes the process of creating a professional resume easier and more efficient than ever before. With more than 100 templates to choose from, AI Resumate helps users create a resume that is both visually appealing and tailored to their specific needs.        ",
    },
    {
      id: "2",
      text: "What sets AI Resumate apart from other resume-building apps is its use of artificial intelligence. By leveraging AI, the app is able to generate a personalized resume for the user in less than two minutes. This saves users valuable time and allows them to focus on other aspects of the job search process.        ",
    },
    {
      id: "3",
      text: "Another key feature of AI Resumate is its ability to provide users with real-time feedback on their resume. The app uses machine learning algorithms to analyze the resume and provide suggestions for improvement, such as using more action-oriented language or highlighting specific skills. This feedback can help users create a resume that is more likely to catch the attention of potential employers.        ",
    },
    {
      id: "4",
      text: "In addition to its resume-building capabilities, AI Resumate also offers a range of tools to help users with their job search. For example, the app can help users identify job openings that match their skills and experience, and even provide tips on how to prepare for job interviews.        ",
    },
    {
      id: "5",
      text: "Overall, AI Resumate is an innovative app that is changing the way people create and manage their resumes. By leveraging the power of artificial intelligence, the app is able to provide users with a quick and easy way to create a professional-looking resume that can help them stand out in a crowded job market.        ",
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
