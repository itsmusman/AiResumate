import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Platform, Text, Alert } from "react-native";

import BackNavigationBar from "../components/BackNavigationBar";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { addResume, updateResume, getResumes } from "../helper/AppStorage";

import colors from "../config/colors";
import RMButton from "../components/RMButton";

export default function FinalFileScreen({ navigation, route }) {
  const [selectedPrinter, setSelectedPrinter] = useState();
  const education = route.params.educationDetail;
  const experience = route.params.workExperience;
  const skills = route.params.skills;
  const hobbies = route.params.userHobbies;
  const resume = route.params.resume;
  const certificates = route.params.certificatesDetail;
  const awards = route.params.awardsDetail;
  const references = route.params.referenceDetail;

  var item = route.params;

  useEffect(() => {
    console.log("all data : ", route);

    function capitalizeObject(obj) {
      for (var prop in obj) {
        if (typeof obj[prop] === "string" && prop !== "email") {
          obj[prop] = obj[prop].charAt(0).toUpperCase() + obj[prop].slice(1);
        } else if (typeof obj[prop] === "object" && obj[prop] !== null) {
          capitalizeObject(obj[prop]); // Recursively capitalize nested objects
        }
      }
    }

    capitalizeObject(item);

    console.log("Capitalized data:", item);

    var resumeId = route.params?.resume?.id;
    if (resumeId) {
      // update
      item.resume = null;
      console.log("updated", resumeId);
      const updated = { id: resumeId, details: item };
      item = updated;
      updateResume(updated);
      // navigation.navigate("DrawerTxabs");
    } else {
      console.log("added");
      addResume(item);
      // navigation.navigate("DrawerTabs");
    }

    route?.params?.onListUpdate();
  }, []);

  return (
    <View style={styles.container}>
      <BackNavigationBar
        iconLeft="arrow-back"
        iconRight=""
        btnLeft={() => {
          route?.params?.onListUpdate();
          navigation.navigate("Home");
        }}
        title="Good Job!"
        subtitle="Select an option from list"
      />

      <View style={styles.formContainer}>
        <RMButton
          title="Choose Templates"
          style={{ backgroundColor: colors.green, marginTop: 40 }}
          onPress={() => {
            navigation.navigate("TemplatesListScreen", {
              resume: item,
            });
          }}
        />

        <RMButton
          title="Go Back"
          style={{ backgroundColor: colors.appColor, marginTop: 40 }}
          onPress={() => {
            // navigation.getParam("onListUpdate")();
            route?.params?.onListUpdate();
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    marginHorizontal: 40,
    marginTop: 20,
  },
});
