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
import jobTitles from "../helper/JobTitles";

export default function JobSearchModal(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const jobsData = jobTitles;
    setJobs(jobsData);
    setFilteredJobs(jobsData);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = jobs.filter((job) =>
      job.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleSelectJob = (job) => {
    props.onSelectJob(job);
    setSearchTerm("");
    setFilteredJobs(jobs);
    props.onClose();
  };

  return (
    <Modal
      swipeDirection={["down"]}
      onSwipeComplete={props.onClose}
      swipeThreshold={100}
      isVisible={props.visible}
      backdropOpacity={0.5}
      propagateSwipe={true}
      onBackdropPress={props.onClose}
      style={styles.overlay}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Search Jobs</Text>
        <TextInput
          autoFocus={true}
          style={styles.searchInput}
          onChangeText={(text) => {
            setSearchTerm(text);
            handleSearch(text);
          }}
          value={searchTerm}
          placeholder="Search for Job Position"
          placeholderTextColor={colors.appColor}
        />
        {filteredJobs.length > 0 ? (
          <FlatList
            keyboardShouldPersistTaps="handled" // Allow direct click input when keyboard is open
            style={{ height: "100%" }}
            data={filteredJobs}
            keyExtractor={(job) => job}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.jobItem}
                onPress={() => handleSelectJob(item)}
              >
                <Text style={styles.jobTitle}>{item}</Text>
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
    margin: 0,
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
  jobItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.appColor,
  },
  jobTitle: {
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
