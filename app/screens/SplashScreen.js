import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";

export default function SplashScreen() {
  const navigation = useNavigation();

  
  const { width, height } = Dimensions.get("window");

  const [imageSize, setImageSize] = useState(new Animated.Value(50));
  const [translateX, setTranslateX] = useState(new Animated.Value(0));
  const [translateY, setTranslateY] = useState(new Animated.Value(height));

  useEffect(() => {
    Animated.timing(imageSize, {
      toValue: 250,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(imageSize, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }, 2000);
    });

    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(translateX, {
          toValue: -width,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }, 2000);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DrawerTabs");
    }, 3500);
  }, []);

  return (
    <Screen style={styles.container}>
      {Platform.OS == "ios" && <StatusBar barStyle="light-content" />}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Animated.Image
          resizeMode="contain"
          // style={styles.image}
          style={{
            width: imageSize,
            height: imageSize,
            transform: [{ translateY }, { translateX }],
          }}
          source={require("../assets/icons/logo.png")}
        />
        <Text style={styles.title}></Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: colors.appColor,
  },
  image: {
    width: "70%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
});
