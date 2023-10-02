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

export default function AddReferenceScreen({ navigation, route }) {
  const referenceDetail = route?.params?.resume?.details?.referenceDetail;

  const [addReference, setAddReference] = useState(referenceDetail ?? []);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // console.log("======++++++++++++++++++=======");
    // console.log("Education: ", educationDetail);
    // console.log("======++++++++++++++++++=======");
  }, []);

  const addAcademicCredentials = (values, actions) => {
    const isAnyValueEmpty = values.reference === "" || values.institute === "";

    if (!isAnyValueEmpty) {
      const academicCredential = {
        reference: values.reference,
        institute: values.institute,
      };
      setAddReference([...addReference, academicCredential]);
    }
    actions.resetForm();
    toggleForm();
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const validationSchema = Yup.object().shape({
    reference: Yup.string().notRequired("Reference is required"),
    institute: Yup.string().notRequired("Institute is required"),
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
        title="Reference"
        subtitle={AppContent.referenceSubtitle}
      />

      <Formik
        initialValues={{
          reference: referenceDetail?.reference ?? "",
          institute: referenceDetail?.institute ?? "",
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
                    title={"Reference"}
                    keyboardType="default"
                    placeholder=" add reference"
                    onChangeText={formikProps.handleChange("reference")}
                    onBlur={formikProps.handleBlur("reference")}
                    error={
                      formikProps.touched.reference &&
                      formikProps.errors.reference
                        ? formikProps.errors.reference
                        : null
                    }
                    value={formikProps.values.reference}
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

                  <RMButton
                    title="Add Reference"
                    style={{ backgroundColor: colors.green }}
                    onPress={formikProps.handleSubmit}
                  />
                </View>
              ) : (
                <View>
                  {addReference.length > 0 && (
                    <View style={styles.eductionContainer}>
                      {(addReference ?? []).map((item, index) => (
                        <View style={styles.eductionItem} key={index}>
                          <Text style={styles.eductionCompany}>
                            {item.reference}
                          </Text>
                          <Text style={styles.eductionPosition}>
                            {item.institute}
                          </Text>
                          <TouchableOpacity
                            onPress={() => {
                              console.log(index);
                              const list = [...addReference];
                              list.splice(index, 1);
                              setAddReference(list);
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
                      addReference.length > 0
                        ? "ADD REFERENCE"
                        : "ADD REFERENCE"
                    }
                    style={{ backgroundColor: colors.green }}
                    onPress={toggleForm}
                  />

                  {addReference.length >= 0 && (
                    <RMButton
                      title="CONTINUE"
                      style={{
                        backgroundColor: colors.appColor,
                        marginBottom: 50,
                      }}
                      onPress={
                        // formikProps.handleSubmit
                        () => {
                          navigation.navigate("ChooseHobbyScreen", {
                            referenceDetail: addReference,
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
