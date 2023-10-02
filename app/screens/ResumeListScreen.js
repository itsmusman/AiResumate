import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  ActionSheetIOS,
} from "react-native";

import BackNavigationBar from "../components/BackNavigationBar";
import ScreenFull from "../components/ScreenFull";
import UserList from "../components/UserItem";
import colors from "../config/colors";
import RBSheet from "react-native-raw-bottom-sheet";
import RMButton from "../components/RMButton";
import { addResume, getResumes, deleteResume } from "../helper/AppStorage";
import { useEffect, useRef, useState } from "react";

export default function ResumeListScreen({ navigation }) {
  const [resumes, setResumes] = useState([]);
  const [actionItem, setActionItem] = useState(null);
  const sheetItemAction = useRef();

  useEffect(() => {
    async function fetchData() {
      const listOfResumes = await getResumes();
      console.log("all local resumes", listOfResumes?.items);
      setResumes(listOfResumes?.items ?? []);
    }
    fetchData();
  }, []);

  return (
    <ScreenFull>
      <View>
        <BackNavigationBar
          iconLeft="arrow-back"
          iconRight="search"
          btnLeft={() => {
            navigation.goBack();
          }}
          title="Resume Collection"
          subtitle="Browse, edit and manage your collection of resumes"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        {/* <BannerAd
          size={BannerAdSize.BANNER}
          unitId={TestIds.BANNER}
          //unitId={"ca-app-pub-1537167347266215/7661889984"}
          // requestOptions={{
          //   requestNonPersonalizedAdsOnly:true,
          // }}
        /> */}
      </View>

      <View style={{ marginTop: 10 }}>
        <FlatList
          data={resumes}
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

      <RBSheet
        customStyles={{ container: styles.bottomSheet }}
        openDuration={250}
        ref={sheetItemAction}
        animationType="fade"
      >
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Choose an action</Text>

          <RMButton
            title="Generated and Download"
            style={{ backgroundColor: colors.green }}
            image={require("../assets/icons/download.png")}
            onPress={() => {
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
            onPress={() => {
              sheetItemAction.current.close();
              console.log("Edit Pressed", actionItem?.id);
              navigation.navigate("PersonalInfoScreen", {
                resume: actionItem,
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
        </View>
      </RBSheet>
    </ScreenFull>
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
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  bottomSheet: {
    height: 300,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  sheetContent: {
    padding: 30,
    width: "100%",
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181818",
    textAlign: "center",
    marginBottom: 20,
  },
});
