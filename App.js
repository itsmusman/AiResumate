import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SplashScreen from "./app/screens/SplashScreen";
import LandingScreen from "./app/screens/LandingScreen";
import ResumeListScreen from "./app/screens/ResumeListScreen";
import PersonalInfoScreen from "./app/screens/PersonalInfoScreen";
import TemplatesListScreen from "./app/screens/TemplatesListScreen";
import GeneratePDFScreen from "./app/screens/GeneratePDFScreen";
import ListModelScreen from "./app/screens/ListModelScreen";
import DrawerMenuScreen from "./app/screens/DrawerMenuScreen";
import colors from "./app/config/colors";

import EducationDetailScreen from "./app/screens/EducationDetailScreen";
import PersonalDetailScreen from "./app/screens/PersonalDetailScreen";
import SkillDetailScreen from "./app/screens/SkillsDetailScreen";
import WorkExperienceScreen from "./app/screens/WorkExperienceScreen";
import FinalFileScreen from "./app/screens/FinalFileScreen";
import UserSummaryScreen from "./app/screens/UserSummaryScreen";
import ChooseHobbyScreen from "./app/screens/ChooseHobbyScreen";
import ResponsibilitiesScreen from "./app/screens/ResponsibilitiesScreen";
import AddAwardsScreen from "./app/screens/AddAwardsScreen";
import AddCertificateScreen from "./app/screens/AddCertificateScreen";
import AddReferenceScreen from "./app/screens/AddReferenceScreen";
import AboutScreen from "./app/screens/AboutScreen";
import { Platform } from "react-native";
import ContactUsScreen from "./app/screens/ContactUsScreen";
import OtherAppScreen from "./app/screens/OtherAppScreen";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerTabs() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.appColor,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
      drawerContent={(props) => <DrawerMenuScreen {...props} />}
    >
      <Drawer.Screen name="Home" component={LandingScreen} />
      {/* <Drawer.Screen name="About Us" component={AboutScreen} /> */}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          statusBarColor:
            Platform.OS == "android" ? colors.appColor : "light-content",
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="DrawerTabs" component={DrawerTabs} />
        <Stack.Screen name="ResumeListScreen" component={ResumeListScreen} />

        <Stack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
        />
        <Stack.Screen
          name="PersonalDetailScreen"
          component={PersonalDetailScreen}
        />
        <Stack.Screen
          name="EducationDetailScreen"
          component={EducationDetailScreen}
        />
        <Stack.Screen name="SkillDetailScreen" component={SkillDetailScreen} />
        <Stack.Screen
          name="WorkExperienceScreen"
          component={WorkExperienceScreen}
        />
        <Stack.Screen
          name="ResponsibilitiesScreen"
          component={ResponsibilitiesScreen}
        />

        <Stack.Screen name="ListModelScreen" component={ListModelScreen} />
        <Stack.Screen name="UserSummaryScreen" component={UserSummaryScreen} />
        <Stack.Screen name="ChooseHobbyScreen" component={ChooseHobbyScreen} />
        <Stack.Screen name="AddAwardsScreen" component={AddAwardsScreen} />
        <Stack.Screen
          name="AddCertificateScreen"
          component={AddCertificateScreen}
        />
        <Stack.Screen
          name="AddReferenceScreen"
          component={AddReferenceScreen}
        />
        <Stack.Screen name="FinalFileScreen" component={FinalFileScreen} />
        <Stack.Screen
          name="TemplatesListScreen"
          component={TemplatesListScreen}
        />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
        <Stack.Screen name="OtherAppScreen" component={OtherAppScreen} />

        <Stack.Screen name="GeneratePDFScreen" component={GeneratePDFScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
