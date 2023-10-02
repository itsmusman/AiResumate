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
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from expo/vector-icons
import colors from "../config/colors";
import hobbyList from "../helper/HobbiesList";

import { firebase } from "../config/FirebaseSetup";
import { ActivityIndicator } from "react-native-paper";

export default function SearchHobbiesModel({
  visible,
  onClose,
  onSelectHobby,
  hobbys,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(hobbyList);
  const [filteredData, setFilteredData] = useState(hobbyList);
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((hobby) =>
      hobby.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSelectHobby = (hobby) => {
    const isSelected = selectedHobbies.some(
      (selectedHobby) => selectedHobby.id === hobby.id
    );

    if (isSelected) {
      setSelectedHobbies((prevSelectedHobbies) =>
        prevSelectedHobbies.filter(
          (selectedHobby) => selectedHobby.id !== hobby.id
        )
      );
    } else {
      setSelectedHobbies((prevSelectedHobbies) => [
        ...prevSelectedHobbies,
        hobby,
      ]);
    }

    // onSelectHobby(hobby); // Pass the hobby object to the callback
  };

  const isHobbySelected = (hobby) =>
    selectedHobbies.some((selectedHobby) => selectedHobby.id === hobby.id);

  return (
    <Modal
      swipeDirection={["down"]}
      onSwipeComplete={onClose}
      swipeThreshold={100}
      isVisible={visible}
      backdropOpacity={0.5}
      propagateSwipe={true}
      onBackdropPress={onClose}
      style={styles.overlay}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={styles.title}>Search Hobbies</Text>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => {
              onSelectHobby(selectedHobbies);
            }}
          >
            <Text style={styles.cancelButtonText}>Done</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => {
            setSearchTerm(text);
            handleSearch(text);
          }}
          value={searchTerm}
          placeholder="Search for Hobbies"
          placeholderTextColor={colors.appColor}
        />
        {filteredData.length > 0 ? (
          <FlatList
            style={{ height: "100%" }}
            data={filteredData}
            keyExtractor={(hobby) => hobby.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.jobItem}
                onPress={() => handleSelectHobby(item)}
              >
                <Text style={styles.jobTitle}>{item.name}</Text>
                {isHobbySelected(item) && ( // Check if hobby is selected
                  <Ionicons
                    name="checkmark"
                    size={24}
                    color={colors.appColor}
                  />
                )}
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text
            style={{
              height: "100%",
              textAlign: "center",
            }}
          >
            No Data Found
          </Text>
        )}
        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
    maxHeight: "80%",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  jobItem: {
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.appColor,
    flexDirection: "row", // Added flexDirection for checkmark icon alignment
    justifyContent: "space-between", // Added justifyContent for checkmark icon alignment
    alignItems: "center", // Added alignItems for checkmark icon alignment
  },
  jobTitle: {
    paddingVertical: 10,
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: colors.appColor,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    width: "45%",
    alignSelf: "center",
  },
  doneButton: {
    backgroundColor: colors.appColor,
    borderRadius: 20,
    padding: 10,
    alignSelf: "center",
  },
  cancelButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
