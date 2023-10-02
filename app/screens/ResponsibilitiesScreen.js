import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";

import RMTextInput from "../components/RMBoldTextInput";
import RMButton from "../components/RMButton";
import colors from "../config/colors";
import ScreenFull from "../components/ScreenFull";
import BackNavigationBar from "../components/BackNavigationBar";
import RMText from "../components/RMText";
import Ionicons from "@expo/vector-icons/Ionicons";
import InputModel from "../components/InputModel";

import { firebase } from "../config/FirebaseSetup";
import { v4 as uuidv4 } from "uuid";

export default function ResponsibilitiesScreen({ navigation, route }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [roles, setRoles] = useState([]);
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  var jobTitle = route.params?.selectedPosition ?? "generalResponsibilities";

  useEffect(() => {
    function prepareDocKey(str) {
      return str.replace("/", ".").toLowerCase();
    }

    async function loadData() {
      try {
        console.log("loading responsibilities ");

        if (jobTitle != "" || jobTitle != null) {
          const collectionUri = firebase
            .firestore()
            .collection("responsibilities")
            .doc(prepareDocKey(jobTitle));

          var dataObj = (await collectionUri.get()).data();

          var dataArray = dataObj["items"];

          const formattedData = dataArray.map((value, index) => ({
            id: uuidv4(),
            value,
          }));

          console.log("dataObj ", dataObj);
          console.log("dataArray ", formattedData);

          setData(formattedData);
          setFilteredData(formattedData);
          return;
        }

        setLoaded(true);
      } catch (error) {
        console.error(error);
        setLoaded(true);
      }
      return () => collectionUri();
    }

    if (data.length == 0) {
      loadData();
    }
  }, [data]);

  const handleSave = (newText) => {
    setRoles([...roles, { description: newText }]);
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log("Response :", selectedIds);
    setFilteredData(filtered);
  }, [searchTerm, selectedIds]);

  const handlePress = (item) => {
    if (selectedIds.filter((x) => x.id === item.id).length > 0) {
      // Item already selected, remove it from the array
      setSelectedIds(selectedIds.filter((x) => x.id !== item.id));
    } else {
      // Item not selected, add it to the array
      setSelectedIds([...selectedIds, item]);
    }
  };

  function renderItem({ item, index }) {
    const isSelected = selectedIds.filter((x) => x.id === item.id).length > 0;
    return (
      <TouchableOpacity onPress={() => handlePress(item)} key={item.id}>
        <View
          style={{
            flexDirection: "row",
            borderColor: colors.gray,
            borderBottomWidth: 0.5,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginVertical: 16,
              marginHorizontal: 16,
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 14,
                color: colors.appColor,
              }}
            >
              {item.value}
            </Text>
            {isSelected && (
              <Ionicons
                name={"checkmark-outline"}
                size={16}
                color={colors.appColor}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <ScreenFull>
      <BackNavigationBar
        iconRight="checkmark"
        iconLeft="add"
        btnLeft={() => setModalVisible(true)}
        btnRight={() => {
          var items = selectedIds;
          items = [...items, ...roles];
          navigation.navigate({
            name: "WorkExperienceScreen",
            params: { roles: items },
            merge: true,
          });
        }}
        title="Responsibilities"
      />
      <View style={styles.formContainer}>
        {!loaded ? (
          <View
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator animating={true} />
          </View>
        ) : (
          <View>
            <View height={54}>
              <RMTextInput
                keyboardType="default"
                placeholder="Search..."
                onChangeText={handleSearch}
                value={searchTerm}
              />
            </View>
            {data.length == 0 && loaded ? (
              <View
                style={{
                  height: 200,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>Unable to get data for this job title</Text>
              </View>
            ) : (
              <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
              />
            )}
          </View>
        )}

        <InputModel
          visible={modalVisible}
          onSave={handleSave}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </ScreenFull>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputHeading: {
    color: colors.appColor,
    alignSelf: "flex-start",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  editLogoBtn: {
    bottom: 30,
    left: 30,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#5B2C6F",
    borderRadius: 25,
  },
  editCameraIcon: {
    width: 30,
    height: 30,
    tintColor: "#5B2C6F",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
