import {
  Image,
  Pressable,
  TouchableHighlight,
  StyleSheet,
  View,
} from "react-native";

import colors from "../config/colors";

export default function RMBackButton({
  image,
  imageStyle,
  underlayColor,
  onPress,
  style,
}) {
  return (
    <View style={[styles.BtnContainer, style]}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={underlayColor}
        onPress={onPress}
      >
        <Image source={image} style={[styles.BtnImage, imageStyle]} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  BtnContainer: {
    left: 10,
    top: 0,
  },
  BtnImage: {
    width: 40,
    height: 40,
    tintColor: colors.appColor,
  },
});
