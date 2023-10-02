import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Keyboard,
  TextInput,
  Button,
  ScrollView,
  Switch,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import RMTextInput from "../components/RMBoldTextInput";
import RMButton from "../components/RMButton";
import colors from "../config/colors";
import ScreenFull from "../components/ScreenFull";
import BackNavigationBar from "../components/BackNavigationBar";
import RMTextSelect from "../components/RMBoldSelectText";

import SearchPositionModel from "../components/SearchPositionModel";

import SearchSummaryModal from "../components/SearchSummaryModal";

import { AppContent } from "../helper/AppContent";

export default function UserSummaryScreen({ navigation, route }) {
  const summary = route?.params?.resume?.details?.userSummary ?? "";
  const position = route?.params?.resume?.details?.jobPosition ?? "";

  const [modalVisible, setModalVisible] = useState(false);
  const [showModal, setShowModel] = useState(false);

  const validationSchema = yup.object().shape({
    jobPosition: yup
      .string()
      .min(5, "Job Position must be at least 5 characters")
      .required("Job Position is  required"),
    Summary: yup.string().required("Job Summary is  required"),
  });

  const formik = useFormik({
    initialValues: {
      jobPosition: position ?? "",
      userSummary: summary ?? "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log("Final values", values);
      // Do something with the input text here
    },
  });

  // const SaveJob = (newText) => {
  //   console.log("Selected", newText);
  //   formik.setFieldValue("jobPosition", newText);
  // };

  const SaveJob = (newText) => {
    console.log("Selected", newText);
    formik.setFieldValue("jobPosition", newText);
  };

  const handleSave = (newText) => {
    console.log("Selected Summary", newText);
    //setSelectedSummary(newText.value)
    formik.setFieldValue("userSummary", newText);
  };

  useEffect(() => {
    // Filter the data
    console.log("======++++++++++++++++++=======");
    console.log("Summary: ", summary);
    console.log("======++++++++++++++++++=======");
    //console.log("skills :) ", skills);
  }, []);
  return (
    <ScreenFull>
      <BackNavigationBar
        iconLeft="arrow-back"
        iconRight=""
        btnLeft={() => {
          navigation.goBack();
        }}
        title={AppContent.summaryTitle}
        subtitle={AppContent.summarySubtitle}
      />

      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled" // Allow direct click input when keyboard is open
      >
        <View style={styles.formContainer}>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => setShowModel(true)}
          >
            <RMTextSelect
              multiline
              title={"Job Position"}
              keyboardType="default"
              placeholder="Select Position"
              onChangeText={formik.handleChange("jobPosition")}
              // error={jobPosition == ""}
              value={formik.values.jobPosition}
            />
          </TouchableOpacity>

          {formik.touched.jobPosition && formik.errors.jobPosition ? (
            <Text>{formik.errors.jobPosition}</Text>
          ) : null}

          <View style={{ flexDirection: "row-reverse" }}>
            <TouchableOpacity
              style={{
                padding: 8,
                justifyContent: "center",
                borderRadius: 20,
                borderWidth: 1,
                borderColor: colors.appColor,
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ fontSize: 14, color: colors.appColor }}>
                Suggest me a summary
              </Text>
            </TouchableOpacity>
          </View>

          <RMTextInput
            multiline
            numberOfLines={4}
            title={"Summary"}
            keyboardType="default"
            placeholder="Summary"
            value={formik.values.userSummary}
            onChangeText={formik.handleChange("userSummary")}
          />
          {formik.touched.userSummary && formik.errors.userSummary ? (
            <Text>{formik.errors.userSummary}</Text>
          ) : null}

          <RMButton
            title="Next"
            style={{ backgroundColor: colors.appColor, marginTop: 40 }}
            onPress={() => {
              formik.handleSubmit;
              if (formik.values.userSummary != "") {
                const summary = {
                  userSummary: formik.values.userSummary,
                  jobPosition: formik.values.jobPosition,
                };
                navigation.navigate("WorkExperienceScreen", {
                  ...route.params,
                  ...summary,
                  resume: route.params.resume ?? [],
                });
              } else {
                navigation.navigate("EducationDetailScreen");
                //setError("Summary is Required!");
              }
            }}
          />

          <SearchPositionModel
            visible={showModal}
            onSelectJob={SaveJob}
            onClose={() => setShowModel(false)}
          />
          <SearchSummaryModal
            visible={modalVisible}
            onSelectSummary={handleSave}
            onClose={() => setModalVisible(false)}
          />
        </View>
      </ScrollView>
    </ScreenFull>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 40,
  },
  formContainer: {
    justifyContent: "center",
    paddingHorizontal: 30,
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
