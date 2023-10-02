import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import colors from "../config/colors";

export default function RMButton({
  style,
  onPress,
  image,
  title,
  textStyle,
  iconStyle,
}) {
  return (
    <TouchableOpacity style={[styles.btnContainer, style]} onPress={onPress}>
      {image && <Image source={image} style={[styles.btnImage, iconStyle]} />}
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 5,
    // shadowProp: {
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: "100%",
    // },
    height: 54,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 25,
    // fontWeight: "400",
    fontWeight: "bold",
    color: colors.white,
  },
  btnImage: {
    width: 19,
    height: 19,
    marginRight: 10,
    tintColor: colors.white,
  },
});
