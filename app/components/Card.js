import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function Card({ title, onPress, iconComponent }) {
  return (
    <TouchableOpacity style={styles.Card} onPress={onPress}>
      <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {iconComponent}
        </View>
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Card: {
    flex: 1,

    marginHorizontal: 14,
    backgroundColor: colors.appColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    height: 100,
    width: 100,
    marginTop: 10,
    // overflow: "hidden",
  },
  cardText: {
    marginTop: 8,
    fontSize: 13,
    color: colors.white,
    textAlign: "center",
  },
});
