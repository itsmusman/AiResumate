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
import RMTextSelect from "../components/RMBoldSelectText";
import SearchPositionModel from "../components/SearchPositionModel";
import Icon from "@expo/vector-icons/Ionicons";

import { firebase } from "../config/FirebaseSetup";
import { ActivityIndicator } from "react-native-paper";
import { AppContent } from "../helper/AppContent";
import SearchSkillsModel from "../components/SearchSkillsModel";

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
  const [showModal, setShowModel] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(skills);
  const [text, setText] = useState("");

  const Item = ({ title, index }) => {
    const isSelected = true; //selectedIds.filter((x) => x.id === title.id).length > 0;
    return (
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
            flexDirection: "row",
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
              paddingLeft: 8,
              margin: 8,
              fontSize: 14,
              // color: colors.appColor,
              color: isSelected ? colors.appColor : colors.red,
            }}
          >
            {title.name}
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 12,
            }}
            //onPress={() => console.log(title)}
            onPress={() => {
              // handlePress(title);
              let otherSkills = selectedSkills.filter((x) => x.id !== title.id);
              setSelectedSkills(otherSkills);
            }}
            key={index}
          >
            <Icon name={"close"} size={16} color={colors.appColor} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const generateRandomId = () => {
    const length = 8; // Adjust the length of the random ID as needed
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }

    return randomId;
  };

  const handleTextSubmit = () => {
    // Handle the submitted text here
    console.log("Submitted Text:", text);

    const trimmedArray = text.split(",").map((item) => item.trim());

    const mappedArray = trimmedArray.map((item) => ({
      id: generateRandomId(),
      name: item,
    }));

    console.log(mappedArray);

    setSelectedSkills([...selectedSkills, ...mappedArray]);
    setText("");
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
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => setShowModel(true)}
          >
            <RMTextSelect
              keyboardType="default"
              placeholder="Enter Skills"
              returnKeyType="done"
              value={text}
              onChangeText={setText}
              onSubmitEditing={handleTextSubmit}
            />
          </TouchableOpacity>
        </View>

        {selectedSkills.length == 0 && (
          <Text style={styles.subtitle}>Separate your items with commas.</Text>
        )}

        <FlatList
          style={{
            flex: 1,
            marginHorizontal: -30,
            paddingHorizontal: 30,
          }}
          data={selectedSkills.slice(0, 25)}
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
              const skills = { skills: selectedSkills };
              navigation.navigate("AddCertificateScreen", {
                ...route.params,
                ...skills,
                resume: route.params.resume,
              });
            }}
          />
        </SafeAreaView>

        <SearchSkillsModel
          visible={showModal}
          onSelectSkill={(skills) => {
            console.log("Selected", skills);

            const filteredListB = skills.filter((itemB) => {
              return !selectedSkills.find((itemA) => itemA.id === itemB.id);
            });

            const mergedList = [...selectedSkills, ...filteredListB];

            setSelectedSkills(mergedList);
            setShowModel(false);
          }}
          onClose={() => setShowModel(false)}
          setSelectedSkills={setSelectedSkills}
        />
      </View>
    </ScreenFull>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    marginHorizontal: 30,
    paddingTop: 20,
  },
  subtitle: {
    textAlign: "center",
    paddingHorizontal: 10,
    color: colors.appColor,
  },
});
