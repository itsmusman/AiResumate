import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Keyboard,
  Switch,
} from "react-native";

import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { Picker } from "@react-native-picker/picker";

import RMTextInput from "../components/RMBoldTextInput";
import RMButton from "../components/RMButton";
import colors from "../config/colors";
import RMText from "../components/RMText";
import RMTextSelect from "../components/RMBoldSelectText";

import ScreenFull from "../components/ScreenFull";
import BackNavigationBar from "../components/BackNavigationBar";
import SearchUniversityModal from "../components/SearchUniversityModel";
import { AppContent } from "../helper/AppContent";

import MonthYearPicker from "../components/MonthYearPicker";
import RMBoldDateText from "../components/RMBoldDateText";
import monthsData from "../helper/Dates";
import SearchDegreeModel from "../components/SearchDegreeModel";

export default function EducationDetailScreen({ navigation, route }) {
  const educationDetail = route?.params?.resume?.details?.educationDetail;

  const [isComplete, setIsComplete] = useState(true);
  const [isUniversityModalVisible, setIsUniversityModalVisible] =
    useState(false);
  const [isDegreeModalVisible, setIsDegreeModalVisible] = useState(false);
  const [isFromDateModalVisible, setIsFromDateModalVisible] = useState(false);
  const [isToDateModalVisible, setIsToDateModalVisible] = useState(false);

  const [academicCredentials, setAcademicCredentials] = useState(
    educationDetail ?? []
  );
  // const [isPresent, setIsPresent] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState({});
  const [selectedUniversityName, setSelectedUniversityName] = useState("");

  // New Formik function using useformik

  const validationSchema = yup.object().shape({
    degree: yup.string().required("Degree is required"),
    //university: Yup.string().required("University is required"),
    city: yup.string().required("City is required"),
    fromMonth: yup.string().required("From Month & Year is required"),
    fromYear: yup.string().required("From Month & Year is required"),
    toMonth: !isComplete
      ? yup.string().notRequired("To Month is required")
      : yup.string().required("To Month & Year is required"),
    toYear: !isComplete
      ? yup.string().notRequired("To Year is required")
      : yup.string().required("To Month & Year is required"),
  });

  const formik = useFormik({
    initialValues: {
      degree: educationDetail?.degree ?? "",
      university: educationDetail?.university ?? "",
      city: educationDetail?.city ?? "",
      fromMonth: educationDetail?.fromMonth ?? "",
      fromYear: educationDetail?.fromYear ?? "",
      toMonth: educationDetail?.toMonth ?? "",
      toYear: educationDetail?.toYear ?? "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log("Final values", values);

      const academicCredential = {
        degree: values.degree,
        university: values.university,
        city: values.city,
        fromMonth: values.fromMonth,
        fromYear: values.fromYear,
        toMonth: values.toMonth,
        toYear: values.toYear,
      };
      setAcademicCredentials([...academicCredentials, academicCredential]);
      console.log("Education added", academicCredential);
      formik.resetForm();
      toggleForm();

      // Do something with the input text here
    },
  });

  useEffect(() => {
    console.log("======++++++++++++++++++=======");
    console.log("Education: ", educationDetail);
    console.log("======++++++++++++++++++=======");
  }, []);

  // const addAcademicCredentials = (values, actions) => {
  //   const academicCredential = {
  //     degree: values.degree,
  //     university: selectedUniversityName,
  //     city: values.city,
  //     fromMonth: values.fromMonth,
  //     fromYear: values.fromYear,
  //     toMonth: values.toMonth,
  //     toYear: values.toYear,
  //   };
  //   setAcademicCredentials([...academicCredentials, academicCredential]);
  //   console.log("Education added", academicCredential);
  //   actions.resetForm();
  //   toggleForm();
  // };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const getMonthYearLabel = (month, year) => {
    if (month == 0) return year;
    let monthValue = monthsData.filter((x) => x.value == month)[0].label;
    return `${monthValue}, ${year}`;
  };

  return (
    <ScreenFull style={{ flex: 1, backgroundColor: "white" }}>
      {/* View Containing RMTextInputs below with Formik and Yup */}

      <BackNavigationBar
        iconLeft="arrow-back"
        iconRight=""
        btnLeft={() => {
          if (showForm) {
            setShowForm(!showForm);
          } else {
            navigation.goBack();
          }
        }}
        title={AppContent.educationTitle}
        subtitle={AppContent.educationSubtitle}
      />

      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled" // Allow direct click input when keyboard is open
      >
        <View style={styles.formContainer}>
          {showForm ? (
            <View>
              <TouchableOpacity onPress={() => setIsDegreeModalVisible(true)}>
                <RMTextSelect
                  multiline
                  title={"Degree"}
                  keyboardType="default"
                  placeholder="Master of Science"
                  onChangeText={formik.handleChange("degree")}
                  onBlur={formik.handleBlur("degree")}
                  value={formik.values.degree}
                  error={
                    formik.touched.degree && formik.errors.degree
                      ? formik.errors.degree
                      : null
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsUniversityModalVisible(true)}
              >
                <RMTextSelect
                  multiline
                  title={"University"}
                  keyboardType="default"
                  placeholder="Select University"
                  error={formik.errors.university == ""}
                  value={formik.values.university}
                  onChangeText={formik.handleChange("university")}
                />
              </TouchableOpacity>
              <RMTextInput
                title={"Location"}
                keyboardType="default"
                placeholder="Derby, England"
                onChangeText={formik.handleChange("city")}
                onBlur={formik.handleBlur("city")}
                error={
                  formik.touched.city && formik.errors.city
                    ? formik.errors.city
                    : null
                }
                value={formik.values.city}
              />
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => setIsFromDateModalVisible(true)}
              >
                <RMBoldDateText
                  multiline
                  title={"From"}
                  keyboardType="default"
                  placeholder="Month, Year"
                  onChangeText={formik.handleChange("fromYear")}
                  // error={jobPosition == ""}
                  onBlur={formik.handleBlur("fromMonth")}
                  value={
                    formik.values.fromYear
                      ? `${getMonthYearLabel(
                          formik.values.fromMonth,
                          formik.values.fromYear
                        )}`
                      : formik.values.fromYear
                  }
                  error={
                    formik.touched.fromMonth ||
                    (formik.errors.fromYear && formik.errors.fromMonth) ||
                    formik.errors.fromYear
                      ? formik.errors.fromMonth || formik.errors.fromYear
                      : null
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => setIsToDateModalVisible(true)}
              >
                <RMBoldDateText
                  multiline
                  title={"To"}
                  keyboardType="default"
                  placeholder="Month, Year"
                  onChangeText={formik.handleChange("toYear")}
                  onBlur={formik.handleBlur("toMonth")}
                  // error={jobPosition == ""}
                  value={
                    formik.values.toYear
                      ? `${getMonthYearLabel(
                          formik.values.toMonth,
                          formik.values.toYear
                        )}`
                      : formik.values.toYear
                  }
                  error={
                    formik.touched.toMonth ||
                    (formik.errors.toYear && formik.errors.toMonth) ||
                    formik.errors.toYear
                      ? formik.errors.toMonth || formik.errors.toYear
                      : null
                  }
                />
              </TouchableOpacity>
              {/* <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <RMText style={styles.presentLabel}>Complete</RMText>

                <Switch
                  onValueChange={(val) => {
                    console.log(val);
                    setIsComplete(val);
                  }}
                  trackColor={{
                    true: colors.appColor,
                    false: colors.lightGray,
                  }}
                  ios_backgroundColor={colors.lightGray}
                  value={isComplete}
                  style={{
                    flexDirection: "row",
                    padding: 8,
                    marginRight: 10,
                    marginVertical: 10,
                  }}
                />
              </View> */}
              <RMButton
                title="Add Education"
                style={{ backgroundColor: colors.green }}
                onPress={formik.handleSubmit}
              />
            </View>
          ) : (
            <View>
              {academicCredentials.length > 0 && (
                <View style={styles.eductionContainer}>
                  {academicCredentials.map((item, index) => (
                    <View style={styles.eductionItem} key={index}>
                      <Text style={styles.eductionCompany}>{item.degree}</Text>
                      <Text style={styles.eductionPosition}>
                        {item?.university}
                      </Text>
                      <Text style={styles.eductionPosition}>{item.city}</Text>
                      <Text style={styles.eductionDate}>
                        {item.fromYear} - {item.toYear}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          console.log(index);
                          const list = [...academicCredentials];
                          list.splice(index, 1);
                          setAcademicCredentials(list);
                        }}
                        style={styles.clearBtn}
                      >
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          source={require("../assets/icons/close.png")}
                        />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}

              <RMButton
                title={
                  academicCredentials.length > 0
                    ? "ADD EDUCATION"
                    : "ADD EDUCATION"
                }
                style={{ backgroundColor: colors.green }}
                onPress={toggleForm}
              />

              {academicCredentials.length > 0 && (
                <RMButton
                  title="CONTINUE"
                  style={{
                    backgroundColor: colors.appColor,
                    marginBottom: 50,
                  }}
                  onPress={
                    // formik.handleSubmit
                    () => {
                      navigation.navigate("SkillDetailScreen", {
                        //personDetail: route.params.personDetail,
                        ...route.params,
                        resume: route.params.resume,

                        educationDetail: academicCredentials,
                      });
                    }
                  }
                />
              )}
            </View>
          )}

          <SearchUniversityModal
            visible={isUniversityModalVisible}
            onSelectUniversity={(university) => {
              formik?.setFieldValue("university", university.name);
              setIsUniversityModalVisible(false);
            }}
            onClose={() => setIsUniversityModalVisible(false)}
          />

          <SearchDegreeModel
            visible={isDegreeModalVisible}
            onSelect={(degree) => {
              formik.setFieldValue("degree", degree);
              setIsDegreeModalVisible(false);
            }}
            onClose={() => setIsDegreeModalVisible(false)}
          />

          <MonthYearPicker
            visible={isFromDateModalVisible}
            onSelect={(month, year) => {
              formik.setFieldValue("fromYear", year);
              formik.setFieldValue("fromMonth", month);
            }}
            onClose={() => setIsFromDateModalVisible(false)}
          />

          <MonthYearPicker
            visible={isToDateModalVisible}
            onSelect={(month, year) => {
              formik.setFieldValue("toYear", year);
              formik.setFieldValue("toMonth", month);
            }}
            onClose={() => setIsToDateModalVisible(false)}
          />
        </View>
      </ScrollView>
    </ScreenFull>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    color: colors.appColor,
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  presentLabel: {
    marginRight: 10,
    color: colors.appColor,
  },
  label: {
    paddingTop: 20,
    color: colors.appColor,
  },
  formContainer: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  eductionContainer: {
    marginTop: 10,
  },
  eductionItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  eductionCompany: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  eductionPosition: {
    fontSize: 16,
    marginBottom: 5,
  },
  eductionDate: {
    fontSize: 14,
  },
  clearBtn: {
    position: "absolute",
    padding: 10,
    right: 10,
    top: 10,
    width: 30,
    height: 30,
  },
});
