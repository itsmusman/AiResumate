import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import Dates from "../helper/Dates";
import colors from "../config/colors";

export default function DatePickerComponent({ value, onChange }) {
  return (
    <Picker
      selectedValue={value}
      onValueChange={onChange}
      style={styles.container}
    >
      {Dates.map((month) => (
        <Picker.Item
          key={month.value}
          label={month.label}
          value={month.value}
        />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    // minHeight: 44,
    // maxHeight: 200,
    width: 200,
    height: 50,
    borderColor: colors.appColor,
  },
});
