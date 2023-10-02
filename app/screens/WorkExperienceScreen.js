import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  TextInput,
  Switch,
  Modal,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { firebase } from "../config/FirebaseSetup";

import RMTextInput from "../components/RMBoldTextInput";
import RMTextSelect from "../components/RMBoldSelectText";
import RMButton from "../components/RMButton";
import colors from "../config/colors";
import RMText from "../components/RMText";
import jobTitles from "../helper/JobTitles";
import localResponsibilities from "../helper/Responsibilities";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from expo/vector-icons

import SearchPositionModel from "../components/SearchPositionModel";
import ScreenFull from "../components/ScreenFull";
import BackNavigationBar from "../components/BackNavigationBar";
import { AppContent } from "../helper/AppContent";
import MonthYearPicker from "../components/MonthYearPicker";
import RMBoldDateText from "../components/RMBoldDateText";
import monthsData from "../helper/Dates";

export default function WorkExperienceScreen({ navigation, route }) {
  const experienceDetail = route?.params?.resume?.details?.workExperience ?? [];
  const [experiences, setExperiences] = useState(experienceDetail ?? []);
  const [myRoles, setMyRoles] = useState([]);
  const [isPresent, setIsPresent] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const [ResponsibilitiesData, setResponsibilitiesData] = useState([]);
  const [editItem, setEditItem] = useState("");
  const [editValue, setEditValue] = useState("");
  const [isPositionModalVisible, setIsPositionModalVisible] = useState(false);
  const [isFromDateModalVisible, setIsFromDateModalVisible] = useState(false);
  const [isToDateModalVisible, setIsToDateModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    loadData();
  }, [selectedPosition]);

  function prepareDocKey(str) {
    return str.replace("/", ".").toLowerCase();
  }

  async function loadData() {
    try {
      console.log("loading responsibilities ", selectedPosition);

      if (selectedPosition) {
        const collectionUri = firebase
          .firestore()
          .collection("responsibilities")
          .doc(prepareDocKey(selectedPosition));

        const doc = await collectionUri.get();

        if (doc.exists) {
          const dataObj = doc.data();
          const responsibilities = dataObj.items;

          console.log("Responsibilities:", responsibilities);

          const shuffledArray = responsibilities.sort(
            () => Math.random() - 0.5
          );
          const slicedArray = shuffledArray.slice(0, 4);
          setResponsibilitiesData(slicedArray);
        } else {
          console.log("No such document!");
          setResponsibilitiesData([]);
        }
      } else {
        setResponsibilitiesData([]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  //Getting data
  const addExperience = (values, actions) => {
    const newExperience = {
      company: values.company,
      position: values.position,
      city: values.city,
      roles: ResponsibilitiesData,
      fromMonth: values.fromMonth,
      fromYear: values.fromYear,
      toMonth: values.toMonth,
      toYear: values.toYear,
    };
    setExperiences([...experiences, newExperience]);
    console.log("Responsibilties", ResponsibilitiesData);
    console.log("Experience Added:", newExperience);
    actions.resetForm();
    toggleForm();
  };

  const toggleForm = () => {
    console.log("showForm called");
    setShowForm(!showForm);
  };

  const ExperienceSchema = Yup.object().shape({
    company: Yup.string().required("Company is required"),
    position: Yup.string().required("Position is required"),
    city: Yup.string().required("City is required"),
    fromMonth: Yup.string().required("From Month & Year is required"),
    fromYear: Yup.string().required("From Month & Year is required"),
    toMonth: !isPresent
      ? Yup.string().notRequired("To Month is required")
      : Yup.string().required("To Month & Year is required"),
    toYear: !isPresent
      ? Yup.string().notRequired("To Year is required")
      : Yup.string().required("To Month & Year is required"),
  });

  React.useEffect(() => {
    if (route.params?.roles) {
      setMyRoles(route.params?.roles);
      // console.log("My Roles  :", route.params?.roles);
    }
  }, [route.params?.roles]);

  useEffect(() => {
    // Filter the data
    console.log("======++++++++++++++++++=======");
    console.log("Experience: ", experienceDetail);
    console.log("======++++++++++++++++++=======");
    //console.log("skills :) ", skills);
  }, []);

  //Showing Responsibilities
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          marginBottom: 5,
        }}
        key={index}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            color: colors.appColor,
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  //Delete Responsibilities function

  const handleDelete = (item) => {
    const updatedData = ResponsibilitiesData.filter((res) => res !== item);
    setResponsibilitiesData(updatedData);
    console.log("Deleted :", item);
  };

  //Edit Responsibilities function
  const editSave = (value) => {
    const updatedData = ResponsibilitiesData.map((item) => {
      if (item === editItem) {
        return value;
      } else {
        return item;
      }
    });
    setResponsibilitiesData(updatedData);
    setEditItem("");
    setEditValue("");
  };

  const handleCancel = () => {
    setEditItem("");
    setEditValue("");
  };

  const handleEditConfirm = () => {
    editSave(editValue);
  };

  // By Commenting This handleEdit Use can be able to use Below handleEdit to Check the Model

  const handleEdit = (item) => {
    setEditItem(item);
    setEditValue(item);
  };

  //This below Function will trigger the Model for Updating the Responsibilties

  // const handleEdit = (item) => {
  //   setEditValue(item);
  //   openEditModal(item);
  // };

  // const openEditModal = (item) => {
  //   setIsModalVisible(true);
  //   setModalContent(
  //     <View style={{ backgroundColor: "white", padding: 20 }}>
  //       <TextInput value={editValue} onChangeText={setEditValue} multiline />
  //       <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
  //         <TouchableOpacity onPress={() => setIsModalVisible(false)}>
  //           <Text style={{ color: "red" }}>Cancel</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity onPress={handleEditConfirm}>
  //           <Text style={{ color: "blue" }}>Save</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // };

  const formik = useFormik({
    initialValues: {
      company: experienceDetail?.degree ?? "",
      position: experienceDetail?.name ?? "",
      fromYear: experienceDetail?.fromYear ?? "",
      fromMonth: experienceDetail?.fromMonth ?? "",
      toYear: experienceDetail?.toYear ?? "",
      toMonth: experienceDetail?.toMonth ?? "",
    },
    validationSchema: ExperienceSchema,
    onSubmit: addExperience,
  });

  const getMonthYearLabel = (month, year) => {
    if (month == 0) return year;
    let monthValue = monthsData.filter((x) => x.value == month)[0].label;
    return `${monthValue}, ${year}`;
  };

  const getClosestPosition = (position) => {
    setSelectedPosition(position);

    const searchQuery = position;
    const searchWords = searchQuery.split(" ");

    const filteredItem = ["generalResponsibilities", ...jobTitles]
      .map((string) => {
        const lowerCaseString = string.toLowerCase();
        const matchCount = searchWords.reduce((count, word) => {
          if (lowerCaseString.includes(word.toLowerCase())) {
            return count + 1;
          }
          return count;
        }, 0);
        return { string, matchCount };
      })
      .sort((a, b) => b.matchCount - a.matchCount)
      .map((item) => item.string)[0];

    console.log("filteredItem", filteredItem);
    setSelectedPosition(filteredItem);
  };

  return (
    <ScreenFull style={{ flex: 1, backgroundColor: "white" }}>
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
        title={AppContent.workExperienceTitle}
        subtitle={AppContent.workExperienceSubtitle}
      />
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled" // Allow direct click input when keyboard is open
      >
        <View style={styles.formContainer}>
          {showForm ? (
            <View>
              <RMTextInput
                title={"Company"}
                keyboardType="default"
                placeholder="Google Inc."
                onChangeText={formik.handleChange("company")}
                onBlur={formik.handleBlur("company")}
                error={
                  formik.touched.company && formik.errors.company
                    ? formik.errors.company
                    : null
                }
                value={formik.values.company}
              />

              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => setIsPositionModalVisible(true)}
              >
                <RMTextSelect
                  title={"Position"}
                  keyboardType="default"
                  placeholder="Senior Developer"
                  onChangeText={formik.handleChange("position")}
                  onBlur={() => {
                    var position = formik.values.position;
                    formik.handleBlur("position");
                    console.log("position", position);
                    getClosestPosition(position);
                  }}
                  returnKeyType="done"
                  error={
                    formik.touched.position && formik.errors.position
                      ? formik.errors.position
                      : null
                  }
                  value={formik.values.position}
                  // iconComponent={setSelectedPosition(formik.values.position)}
                />
              </TouchableOpacity>

              {formik.values.position !== "" && ResponsibilitiesData && (
                <View
                  style={{
                    borderColor: colors.appColor,
                    borderRadius: 9,
                    marginVertical: 5,
                  }}
                >
                  {ResponsibilitiesData.slice(0, 4).map((item, index) => (
                    <View
                      onPress={() => handleSelection(item)}
                      key={index}
                      style={{
                        marginVertical: 8,
                      }}
                    >
                      {editItem === item ? (
                        <View
                          style={{
                            marginVertical: 8,
                            flexDirection: "row",
                            borderColor: colors.appColor,
                            borderRadius: 8,
                            borderWidth: 1,
                          }}
                        >
                          <TextInput
                            autoFocus={true}
                            style={{
                              paddingLeft: 12,
                              fontSize: 15,
                              color: colors.appColor,
                              flex: 1,
                            }}
                            value={editValue}
                            onChangeText={setEditValue}
                            multiline
                          />
                          <View
                            style={{
                              marginVertical: 8,
                              alignItems: "center",
                            }}
                          >
                            <TouchableOpacity
                              style={styles.jobDescriptionBtn}
                              onPress={handleCancel}
                            >
                              <Ionicons
                                name="close"
                                size={24}
                                color={colors.appColor}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={styles.jobDescriptionBtn}
                              onPress={handleEditConfirm}
                            >
                              <Ionicons
                                name="checkmark-sharp"
                                size={24}
                                color={colors.appColor}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      ) : (
                        <View
                          style={{
                            marginVertical: 8,
                            flexDirection: "row",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 15,
                              color: colors.appColor,
                              flex: 1,
                            }}
                          >
                            {item}
                          </Text>
                          <View>
                            {/* <TouchableOpacity
                              onPress={() => handleDelete(item)}
                            >
                              <Image
                                source={require("../assets/icons/Delete.png")}
                                style={{
                                  width: 20,
                                  height: 20,
                                  resizeMode: "contain",
                                }}
                              />
                            </TouchableOpacity> */}

                            <TouchableOpacity
                              style={styles.jobDescriptionBtn}
                              onPress={() => handleEdit(item)}
                            >
                              <Ionicons
                                name="ios-create"
                                size={24}
                                color={colors.appColor}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}

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
                  onBlur={formik.handleBlur("fromMonth")}
                  onChangeText={formik.handleChange("fromYear")}
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
                <RMText style={styles.presentLabel}>Present</RMText>

                <Switch
                  onValueChange={(val) => {
                    console.log(val);
                    setIsPresent(val);
                  }}
                  trackColor={{
                    true: colors.appColor,
                    false: colors.lightGray,
                  }}
                  ios_backgroundColor={colors.lightGray}
                  value={isPresent}
                  style={{
                    flexDirection: "row",
                    padding: 8,
                    marginRight: 10,
                    // marginVertical: 10,
                  }}
                />
              </View> */}

              <View>
                {myRoles.map((item, index) => renderItem(item, index))}
              </View>

              {/* <RMButton
                title="Select More"
                style={{ backgroundColor: colors.green }}
                onPress={() => {
                  navigation.navigate("ResponsibilitiesScreen", {
                    selectedPosition: selectedPosition,
                  });
                }}
              /> */}

              <RMButton
                title="Add Experience"
                style={{ backgroundColor: colors.green, marginBottom: 60 }}
                onPress={formik.handleSubmit}
              />
            </View>
          ) : (
            <View>
              {experiences.length > 0 && (
                <View style={styles.experienceContainer}>
                  {experiences.map((experience, index) => (
                    <View style={styles.experienceItem} key={index}>
                      <Text style={styles.experienceCompany}>
                        {experience.company}
                      </Text>
                      <Text style={styles.experiencePosition}>
                        {experience?.position ?? ""}
                      </Text>
                      <Text style={styles.experiencePosition}>
                        {experience.city}
                      </Text>
                      <Text style={styles.experienceDate}>
                        {experience.fromYear} - {experience.toYear}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          console.log(index);

                          const list = [...experiences];
                          list.splice(index, 1);
                          setExperiences(list);
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
                  experiences.length > 0
                    ? "ADD ANOTHER EXPERIENCE"
                    : "ADD EXPERIENCE"
                }
                style={{ backgroundColor: colors.green }}
                onPress={toggleForm}
              />

              {experiences.length > 0 && (
                <RMButton
                  title="CONTINUE"
                  style={{
                    backgroundColor: colors.appColor,
                    marginBottom: 50,
                  }}
                  onPress={
                    // formik.handleSubmit
                    () => {
                      navigation.navigate("EducationDetailScreen", {
                        // personDetail: route.params.personDetail,
                        // educationDetail: route.params.educationDetail,
                        // skills: route.params.skills,
                        ...route.params,
                        workExperience: experiences,
                        resume: route.params.resume,
                      });
                    }
                  }
                />
              )}
            </View>
          )}

          {/* <Modal transparent={true} visible={isModalVisible} animationType="slide">
                {modalContent}
              </Modal> */}

          <SearchPositionModel
            visible={isPositionModalVisible}
            onSelectJob={(position) => {
              setSelectedPosition(position);
              formik.setFieldValue("position", position);
            }}
            onClose={() => setIsPositionModalVisible(false)}
          />

          <MonthYearPicker
            visible={isFromDateModalVisible}
            onSelect={(month, year) => {
              console.log("call back received", month, year);
              formik.setFieldValue("fromYear", year);
              formik.setFieldValue("fromMonth", month);
              // setIsFromDateModalVisible(false);
            }}
            onClose={() => setIsFromDateModalVisible(false)}
          />

          <MonthYearPicker
            visible={isToDateModalVisible}
            onSelect={(month, year) => {
              console.log("call back received", month, year);
              formik.setFieldValue("toYear", year);
              formik.setFieldValue("toMonth", month);
              // setIsFromDateModalVisible(false);
            }}
            onClose={() => setIsToDateModalVisible(false)}
          />
        </View>
      </ScrollView>
    </ScreenFull>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
    marginHorizontal: 30,
  },

  label: {
    color: colors.appColor,
  },
  presentLabel: {
    marginRight: 10,
    color: colors.appColor,
  },
  container: {
    flex: 1,
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  inputContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "80%",
  },
  addButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  experienceContainer: {
    marginTop: 10,
  },
  experienceItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  experienceCompany: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  experiencePosition: {
    fontSize: 16,
    marginBottom: 2,
  },
  experienceDate: {
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
  jobDescriptionBtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 34,
    // backgroundColor: "red",
  },
});
