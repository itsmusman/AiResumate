import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { StyleSheet } from "react-native";

import EducationDetailScreen from "./EducationDetailScreen";
import PersonalDetailScreen from "./PersonalDetailScreen";
import colors from "../config/colors";
import { useEffect } from "react";
import RMBackButton from "../components/RMBackButton";
import WorkExperienceScreen from "./WorkExperienceScreen";
import SkillsDetailScreen from "./SkillsDetailScreen";

// object for TopTab
const Tab = createMaterialTopTabNavigator();

export default function TopBarNavigation({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <RMBackButton
          image={require("../assets/icons/menuOddBar.png")}
          imageStyle={{ tintColor: colors.appColor }}
          underlayColor={colors.tabColor}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      tabBarPosition="top"
      keyboardDismissMode="auto"
      screenOptions={{
        tabBarActiveTintColor: colors.appColor,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: { backgroundColor: colors.tabColor },
        tabBarIndicatorContainerStyle: {
          backgroundColor: colors.tabColor,
        },
      }}
    >
      <Tab.Screen
        name="PersonalDetailScreen"
        component={PersonalDetailScreen}
        options={{ title: "Personal Detail" }}
      />
      <Tab.Screen
        name="Education Detail"
        component={EducationDetailScreen}
        options={{ title: "Education" }}
      />
      <Tab.Screen
        name="Skills"
        component={SkillsDetailScreen}
        options={{ title: "Skills" }}
      />
      <Tab.Screen
        name="Work Experience"
        component={WorkExperienceScreen}
        options={{ title: "Work Experience" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
