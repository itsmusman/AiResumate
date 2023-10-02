import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import colors from "../config/colors";

export default function RMImageButton({
  style,
  onPress,
  image,
  title,
  textStyle,
}) {
  return (
    <TouchableOpacity style={[styles.btnContainer, style]} onPress={onPress}>
      {image && <Image source={image} style={styles.btnImage} />}
      <View style={styles.textContainer}>
        <Text style={[styles.btnText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    margin: 3,
    width: "100%",
    justifyContent: "center",
    shadowProp: {
      shadowColor: colors.gray,
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
  },

  textContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 14,
    lineHeight: 30,
    fontWeight: "400",
    color: colors.appColor,
  },
  btnImage: {
    width: 18,
    height: 18,
    tintColor: colors.appColor,
  },
});
