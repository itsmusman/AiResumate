import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
  Text,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import colors from "../config/colors";
import RMText from "../components/RMText";
//import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";

const DrawerMenuScreen = (props) => {
  const navigation = useNavigation();

  var list = [
    {
      name: "About Us",
      icon: require("../assets/icons/info.png"),
      screen: "AboutScreen",
    },
    {
      name: "Contact Us",
      icon: require("../assets/icons/call.png"),
      screen: "ContactUsScreen",
    },
    {
      name: "More Apps",
      icon: require("../assets/icons/more.png"),
      screen: "OtherAppScreen",
    },
    {
      name: "Share App",
      icon: require("../assets/icons/share.png"),
      screen: "OtherAppScreen",
    },
  ];

  //const navigation = useNavigation();
  return (
    <Screen style={{ flex: 1, backgroundColor: colors.appColor }}>
      <View style={{ margin: 10, alignItems: "flex-start" }}>
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => props.navigation.closeDrawer()}
        >
          <Image
            source={require("../assets/icons/close.png")}
            style={styles.backButton}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ height: "100%" }}
        data={list}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.backBtnContainer}
            // onPress={() => props.navigation.closeDrawer()}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.customItem}>
              <Image source={item.icon} style={styles.itemIconStyle} />
              <RMText style={styles.itemLabelStyle}>{item.name}</RMText>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  itemIconStyle: {
    tintColor: colors.white,
    width: 20,
    height: 20,
    marginRight: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 18,
    height: 18,
    margin: 10,
    resizeMode: "center",
    tintColor: colors.white,
  },
  backBtnContainer: {
    // backgroundColor: "red",
    // marginBottom: 1,
  },
  itemLabelStyle: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default DrawerMenuScreen;
