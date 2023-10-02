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

import RMTextInput from "../components/RMBoldTextInput";
import RMButton from "../components/RMButton";
import colors from "../config/colors";
import RMText from "../components/RMText";

import MonthYearPicker from "../components/MonthYearPicker";
import RMBoldDateText from "../components/RMBoldDateText";
import monthsData from "../helper/Dates";

import ScreenFull from "../components/ScreenFull";
import BackNavigationBar from "../components/BackNavigationBar";
import { AppContent } from "../helper/AppContent";

export default function AddCertificateScreen({ navigation, route }) {
  const [isFromDateModalVisible, setIsFromDateModalVisible] = useState(false);
  const [isToDateModalVisible, setIsToDateModalVisible] = useState(false);

  const certificateDetail =
    route?.params?.resume?.details?.certificatesDetail ?? [];

  const [addCertificates, setAddCertificates] = useState(
    certificateDetail ?? []
  );

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // console.log("======++++++++++++++++++=======");
    // console.log("Education: ", educationDetail);
    // console.log("======++++++++++++++++++=======");
  }, []);

  // New Formik function using useformik

  const validationSchema = yup.object().shape({
    certificate: yup.string().notRequired("certificate is required"),
    institute: yup.string().notRequired("Institute is required"),
    fromMonth: yup.string().notRequired("From Month is required"),
    Year: yup.string().notRequired("From Year is required"),
  });

  const formik = useFormik({
    initialValues: {
      certificate: certificateDetail?.certificate ?? "",
      institute: certificateDetail?.institute ?? "",
      Year: certificateDetail?.Year ?? "",
      fromMonth: certificateDetail?.fromMonth ?? "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log("Final values", values);

      const isAnyValueEmpty =
        values.certificate === "" ||
        values.institute === "" ||
        values.Year === "" ||
        values.fromMonth === "";

      if (!isAnyValueEmpty) {
        const academicCredential = {
          certificate: values.certificate,
          institute: values.institute,
          fromMonth: values.fromMonth,
          Year: values.Year,
        };

        setAddCertificates([...addCertificates, academicCredential]);
        console.log("Certificate added", academicCredential);
      }
      formik.resetForm();
      toggleForm();

      // Do something with the input text here
    },
  });

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
        title={AppContent.certificatesTitle}
        subtitle={AppContent.certificatesSubtitle}
      />

      <ScrollView>
        <View style={styles.formContainer}>
          {showForm ? (
            <View>
              <RMTextInput
                title={"Certificate"}
                keyboardType="default"
                placeholder=" add certificate"
                onChangeText={formik.handleChange("certificate")}
                onBlur={formik.handleBlur("certificate")}
                error={
                  formik.touched.certificate && formik.errors.certificate
                    ? formik.errors.certificate
                    : null
                }
                value={formik.values.certificate}
              />
              <RMTextInput
                title={"Institute"}
                keyboardType="default"
                placeholder="add an institute"
                onChangeText={formik.handleChange("institute")}
                onBlur={formik.handleBlur("institute")}
                error={
                  formik.touched.institute && formik.errors.institute
                    ? formik.errors.institute
                    : null
                }
                value={formik.values.institute}
              />

              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => setIsFromDateModalVisible(true)}
              >
                <RMBoldDateText
                  multiline
                  title={"Month & Year"}
                  keyboardType="default"
                  placeholder="Month, Year"
                  onChangeText={formik.handleChange("Year")}
                  // error={jobPosition == ""}
                  value={
                    formik.values.fromMonth
                      ? `${getMonthYearLabel(
                          formik.values.fromMonth,
                          formik.values.Year
                        )}`
                      : formik.values.fromMonth
                  }
                />
              </TouchableOpacity>

              <RMButton
                title="Add Certificate"
                style={{ backgroundColor: colors.green }}
                onPress={formik.handleSubmit}
              />
            </View>
          ) : (
            <View>
              {addCertificates.length > 0 && (
                <View style={styles.eductionContainer}>
                  {(addCertificates ?? []).map((item, index) => (
                    <View style={styles.eductionItem} key={index}>
                      <Text style={styles.eductionCompany}>
                        {item.certificate ?? []}
                      </Text>
                      <Text style={styles.eductionPosition}>
                        {item.institute ?? []}
                      </Text>

                      <Text style={styles.eductionDate}>
                        {item.fromMonth ?? []} - {item.Year ?? []}
                      </Text>

                      <TouchableOpacity
                        onPress={() => {
                          console.log(index);
                          const list = [...addCertificates];
                          list.splice(index, 1);
                          setAddCertificates(list);
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
                  addCertificates.length > 0
                    ? "ADD CERTIFICATE"
                    : "ADD CERTIFICATE"
                }
                style={{ backgroundColor: colors.green }}
                onPress={toggleForm}
              />

              {addCertificates.length >= 0 && (
                <RMButton
                  title="CONTINUE"
                  style={{
                    backgroundColor: colors.appColor,
                    marginBottom: 50,
                  }}
                  onPress={
                    // formik.handleSubmit
                    () => {
                      navigation.navigate("AddAwardsScreen", {
                        certificatesDetail: addCertificates,
                        ...route.params,
                        // resume: route.params.resume ?? [],
                        resume: route.params.resume ?? [],
                      });
                    }
                  }
                />
              )}
            </View>
          )}

          <MonthYearPicker
            visible={isFromDateModalVisible}
            // onSelect={handleSave}
            onSelect={(month, year) => {
              console.log("call back received", month, year);
              formik.setFieldValue("Year", year);
              formik.setFieldValue("fromMonth", month);

              // setIsFromDateModalVisible(false);
            }}
            onClose={() => setIsFromDateModalVisible(false)}
          />
        </View>
      </ScrollView>
      {/* )} */}
      {/* </Formik> */}
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
