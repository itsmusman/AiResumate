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
import { Formik } from "formik";
import * as Yup from "yup";

import RMTextInput from "../components/RMBoldTextInput";
import RMButton from "../components/RMButton";
import colors from "../config/colors";
import RMText from "../components/RMText";

import ScreenFull from "../components/ScreenFull";
import BackNavigationBar from "../components/BackNavigationBar";
import { AppContent } from "../helper/AppContent";

export default function AddAwardsScreen({ navigation, route }) {
  const awardDetail = route?.params?.resume?.details?.awardsDetail ?? [];

  const [addAwards, setAddAwards] = useState(awardDetail ?? []);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // console.log("======++++++++++++++++++=======");
    // console.log("Education: ", educationDetail);
    // console.log("======++++++++++++++++++=======");
  }, []);

  const addAcademicCredentials = (values, actions) => {
    const isAnyValueEmpty =
      values.awards === "" ||
      values.institute === "" ||
      values.institute === "" ||
      values.Year === "";

    if (!isAnyValueEmpty) {
      const academicCredential = {
        awards: values.awards,
        institute: values.institute,
        Year: values.Year,
      };
      setAddAwards([...addAwards, academicCredential]);
    }
    actions.resetForm();
    toggleForm();
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const validationSchema = Yup.object().shape({
    awards: Yup.string().notRequired("Awards is required"),
    institute: Yup.string().notRequired("Institute is required"),
    Year: Yup.string().notRequired("From Year is required"),
  });
  ///Getting data
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
        title={AppContent.awardsTitle}
        subtitle={AppContent.awardsSubtitle}
      />

      <Formik
        initialValues={{
          awards: awardDetail?.awards ?? "",
          institute: awardDetail?.institute ?? "",
          Year: awardDetail?.Year ?? "",
        }}
        onSubmit={addAcademicCredentials}
        validationSchema={validationSchema}
        //Validating Fields Below using Yup
      >
        {(formikProps) => (
          <ScrollView>
            <View style={styles.formContainer}>
              {showForm ? (
                <View>
                  <RMTextInput
                    title={"Awards"}
                    keyboardType="default"
                    placeholder=" add awards"
                    onChangeText={formikProps.handleChange("awards")}
                    onBlur={formikProps.handleBlur("awards")}
                    error={
                      formikProps.touched.awards && formikProps.errors.awards
                        ? formikProps.errors.awards
                        : null
                    }
                    value={formikProps.values.awards}
                  />
                  <RMTextInput
                    title={"Institute"}
                    keyboardType="default"
                    placeholder="add an institute"
                    onChangeText={formikProps.handleChange("institute")}
                    onBlur={formikProps.handleBlur("institute")}
                    error={
                      formikProps.touched.institute &&
                      formikProps.errors.institute
                        ? formikProps.errors.institute
                        : null
                    }
                    value={formikProps.values.institute}
                  />

                  <RMText style={styles.label}>Year</RMText>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <RMTextInput
                      keyboardType="phone-pad"
                      placeholder="yyyy"
                      onChangeText={formikProps.handleChange("Year")}
                      onBlur={() => formikProps.handleBlur("Year")}
                      style={{ flex: 1 }}
                      value={formikProps.values.Year}
                    />
                  </View>

                  <RMButton
                    title="Add Awards"
                    style={{ backgroundColor: colors.green }}
                    onPress={formikProps.handleSubmit}
                  />
                </View>
              ) : (
                <View>
                  {addAwards.length > 0 && (
                    <View style={styles.eductionContainer}>
                      {(addAwards ?? []).map((item, index) => (
                        <View style={styles.eductionItem} key={index}>
                          <Text style={styles.eductionCompany}>
                            {item.awards}
                          </Text>
                          <Text style={styles.eductionPosition}>
                            {item.institute}
                          </Text>
                          <Text style={styles.eductionDate}>{item.Year}</Text>
                          <TouchableOpacity
                            onPress={() => {
                              console.log(index);
                              const list = [...addAwards];
                              list.splice(index, 1);
                              setAddAwards(list);
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
                    title={addAwards.length > 0 ? "ADD AWARDS" : "ADD AWARDS"}
                    style={{ backgroundColor: colors.green }}
                    onPress={toggleForm}
                  />

                  {addAwards.length >= 0 && (
                    <RMButton
                      title="CONTINUE"
                      style={{
                        backgroundColor: colors.appColor,
                        marginBottom: 50,
                      }}
                      onPress={
                        // formikProps.handleSubmit
                        () => {
                          navigation.navigate("AddReferenceScreen", {
                            awardsDetail: addAwards,
                            ...route.params,
                            resume: route.params.resume,
                          });
                        }
                      }
                    />
                  )}
                </View>
              )}
            </View>
          </ScrollView>
        )}
      </Formik>
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
