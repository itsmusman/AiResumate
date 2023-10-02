import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import colors from "../config/colors";
import BackNavigationBar from "../components/BackNavigationBar";
import ScreenFull from "../components/ScreenFull";
import RMButton from "../components/RMButton";
import RMTextInput from "../components/RMBoldTextInput";
import { AppContent } from "../helper/AppContent";
import hobbies from "../helper/HobbiesList";
import SearchHobbiesModel from "../components/SearchHobbiesModel";
import RMTextSelect from "../components/RMBoldSelectText";
import Icon from "@expo/vector-icons/Ionicons";

export default function ChooseHobbyScreen({ navigation, route }) {
  const userHobbies = route?.params?.resume?.details?.userHobbies ?? [];

  const [showModal, setShowModel] = useState(false);
  const [selectedHobbies, setSelectedHobbies] = useState(userHobbies);
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
              let otherItems = selectedHobbies.filter((x) => x.id !== title.id);
              setSelectedHobbies(otherItems);
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

    setSelectedHobbies([...selectedHobbies, ...mappedArray]);
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
        title={AppContent.hobbiesTitle}
        subtitle={AppContent.hobbiesSubtitle}
      />

      <View style={styles.formContainer}>
        <View style={{ height: 60 }}>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => setShowModel(true)}
          >
            <RMTextSelect
              keyboardType="default"
              placeholder="Enter Hobbies"
              returnKeyType="done"
              value={text}
              onChangeText={setText}
              onSubmitEditing={handleTextSubmit}
            />
          </TouchableOpacity>
        </View>

        {selectedHobbies.length == 0 && (
          <Text style={styles.subtitle}>Separate your items with commas.</Text>
        )}

        <FlatList
          style={{ flex: 1, marginHorizontal: -30, paddingHorizontal: 30 }}
          data={selectedHobbies.slice(0, 30)}
          renderItem={({ item, index }) => <Item title={item} index={index} />}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ flexWrap: "wrap", justifyContent: "center" }}
          numColumns={30}
        />

        <SafeAreaView>
          <RMButton
            title="Lets Make PDF:)"
            style={{ backgroundColor: colors.green }}
            onPress={() => {
              const hobbies = { userHobbies: selectedHobbies };
              navigation.navigate("FinalFileScreen", {
                ...route.params,
                ...hobbies,
                resume: route.params.resume,
              });
            }}
          />
        </SafeAreaView>

        <SearchHobbiesModel
          visible={showModal}
          onSelectHobby={(hobbies) => {
            console.log("Selected", hobbies);

            const filteredListB = hobbies.filter((itemB) => {
              return !selectedHobbies.find((itemA) => itemA.id === itemB.id);
            });

            const mergedList = [...selectedHobbies, ...filteredListB];
            setSelectedHobbies(mergedList);
            setShowModel(false);
          }}
          onClose={() => setShowModel(false)}
          setSelectedHobbies={setSelectedHobbies}
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
