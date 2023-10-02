import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  Platform,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
  TextInput,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import BackNavigationBar from "../components/BackNavigationBar";
import { TemplateContent } from "../helper/TemplateContent";
import { SegmentedButtons } from "react-native-paper";
import * as Print from "expo-print";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import Modal from "react-native-modal";
import Icons from "@expo/vector-icons/Ionicons";
//Reward/Intertitial Ad import
import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
  AdEventType,
  RewardedAdEventType,
} from "react-native-google-mobile-ads";

import colors from "../config/colors";
import RMButton from "../components/RMButton";
import Pdf from "react-native-pdf";

import ScreenFull from "../components/ScreenFull";
import { updateResume } from "../helper/AppStorage";

export default function GeneratePDFScreen({ navigation, route }) {
  const [selectedPrinter, setSelectedPrinter] = useState();
  const [pdfUri, setPdfUri] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [allTitles, setAllTitles] = useState([]);

  const [pageSize, setPageSize] = useState("letter");
  const [height, setHeight] = useState("792");
  const [width, setWidth] = useState("612");
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  //intertialAd code

  const interstitial = InterstitialAd.createForAdRequest(
    "ca-app-pub-3940256099942544/1033173712",
    {
      requestNonPersonalizedAdsOnly: true,
      keywords: ["fashion", "clothing"],
    }
  );

  const handlePageSizeChange = (value) => {
    setPageSize(value);

    // Update height and width based on the selected page size

    if (value === "letter") {
      setHeight("792");
      setWidth("612");
    } else if (value === "a4") {
      setHeight("864");
      setWidth("612");
    } else if (value === "legal") {
      setHeight("1008");
      setWidth("612");
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  var userResume = route.params.resume;
  const templateItem = route.params.template;
  var html = ``;

  const createPDF = async () => {
    let myPdfUri = FileSystem.documentDirectory + `template.pdf`;
    const { uri } = await Print.printToFileAsync({
      html: html,
      useMarkupFormatter: true,
      // width: width,
      // height: height,
    });
    await FileSystem.moveAsync({ from: uri, to: myPdfUri });
    console.log("File has been saved to:", uri);
    console.log("File has been move to:", myPdfUri);

    const fileInfo = await FileSystem.getInfoAsync(myPdfUri);
    const fileSizeInBytes = fileInfo.size;
    if (fileSizeInBytes > 1024) {
      setPdfUri(myPdfUri);
    } else {
      let myPdfUri = FileSystem.documentDirectory + `template.pdf`;
      const { uri } = await Print.printToFileAsync({
        html: html,
      });
      await FileSystem.moveAsync({ from: uri, to: myPdfUri });
      console.log("File has been saved to:", uri);
      console.log("File has been move to:", myPdfUri);

      setPdfUri(myPdfUri);
    }
  };

  // const printToFile = async () => {
  //   const { uri } = await Print.printToFileAsync({ html });
  //   console.log("File has been saved to:", uri);
  //   await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  // };

  // const selectPrinter = async () => {
  //   try {
  //     const printer = await Print.selectPrinterAsync();
  //     setSelectedPrinter(printer);
  //   } catch (err) {
  //     Alert.alert("You have Cancel Printing Process");
  //   }
  // };

  // const printAllAndSave = async () => {
  //   for (i = 1; i <= 56; i++) {
  //     var html = getHTML(i, resume);

  //     let fileUri = FileSystem.documentDirectory + `template_${i}.html`;
  //     let pdfUri = FileSystem.documentDirectory + `template_${i}.pdf`;
  //     await FileSystem.writeAsStringAsync(fileUri, html, {
  //       encoding: FileSystem.EncodingType.UTF8,
  //     });
  //     const { uri } = await Print.printToFileAsync({
  //       html: html,
  //       useMarkupFormatter: true,
  //     });
  //     await FileSystem.moveAsync({ from: uri, to: pdfUri });
  //     console.log("File has been saved to:", i, uri);
  //     console.log("File has been move to:", pdfUri);
  //   }
  // };

  useEffect(() => {
    let timeoutId;

    //Intertitial Ad code Below

    const handleInterstitialLoaded = () => {
      clearTimeout(timeoutId);
      setIsAdLoaded(true);
      interstitial.show();
      createPDF();
    };

    timeoutId = setTimeout(() => {
      setIsAdLoaded(true);
      createPDF();
    }, 4000);

    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      handleInterstitialLoaded
    );

    interstitial.load();

    console.log(templateItem);

    var id = templateItem.id;
    html = TemplateContent.getHTML(id, userResume);

    var {
      personDetail,
      educationDetail,
      workExperience,
      skills,
      userHobbies,
      userSummary,
      jobPosition,
      certificatesDetail,
      awardsDetail,
      referenceDetail,
    } = userResume.details;

    const educationTitles = educationDetail.map((item) => ({
      type: "education",
      name: item.degree,
      enabled: true,
    }));

    const experienceTitles = workExperience.map((item) => ({
      type: "experience",
      name: item.company,
      enabled: true,
    }));

    const certificateTitles = certificatesDetail.map((item) => ({
      type: "certificate",
      name: item.certificate,
      enabled: true,
    }));

    const awardsTitles = awardsDetail.map((item) => ({
      type: "awards",
      name: item.awards,
      enabled: true,
    }));

    const referenceTitles = referenceDetail.map((item) => ({
      type: "reference",
      name: item.reference,
      enabled: true,
    }));

    const hobbies = {
      type: "hobbies",
      name: "Hobbies",
      enabled: true,
    };

    const userSkills = {
      type: "skills",
      name: "Skills",
      enabled: true,
    };

    var titles = [
      ...educationTitles,
      ...experienceTitles,
      ...certificateTitles,
      ...awardsTitles,
      ...referenceTitles,
      hobbies,
      userSkills,
    ];
    setAllTitles(titles);
    // createPDF();

    return () => {
      clearTimeout(timeoutId); // Clear the timeout when the component unmounts
      unsubscribe();
    };
  }, []);

  const updateItem = (itemName, newEnableStatus) => {
    console.log("Function called");
    const updatedItems = allTitles.map((item) => {
      if (item.name === itemName) {
        return { ...item, enabled: newEnableStatus };
      }
      return item;
    });

    setAllTitles(updatedItems);
  };

  const updateResumeLayout = () => {
    console.log("UpdateResumeLayout");

    setPdfUri("");

    var {
      personDetail,
      educationDetail,
      workExperience,
      skills,
      userHobbies,
      userSummary,
      jobPosition,
      certificatesDetail,
      awardsDetail,
      referenceDetail,
    } = userResume.details;

    var eduTitles = allTitles.filter((x) => x.type == "education" && x.enabled);

    var hobby = allTitles.filter((x) => x.type == "hobbies")[0];
    var skill = allTitles.filter((x) => x.type == "skills")[0];

    var expTitles = allTitles.filter(
      (x) => x.type == "experience" && x.enabled
    );

    var certifyTitles = allTitles.filter(
      (x) => x.type == "certificate" && x.enabled
    );

    var awardTitles = allTitles.filter((x) => x.type == "awards" && x.enabled);

    var refTitles = allTitles.filter((x) => x.type == "reference" && x.enabled);

    educationDetail = eduTitles.map((item) => {
      const matchingEducationItem = educationDetail.find(
        (educationItem) => educationItem.degree === item.name
      );
      return { ...matchingEducationItem, enabled: true };
    });

    workExperience = expTitles.map((item) => {
      const matchingItem = workExperience.find(
        (expItem) => expItem.company === item.name
      );
      return { ...matchingItem, enabled: true };
    });

    certificatesDetail = certifyTitles.map((item) => {
      const matchingCertificateItem = certificatesDetail.find(
        (certItem) => certItem.certificate === item.name
      );
      return { ...matchingCertificateItem, enabled: true };
    });

    awardsDetail = awardTitles.map((item) => {
      const matchingAwardItem = awardsDetail.find(
        (awardItem) => awardItem.awards === item.name
      );
      return { ...matchingAwardItem, enabled: true };
    });

    console.log(awardsDetail.map((x) => x.awards));

    referenceDetail = refTitles.map((item) => {
      const matchingRefItem = referenceDetail.find(
        (redItem) => redItem.reference === item.name
      );
      return { ...matchingRefItem, enabled: true };
    });

    // var updatedResume = userResume;
    //const updatedResume = Object.assign({}, userResume);
    var updatedResume = {};
    updatedResume.details = { ...userResume.details };
    updatedResume.details.workExperience = workExperience;
    updatedResume.details.educationDetail = educationDetail;
    updatedResume.details.certificatesDetail = certificatesDetail;
    updatedResume.details.awardsDetail = awardsDetail;
    updatedResume.details.referenceDetail = referenceDetail;
    if (!hobby.enabled) {
      updatedResume.details.userHobbies = [];
    }

    if (!skill.enabled) {
      updatedResume.details.skills = [];
    }

    var id = templateItem.id;
    html = TemplateContent.getHTML(id, updatedResume);

    createPDF();
  };

  return (
    <ScreenFull>
      <View style={styles.container}>
        <BackNavigationBar
          iconLeft="arrow-back"
          iconRight="share-outline"
          btnLeft={() => {
            navigation.goBack();
          }}
          btnRight={async () => {
            await shareAsync(pdfUri, {
              UTI: ".pdf",
              mimeType: "application/pdf",
            });
          }}
          title="PDF File Preview"
        />
        <View style={styles.container}>
          {!isAdLoaded ? (
            <ActivityIndicator size="large" color="blue" />
          ) : (
            pdfUri && (
              <Pdf source={{ uri: pdfUri }} style={styles.pdfContainer} />
            )
          )}

          {/* {pdfUri && (
            <Pdf source={{ uri: pdfUri }} style={styles.pdfContainer} />
          )} */}

          <SafeAreaView
            style={{
              bottom: 0,
              right: 0,
              position: "absolute",
            }}
          >
            <Pressable onPress={() => toggleModal()} style={styles.editBtn}>
              <Image
                source={require("../assets/icons/edit.png")}
                style={{ width: 24, height: 24, tintColor: colors.white }}
              />
            </Pressable>
          </SafeAreaView>
        </View>

        <Modal
          isVisible={isModalVisible}
          swipeDirection={["down"]}
          style={{
            justifyContent: "flex-end",
            margin: 0,
            // backgroundColor: colors.white,
          }}
          onSwipeComplete={() => setModalVisible(false)}
          swipeThreshold={40}
          propagateSwipe={true}
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={styles.modelInnerContainer}>
            <Text style={styles.title}>Select Details for Printing</Text>

            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SegmentedButtons
                value={pageSize}
                onValueChange={handlePageSizeChange}
                buttons={[
                  {
                    value: "letter",
                    label: "Letter",
                  },
                  {
                    value: "a4",
                    label: "A4",
                  },
                  { value: "legal", label: "Legal" },
                ]}
              />
            </View>

            {allTitles.length > 0 ? (
              <FlatList
                style={{ height: "100%" }}
                data={allTitles}
                keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => {
                  const itemTypes = {
                    education: "Education",
                    experience: "Experience",
                    certificate: "Certificate",
                    awards: "Awards",
                    reference: "Reference",
                    hobbies: "Hobbies",
                    skills: "Skills",
                  };

                  const firstIndexOfType = allTitles.findIndex(
                    (title) => title.type === item.type
                  );

                  const isFirstOfType = index === firstIndexOfType;

                  return (
                    <>
                      {isFirstOfType && item.type && (
                        <Text style={styles.label}>{itemTypes[item.type]}</Text>
                      )}

                      <TouchableOpacity
                        style={styles.universityItem}
                        onPress={() => updateItem(item.name, !item.enabled)}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={styles.universityName}>{item.name}</Text>
                          {item.enabled && (
                            <Icons
                              name={"checkmark"}
                              size={18}
                              color={colors.appColor}
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                    </>
                  );
                }}
              />
            ) : (
              <Text
                style={{
                  height: "100%",
                  textAlign: "center",
                }}
              >
                No Data Found
              </Text>
            )}

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                updateResumeLayout();
                setModalVisible(false);
              }}
            >
              <Text style={styles.cancelButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScreenFull>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  pdfContainer: {
    flex: 1,
    width: "100%",
  },

  modelStyle: {
    justifyContent: "flex-start",
    margin: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginHorizontal: 1,
    marginTop: 30,
  },
  modalBar: {
    backgroundColor: colors.gray,
    width: 200,
    height: 4,
    borderRadius: 30,
    position: "absolute",
    top: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  modelInnerContainer: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
    maxHeight: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  universityItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.appColor,
  },
  universityName: {
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: colors.appColor,
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
    width: "45%",
    alignSelf: "center",
  },
  cancelButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  editBtn: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: colors.appColor,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    bottom: 20,
    right: 20,
    flexWrap: "wrap",
    shadowColor: colors.black,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  label: {
    color: colors.appColor,
    fontWeight: "bold",
  },
});
