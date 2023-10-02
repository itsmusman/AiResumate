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
import CountryList from "../helper/CountryList";

export default function SearchCountryModal(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  useEffect(() => {
    const countriesData = CountryList;

    setUniversities(countriesData);
    setFilteredUniversities(countriesData);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = universities.filter((university) =>
      university.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUniversities(filtered);
  };

  const handleSelectUniversity = (university) => {
    props.onSelectCountry(university);
    setSearchTerm("");
    setFilteredUniversities(universities);
    props.onClose();
  };

  return (
    <Modal
      swipeDirection={["down"]}
      style={{ justifyContent: "flex-end", margin: 0 }}
      onSwipeComplete={props.onClose}
      swipeThreshold={40}
      isVisible={props.visible}
      propagateSwipe={true}
      onBackdropPress={props.onClose}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select Country</Text>
        <TextInput
          autoFocus={true}
          style={styles.searchInput}
          onChangeText={(text) => {
            setSearchTerm(text);
            handleSearch(text);
          }}
          value={searchTerm}
          placeholder="England i.e"
          placeholderTextColor={colors.appColor}
        />
        {filteredUniversities.length > 0 ? (
          <FlatList
            keyboardShouldPersistTaps="handled" // Allow direct click input when keyboard is open
            style={{ height: "100%" }}
            data={filteredUniversities}
            keyExtractor={(city) => city}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.universityItem}
                onPress={() => handleSelectUniversity(item)}
              >
                <Text style={styles.universityName}>{item}</Text>
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

        <TouchableOpacity style={styles.cancelButton} onPress={props.onClose}>
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
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
    maxHeight: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  universityItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.appColor,
  },
  universityName: {
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
  cancelButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
