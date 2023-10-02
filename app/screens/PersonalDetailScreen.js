import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import RMTextInput from "../components/RMBoldTextInput";
import RMButton from "../components/RMButton";
import colors from "../config/colors";
import RMText from "../components/RMText";
import RMTextSelect from "../components/RMBoldSelectText";

import SearchCountryModel from "../components/SearchCountryModel";
import BackNavigationBar from "../components/BackNavigationBar";
import ScreenFull from "../components/ScreenFull";
import { AppContent } from "../helper/AppContent";

export default function PersonalDetailScreen({ navigation, route }) {
  const personDetail = route?.params?.resume?.details?.personDetail;

  const [firstName, setFirstName] = useState(route.params.firstName);
  const [lastName, setLastName] = useState(route.params.lastName);
  const [modalVisible, setModalVisible] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState(
  //   personDetail?.country ?? ""
  // );

  const subtitle = AppContent.personalInfoSubtitle;

  const usPhoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  const getFullName = () => {
    if (firstName || lastName) {
      return `${firstName || ""} ${lastName || ""}`;
    } else {
      return "";
    }
  };

  useEffect(() => {
    console.log("======++++++++++++++++++=======");
    console.log("Country: ", personDetail?.country);
    console.log("======++++++++++++++++++=======");
  }, []);

  return (
    <ScreenFull style={{ flex: 1 }}>
      {/* View Containing RMTextInputs below with Formik and Yup */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <BackNavigationBar
          iconLeft="arrow-back"
          iconRight=""
          btnLeft={() => {
            navigation.goBack();
          }}
          title={getFullName()}
          subtitle={subtitle}
        />

        <Formik
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            email: personDetail?.email ?? "",
            phone: personDetail?.phone ?? "",
            website: personDetail?.website ?? "",
            city: personDetail?.city ?? "",
            country: personDetail?.country ?? "",
          }}
          onSubmit={
            (values) => console.log("Values Updated", values)
            // Keyboard.dismiss()
          }
          //Validating Fields Below using Yup

          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email("Invalid email")
              .matches(
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                "Invalid email format"
              )
              .required()
              .label("Email"),
            phone: yup
              .string()
              .matches(
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                "Invalid phone number"
              )
              .required()
              .label("Phone"),
            website: yup.string().notRequired().label("Website"),
            city: yup.string().required("City is required").label("City"),
            country: yup
              .string()
              .required("Country is required")
              .label("Country"),
          })}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            setFieldTouched,
            setFieldValue,
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
                  autoCorrect={false}
                  title={"Email"}
                  keyboardType="email-address"
                  placeholder="john@company.com"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  error={touched.email && errors.email ? errors.email : null}
                  value={values.email}
                  autoCapitalize={"none"}
                />
                <RMTextInput
                  autoCorrect={false}
                  title={"Phone"}
                  keyboardType="phone-pad"
                  placeholder="(000) 123 4567"
                  onChangeText={handleChange("phone")}
                  onBlur={() => setFieldTouched("phone")}
                  error={touched.phone && errors.phone ? errors.phone : null}
                  value={values.phone}
                />
                <RMTextInput
                  autoCorrect={false}
                  title={"Website"}
                  keyboardType="url"
                  placeholder="www.john.com"
                  onChangeText={handleChange("website")}
                  onBlur={() => setFieldTouched("website")}
                  error={
                    touched.website && errors.website ? errors.website : null
                  }
                  value={values.website}
                  autoCapitalize={"none"}
                />
                <RMTextInput
                  title={"City"}
                  keyboardType="default"
                  placeholder="New York"
                  onChangeText={handleChange("city")}
                  onBlur={() => setFieldTouched("city")}
                  error={touched.city && errors.city ? errors.city : null}
                  value={values.city}
                />

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <RMTextSelect
                    title={"Country"}
                    keyboardType="default"
                    placeholder="Select Country"
                    // error={selectedCountry == ""}
                    //  value={values.selectedCountry}
                    error={values.country == ""}
                    value={values.country}
                    onBlur={() => setFieldTouched("country")}
                    onChangeText={handleChange("country")}
                  />
                </TouchableOpacity>

                <RMButton
                  title="Continue"
                  style={{ backgroundColor: colors.appColor, marginTop: 40 }}
                  onPress={
                    //handleSubmit
                    () => {
                      navigation.navigate("UserSummaryScreen", {
                        ...route.params,
                        personDetail: {
                          firstName: values.firstName,
                          lastName: values.lastName,
                          email: values.email,
                          phone: values.phone,
                          website: values.website,
                          city: values.city,
                          country: values.country,
                        },
                        resume: route.params.resume,
                      });
                    }
                  }
                />
                <SearchCountryModel
                  visible={modalVisible}
                  onSelectCountry={(newText) => {
                    console.log("Selected", newText);
                    setFieldValue("country", newText);
                    // setSelectedCountry(newText);
                  }}
                  onClose={() => setModalVisible(false)}
                />
              </View>
            </ScrollView>
          )}
        </Formik>
      </KeyboardAvoidingView>
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
  formContainer: {
    marginHorizontal: 30,
    paddingTop: 20,
  },
});
