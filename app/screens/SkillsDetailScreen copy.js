import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";

import colors from "../config/colors";
import BackNavigationBar from "../components/BackNavigationBar";
import ScreenFull from "../components/ScreenFull";
import RMButton from "../components/RMButton";
import RMTextInput from "../components/RMBoldTextInput";

import { firebase } from "../config/FirebaseSetup";
import { ActivityIndicator } from "react-native-paper";
import { AppContent } from "../helper/AppContent";

const SkillBackNavigationBar = ({ onBack }) => (
  <BackNavigationBar
    iconLeft="arrow-back"
    iconRight=""
    btnLeft={onBack}
    title={AppContent.skillsTitle}
    subtitle={AppContent.skillsSubtitle}
  />
);

export default function SkillDetailScreen({ navigation, route }) {
  const skills = route?.params?.resume?.details?.skills ?? [];
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState(skills);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (data.length == 0) {
      const loadData = async () => {
        try {
          const collectionUri = firebase
            .firestore()
            .collection("data")
            .doc("skill_doc");

          var dataObj = (await collectionUri.get()).data();
          console.log("dataObj ", dataObj);

          var dataArray = dataObj["skills"];

          setData(dataArray);
          setFilteredData(dataArray);
        } catch (error) {
          console.error(error);
        }
        return () => collectionUri();
      };

      loadData();
    }
  }, []);

  useEffect(() => {
    // Filter the data

    // console.log("======++++++++++++++++++=======");
    // console.log("Skills: ", skills);
    // console.log("======++++++++++++++++++=======");

    console.log("Selected Items : ", selectedIds);

    if (searchTerm !== "") {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, selectedIds]);

  const handlePress = (item) => {
    if (
      selectedIds.filter((x) => x.id === item.id && x.ability >= 1).length > 0
    ) {
      // Item already selected, remove it from the array
      console.log("remove skill");
      setSelectedIds(selectedIds.filter((x) => x.id !== item.id));
    } else if (
      selectedIds.filter((x) => x.id === item.id && x.ability > 0).length > 0
    ) {
      // Item already selected, remove it from the array
      console.log("update skill");
      var list = selectedIds.filter((x) => x.id !== item.id);
      item.ability = item.ability + 1;
      setSelectedIds([...list, item]);
    } else {
      // Item not selected, add it to the array
      console.log("new skill");
      item.ability = 1;
      setSelectedIds([...selectedIds, item]);
    }
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const Item = ({ title, index }) => {
    const isSelected = selectedIds.filter((x) => x.id === title.id).length > 0;
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        //onPress={() => console.log(title)}
        onPress={() => handlePress(title)}
        key={index}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 30,
              backgroundColor: isSelected ? colors.white : "white",
              borderColor: isSelected ? colors.white : colors.red,
              borderColor: colors.appColor,
              borderWidth: 1,
              margin: 6,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                position: "absolute",
                backgroundColor: colors.lightGray,
                width: isSelected ? `${(title?.ability ?? 0) * 0}%` : "0%",
                height: "100%",
              }}
            ></View>
            <Text
              style={{
                margin: 8,
                fontSize: 14,
                // color: colors.appColor,
                color: isSelected ? colors.appColor : colors.red,
              }}
            >
              {title.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenFull style={styles.container}>
      <BackNavigationBar
        iconLeft="arrow-back"
        iconRight=""
        btnLeft={() => {
          navigation.goBack();
        }}
        title={AppContent.skillsTitle}
        subtitle={AppContent.skillsSubtitle}
      />

      <View style={styles.formContainer}>
        <View style={{ height: 60 }}>
          <RMTextInput
            keyboardType="default"
            placeholder="Search"
            onChangeText={handleSearch}
            value={searchTerm}
          />
        </View>
        {data.length == 0 && (
          <ActivityIndicator
            color={colors.appColor}
            height={60}
            animating={true}
          />
        )}

        <FlatList
          style={{ flex: 1, marginHorizontal: -30, paddingHorizontal: 30 }}
          data={filteredData.slice(0, 25)}
          renderItem={({ item, index }) => <Item title={item} index={index} />}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ flexWrap: "wrap", justifyContent: "center" }}
          numColumns={25}
        />

        <SafeAreaView>
          <RMButton
            title="Save Skills"
            style={{
              backgroundColor: colors.green,
              marginBottom: 20,
            }}
            onPress={() => {
              const skills = { skills: selectedIds };
              navigation.navigate("AddCertificateScreen", {
                ...route.params,
                ...skills,
                resume: route.params.resume,
              });
            }}
          />
        </SafeAreaView>
      </View>
    </ScreenFull>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
  },
  formContainer: { flex: 1, paddingHorizontal: 30, paddingTop: 10 },
  item: {
    backgroundColor: colors.appColor,
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
  },
  title: {
    fontSize: 15,
    color: colors.white,
  },
});
