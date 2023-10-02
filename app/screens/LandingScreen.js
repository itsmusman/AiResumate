import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Platform,
  Animated,
  SafeAreaView,
  Button,
  TextInput,
  ActionSheetIOS,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";

import Card from "../components/Card";
import LandingNavigationBar from "../components/LandingNavigationBar";

import Screen from "../components/ScreenFull";
import UserList from "../components/UserItem";
import RMButton from "../components/RMButton";
import colors from "../config/colors";
import Route from "../config/Route";
import data from "../appData/cardsOptionsJson";
import responsibilities from "../helper/ResponsibilitiesMainCategory";
import { addResume, getResumes, deleteResume } from "../helper/AppStorage";
import { createSampleResume } from "../helper/SampleResume";
import { firebase } from "../config/FirebaseSetup";
import RMText from "../components/RMText";
import BannerAdComponent from "../components/BannerAdComponent";

export default function LandingScreen() {
  const [resumes, setResumes] = useState([]);
  const [actionItem, setActionItem] = useState(null);
  const navigation = useNavigation();

  const [selectedCardId, setSelectedCardId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleCardPress = async (item) => {
    console.log("Selected Card id", item.id);
    setSelectedCardId(item);
    setIsModalVisible(true);
  };

  const handleGenerateResume = async () => {
    if (selectedCardId) {
      // Generate resume with first name, last name, and selected card
      let resume = createSampleResume(firstName, lastName, selectedCardId.name);
      console.log("Selected Card name", selectedCardId.name);
      await addResume(resume);
      const listOfResumes = await getResumes();
      console.log("all local resumes", listOfResumes?.items);
      setResumes(listOfResumes?.items ?? []);
    }
    setIsModalVisible(false);
    setFirstName("");
    setLastName("");
  };

  const sheetCareerType = useRef();
  const sheetItemAction = useRef();
  // sheet.current.open();

  async function fetchData() {
    const listOfResumes = await getResumes();
    console.log("all local resumes", listOfResumes?.items);
    setResumes(listOfResumes?.items ?? []);
  }

  useEffect(() => {
    function prepareDocKey(str) {
      return str.replace("/", ".").toLowerCase();
    }

    function saveResponsibilities() {
      var counter = 0;
      Object.keys(responsibilities)
        .sort()
        .map(function (key) {
          var items = responsibilities[key];
          counter++;
          // if (counter < 1000 && counter > 3000) {
          //   return;
          // }
          firebase
            .firestore()
            .collection("responsibilities")
            .doc(prepareDocKey(key))
            .set({ items })
            .then(() => {
              console.log(key, "added!");
            });
        });
    }

    async function fetchResponsibilities() {
      console.log("fetching Responsibilities count", "");

      // const collectionRef = firebase.firestore().collection("responsibilities");
      // const querySnapshot = await collectionRef.get();
      // const count = querySnapshot.size;
      // console.log(count, "fetchResponsibilities count");
    }
    // saveResponsibilities();
    fetchResponsibilities();

    fetchData();
  }, []);

  const handleListUpdate = () => {
    // console.warn("listUpdatedOnLanding", "listUpdatedOnLanding");
    fetchData();
  };

  return (
    <Screen>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: colors.white,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LandingNavigationBar
          iconLeft="menu"
          btnLeft={() => {
            navigation.openDrawer();
          }}
        />

        <View style={styles.pageDetail}>
          <View style={styles.detail}>
            <View
              style={{
                marginTop: -20,
                height: 160,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: colors.appColor,
              }}
            >
              <Text style={styles.firstHeading}>
                {
                  "Craft a resume that lands you the job within a mere 2 minutes."
                }
              </Text>
              <View style={{ width: 120 }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    tintColor: colors.white,
                  }}
                  source={require("../assets/icons/job.png")}
                  resizeMode="contain"
                />
              </View>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                flexDirection: "row",
                padding: 8,
                marginTop: -20,
                backgroundColor: "#f1f1f1",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              {data.map((item) => (
                <Card
                  key={item.id}
                  title={item.name}
                  iconComponent={
                    <Image
                      source={item.icon}
                      style={{
                        resizeMode: "contain",
                        width: 32,
                        height: 32,
                        tintColor: colors.white,
                      }}
                    />
                  }
                  onPress={() => handleCardPress(item)}
                />
              ))}
            </ScrollView>
          </View>

          {/* <BannerAdComponent /> */}

          <BannerAdComponent />
          <View style={styles.moreResume}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("AboutScreen");
                navigation.navigate("ListModelScreen");
                // navigation.navigate("ResponsibilitiesScreen");
                // navigation.navigate(Route.ResumeListScreen);
              }}
            >
              <Text style={styles.secondHeading}>My Resume</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.moreBtn}
              onPress={() => {
                navigation.navigate(Route.ResumeListScreen);
              }}
            >
              <Text style={{ color: colors.appColor, fontSize: 13 }}>more</Text>
              <Image
                source={require("../assets/icons/forward.png")}
                style={{ width: 12, height: 12, tintColor: colors.appColor }}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            decelerationRate="normal"
            data={resumes}
            contentContainerStyle={{ paddingBottom: 120 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setActionItem(item);
                  if (Platform.OS == "ios") {
                    const options = [
                      "Generated and Download",
                      "Edit your resume",
                      "Delete your resume",
                      "Cancel",
                    ];

                    ActionSheetIOS.showActionSheetWithOptions(
                      {
                        title: "Select Action",
                        message: "Choose an option from the following actions",
                        tintColor: colors.appColor,
                        options: options,
                        cancelButtonIndex: 3,
                      },
                      (buttonIndex) => {
                        if (buttonIndex === 0) {
                          navigation.navigate("TemplatesListScreen", {
                            resume: item,
                          });
                        } else if (buttonIndex === 1) {
                          navigation.navigate("PersonalInfoScreen", {
                            resume: item,
                            onListUpdate: handleListUpdate,
                          });
                        } else if (buttonIndex === 2) {
                          removeResumeThisItem(item);
                        }
                      }
                    );
                  } else {
                    sheetItemAction.current.open();
                  }
                }}
              >
                <UserList
                  title={
                    item?.details?.personDetail?.firstName +
                    " " +
                    item?.details?.personDetail?.lastName
                  }
                  subtitle={item?.details?.jobPosition}
                  summary={item?.details?.userSummary}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <SafeAreaView
          style={{
            bottom: 0,
            right: 0,
            position: "absolute",
          }}
        >
          <Pressable
            onPress={() => {
              // sheetCareerType.current.open();
              navigation.navigate(Route.PersonalInfoScreen, {
                onListUpdate: handleListUpdate,
              });
            }}
            style={styles.addBtn}
          >
            <Image
              source={require("../assets/icons/add.png")}
              style={{ width: 24, height: 24, tintColor: colors.white }}
            />
          </Pressable>
        </SafeAreaView>

        {/* second bottomSheet Below */}
        <RBSheet
          customStyles={{ container: styles.bottomSheet }}
          openDuration={250}
          ref={sheetItemAction}
          animationType="fade"
        >
          <Animated.View style={styles.sheetContent}>
            <Text style={styles.sheetTitle}>Choose an action</Text>

            <RMButton
              title="Generated and Download"
              style={{ backgroundColor: colors.green }}
              image={require("../assets/icons/download.png")}
              onPress={(itemId) => {
                sheetItemAction.current.close();

                console.log("Download Pressed", actionItem?.id);
                navigation.navigate("TemplatesListScreen", {
                  resume: actionItem,
                });
              }}
            />
            <RMButton
              title="Edit your resume"
              style={{ backgroundColor: colors.blue }}
              image={require("../assets/icons/edit.png")}
              onPress={(itemId) => {
                sheetItemAction.current.close();
                console.log("Edit Pressed", actionItem?.id);
                navigation.navigate("PersonalInfoScreen", {
                  resume: actionItem,
                  onListUpdate: handleListUpdate,
                });
              }}
            />
            <RMButton
              title="Delete your resume"
              style={{ backgroundColor: colors.red }}
              image={require("../assets/icons/notdeleted.png")}
              onPress={async () => {
                sheetItemAction.current.close();
                await removeThisItem();
              }}
            />
          </Animated.View>
        </RBSheet>
        <Modal
          swipeDirection={["down"]}
          style={styles.modelStyle}
          onSwipeComplete={() => setIsModalVisible(false)}
          swipeThreshold={40}
          propagateSwipe={true}
          onBackdropPress={() => setIsModalVisible(false)}
          isVisible={isModalVisible}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.modelContainer}
          >
            <RMText style={styles.modelTitle}>What is Your Name?</RMText>
            <TextInput
              autoFocus={true}
              style={styles.searchInput}
              placeholder="First Name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              placeholderTextColor={colors.appColor}
            />

            <TextInput
              style={styles.searchInput}
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              placeholderTextColor={colors.appColor}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleGenerateResume}
              >
                <Text style={styles.cancelButtonText}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
      </View>
    </Screen>
  );

  async function removeResumeThisItem(item) {
    await deleteResume(item);
    console.log("Delete Pressed", item?.id);
    const listOfResumes = await getResumes();
    console.log("all local resumes", listOfResumes?.items);
    setResumes(listOfResumes?.items ?? []);
  }

  async function removeThisItem() {
    await deleteResume(actionItem);
    console.log("Delete Pressed", actionItem?.id);
    const listOfResumes = await getResumes();
    console.log("all local resumes", listOfResumes?.items);
    setResumes(listOfResumes?.items ?? []);
  }
}

const styles = StyleSheet.create({
  pageDetail: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  detail: {
    height: 260,
  },
  firstHeading: {
    fontSize: 17,
    fontStyle: "italic",
    // fontWeight: "bold",
    color: "white",
    width: "55%",
  },
  secondHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.appColor,
  },
  moreResume: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moreBtn: {
    flexDirection: "row",
    backgroundColor: "#E2DBE4",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
  },
  addBtn: {
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
  bottomSheet: {
    height: 350,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: colors.white,
    // justifyContent: "center",
    alignItems: "center",
  },
  sheetContent: {
    padding: 30,
    width: "100%",
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.appColor,
    textAlign: "center",
    marginBottom: 20,
  },
  modelContainer: {
    // alignItems: "center",
    flex: 1,
    marginHorizontal: 20,
    marginTop: 60,
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  cancelButton: {
    backgroundColor: colors.appColor,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    width: "45%",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  cancelButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  modelStyle: {
    justifyContent: "flex-start",
    margin: 0,
    backgroundColor: colors.white,

    marginHorizontal: 1,
    marginTop: 30,
  },
  modelTitle: {
    color: colors.appColor,
    fontSize: 16,
    margin: 10,
  },
});
