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
import degreeList from "../helper/DegreeList";

export default function SearchDegreeModel(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataList, setDataList] = useState([]);
  const [filteredDataList, setFilteredDataList] = useState([]);

  useEffect(() => {
    const data = degreeList;

    setDataList(data);
    setFilteredDataList(data);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = dataList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDataList(filtered);
  };

  const handleSelect = (item) => {
    props.onSelect(item.name);
    setSearchTerm("");
    setFilteredDataList(dataList);
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
        <Text style={styles.title}>Select Degree</Text>
        <TextInput
          autoFocus={true}
          style={styles.searchInput}
          onChangeText={(text) => {
            setSearchTerm(text);
            handleSearch(text);
          }}
          value={searchTerm}
          placeholder="Science"
          placeholderTextColor={colors.appColor}
        />
        {filteredDataList.length > 0 ? (
          <FlatList
            keyboardShouldPersistTaps="handled" // Allow direct click input when keyboard is open
            style={{ height: "100%" }}
            data={filteredDataList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dataItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.dataName}>{item.name}</Text>
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
  dataItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.appColor,
  },
  dataName: {
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
