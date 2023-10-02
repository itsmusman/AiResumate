import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

import RMTextInput from "../components/RMBoldTextInput";
import RMButton from "../components/RMButton";
import colors from "../config/colors";
import ScreenFull from "../components/ScreenFull";
import BackNavigationBar from "../components/BackNavigationBar";
import RMText from "../components/RMText";
import { Formik } from "formik";
import * as yup from "yup";

import { AppContent } from "../helper/AppContent";

export default function PersonalInfoScreen({ navigation, route }) {
  var personDetail = route?.params?.resume?.details?.personDetail;
  var firstName = personDetail?.firstName ?? "";
  var lastName = personDetail?.lastName ?? "";

  AppContent.random();
  const title = AppContent.letsGetStarted;
  const subtitle = AppContent.fullNameSubtitle;

  useEffect(() => {
    // console.log("======++++++++++++++++++=======");
    // console.log(title);
    // console.log("======++++++++++++++++++=======");
    // console.log(personDetail?.firstName);
  }, []);

  return (
    <ScreenFull>
      <BackNavigationBar
        iconLeft="arrow-back"
        iconRight=""
        btnLeft={() => {
          navigation.goBack();
        }}
        title={title}
        subtitle={subtitle}
      />

      <Formik
        initialValues={{
          firstName: firstName,
          lastName: lastName,
        }}
        onSubmit={
          (values) => console.log(values)
          // Keyboard.dismiss()
        }
        //Validating Fields Below using Yup

        validationSchema={yup.object().shape({
          firstName: yup
            .string()
            .required("First Name is required")
            .label("First Name "),
          lastName: yup
            .string()
            .required("Last Name is required")
            .label("Last Name"),
        })}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          setFieldTouched,
          touched,
          errors,
        }) => (
          <ScrollView
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled" // Allow direct click input when keyboard is open
          >
            <View style={styles.formContainer}>
              <RMTextInput
                autoFocus={true}
                title={"What is your name?"}
                keyboardType="default"
                placeholder="First Name"
                onChangeText={handleChange("firstName")}
                onBlur={() => setFieldTouched("firstName")}
                error={
                  touched.firstName && errors.email ? errors.firstName : null
                }
                value={values.firstName}
                autoCapitalize={"none"}
              />

              <RMTextInput
                keyboardType="default"
                placeholder="Last Name"
                onChangeText={handleChange("lastName")}
                onBlur={() => setFieldTouched("lastName")}
                error={
                  touched.lastName && errors.lastName ? errors.lastName : null
                }
                value={values.lastName}
                autoCapitalize={"none"}
              />

              <RMButton
                title="Next"
                style={{ backgroundColor: colors.appColor, marginTop: 40 }}
                onPress={
                  //handleSubmit
                  () => {
                    navigation.navigate("PersonalDetailScreen", {
                      ...route.params,
                      firstName: values.firstName,
                      lastName: values.lastName,
                      resume: route?.params?.resume
                        ? route?.params?.resume
                        : null,
                    });
                  }
                }
              />
            </View>
          </ScrollView>
        )}
      </Formik>
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
    marginTop: "20%",
    justifyContent: "center",
    alignItems: "center",
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
