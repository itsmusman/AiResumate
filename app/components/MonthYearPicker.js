import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import Modal from "react-native-modal";
import colors from "../config/colors";
import monthsData from "../helper/Dates";
import Icons from "@expo/vector-icons/Ionicons";

export default function MonthYearPicker(props) {
  const [selectedMonth, setSelectedMonth] = useState(props.month);
  const [selectedYear, setSelectedYear] = useState(props.year);

  const [months, setMonths] = useState(monthsData);
  const currentYear = new Date().getFullYear();
  const yearsList = Array.from(
    { length: 100 },
    (_, index) => currentYear - index
  );
  const [years, setYears] = useState(["Present", ...yearsList]);

  useEffect(() => {
    setMonths(monthsData);
  }, []);

  const handleSelectMonth = (month) => {
    setSelectedMonth(month.value);
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
  };

  const handleDone = () => {
    if (selectedYear == "Present") {
      props.onSelect(0, selectedYear);
      props.onClose();
    } else if (selectedMonth && selectedYear) {
      props.onSelect(selectedMonth, selectedYear);
      props.onClose();
    } else {
      props.onClose();
    }
  };

  return (
    <Modal
      swipeDirection={["down"]}
      style={{ justifyContent: "flex-end", margin: 0 }}
      onSwipeComplete={props.onClose}
      swipeThreshold={40}
      onBackdropPress={props.onClose}
      isVisible={props.visible}
      propagateSwipe={true}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={styles.title}>Month & Year</Text>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => handleDone()}
          >
            <Text style={styles.cancelButtonText}>Done</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subContainer}>
          <FlatList
            style={{ marginRight: 20, width: 140 }}
            data={months}
            keyExtractor={(month) => month.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.yearItem}
                onPress={() => handleSelectMonth(item)}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.yearName}>{item.label}</Text>
                  {selectedMonth == item.value && (
                    <Icons
                      name={"checkmark"}
                      size={18}
                      color={colors.appColor}
                    />
                  )}
                </View>
              </TouchableOpacity>
            )}
          />

          <FlatList
            data={years}
            keyExtractor={(year) => year}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.yearItem}
                onPress={() => handleSelectYear(item)}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.yearName}>{item}</Text>
                  {selectedYear == item && (
                    <Icons
                      name={"checkmark"}
                      size={18}
                      color={colors.appColor}
                    />
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
    maxHeight: "80%",
  },
  subContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    padding: 8,
  },
  save: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 8,
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.appColor,
    color: colors.appColor,
  },
  yearItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: colors.appColorLigth,
  },
  yearName: {
    fontSize: 16,
    paddingRight: 12,
  },
  doneButton: {
    backgroundColor: colors.appColor,
    borderRadius: 20,
    padding: 10,
    alignSelf: "center",
  },
  cancelButton: {
    backgroundColor: colors.appColor,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    width: "45%",
    alignSelf: "center",
  },
  cancelButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
