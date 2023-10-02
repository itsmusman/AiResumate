import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect, useRef } from "react";

import BackNavigationBar from "../components/BackNavigationBar";
import ScreenFull from "../components/ScreenFull";
import TemplateItem from "../components/TemplateItem";
import colors from "../config/colors";
import { getResumes } from "../helper/AppStorage";

const templates = [
  {
    id: "1",
    thumb: require("../assets/pdf_thumb/template_1.png"),
  },
  {
    id: "2",
    thumb: require("../assets/pdf_thumb/template_2.png"),
  },
  {
    id: "3",
    thumb: require("../assets/pdf_thumb/template_3.png"),
  },
  {
    id: "4",
    thumb: require("../assets/pdf_thumb/template_4_14.png"),
  },
  // {
  //   id: "5",
  //   thumb: require("../assets/pdf_thumb/template_5.png"),
  // },
  // {
  //   id: "6",
  //   thumb: require("../assets/pdf_thumb/template_6.png"),
  // },
  // {
  //   id: "7",
  //   thumb: require("../assets/pdf_thumb/template_7.png"),
  // },
  // {
  //   id: "8",
  //   thumb: require("../assets/pdf_thumb/template_8.png"),
  // },
  // {
  //   id: "9",
  //   thumb: require("../assets/pdf_thumb/template_9.png"),
  // },
  // {
  //   id: "10",
  //   thumb: require("../assets/pdf_thumb/template_10.png"),
  // },
  {
    id: "11",
    thumb: require("../assets/pdf_thumb/template_11.png"),
  },
  {
    id: "12",
    thumb: require("../assets/pdf_thumb/template_12.png"),
  },
  {
    id: "13",
    thumb: require("../assets/pdf_thumb/template_13.png"),
  },
  {
    id: "4",
    thumb: require("../assets/pdf_thumb/template_4_14.png"),
  },
  {
    id: "15",
    thumb: require("../assets/pdf_thumb/template_15.png"),
  },
  {
    id: "16",
    thumb: require("../assets/pdf_thumb/template_16.png"),
  },
  {
    id: "17",
    thumb: require("../assets/pdf_thumb/template_17.png"),
  },
  {
    id: "18",
    thumb: require("../assets/pdf_thumb/template_18.png"),
  },
  {
    id: "19",
    thumb: require("../assets/pdf_thumb/template_19.png"),
  },
  {
    id: "20",
    thumb: require("../assets/pdf_thumb/template_20.png"),
  },
  {
    id: "21",
    thumb: require("../assets/pdf_thumb/template_21.png"),
  },
  {
    id: "22",
    thumb: require("../assets/pdf_thumb/template_22.png"),
  },
  {
    id: "23",
    thumb: require("../assets/pdf_thumb/template_23.png"),
  },
  {
    id: "24",
    thumb: require("../assets/pdf_thumb/template_24.png"),
  },
  {
    id: "25",
    thumb: require("../assets/pdf_thumb/template_25.png"),
  },
  {
    id: "26",
    thumb: require("../assets/pdf_thumb/template_26.png"),
  },
  {
    id: "27",
    thumb: require("../assets/pdf_thumb/template_27.png"),
  },
  {
    id: "28",
    thumb: require("../assets/pdf_thumb/template_28.png"),
  },
  {
    id: "29",
    thumb: require("../assets/pdf_thumb/template_29.png"),
  },
  {
    id: "30",
    thumb: require("../assets/pdf_thumb/template_30.png"),
  },
  {
    id: "31",
    thumb: require("../assets/pdf_thumb/template_31.png"),
  },
  {
    id: "32",
    thumb: require("../assets/pdf_thumb/template_32.png"),
  },
  {
    id: "33",
    thumb: require("../assets/pdf_thumb/template_33.png"),
  },
  {
    id: "34",
    thumb: require("../assets/pdf_thumb/template_34.png"),
  },
  {
    id: "35",
    thumb: require("../assets/pdf_thumb/template_35.png"),
  },
  {
    id: "36",
    thumb: require("../assets/pdf_thumb/template_36.png"),
  },
  {
    id: "37",
    thumb: require("../assets/pdf_thumb/template_37.png"),
  },
  // {
  //   id: "38",
  //   thumb: require("../assets/pdf_thumb/template_38.png"),
  // },
  // {
  //   id: "39",
  //   thumb: require("../assets/pdf_thumb/template_39.png"),
  // },
  // {
  //   id: "40",
  //   thumb: require("../assets/pdf_thumb/template_40.png"),
  // },
  // {
  //   id: "41",
  //   thumb: require("../assets/pdf_thumb/template_41.png"),
  // },
  // {
  //   id: "42",
  //   thumb: require("../assets/pdf_thumb/template_42.png"),
  // },
  // {
  //   id: "43",
  //   thumb: require("../assets/pdf_thumb/template_43.png"),
  // },
  // {
  //   id: "44",
  //   thumb: require("../assets/pdf_thumb/template_44.png"),
  // },
  // {
  //   id: "45",
  //   thumb: require("../assets/pdf_thumb/template_45.png"),
  // },
  // {
  //   id: "46",
  //   thumb: require("../assets/pdf_thumb/template_46.png"),
  // },
  // {
  //   id: "47",
  //   thumb: require("../assets/pdf_thumb/template_47.png"),
  // },
  // {
  //   id: "48",
  //   thumb: require("../assets/pdf_thumb/template_48.png"),
  // },
  // {
  //   id: "49",
  //   thumb: require("../assets/pdf_thumb/template_49.png"),
  // },
  // {
  //   id: "50",
  //   thumb: require("../assets/pdf_thumb/template_50.png"),
  // },
  // {
  //   id: "51",
  //   thumb: require("../assets/pdf_thumb/template_51.png"),
  // },
  // {
  //   id: "52",
  //   thumb: require("../assets/pdf_thumb/template_52.png"),
  // },
  // {
  //   id: "53",
  //   thumb: require("../assets/pdf_thumb/template_53.png"),
  // },
  // {
  //   id: "54",
  //   thumb: require("../assets/pdf_thumb/template_54.png"),
  // },
  // {
  //   id: "55",
  //   thumb: require("../assets/pdf_thumb/template_55.png"),
  // },
  // {
  //   id: "56",
  //   thumb: require("../assets/pdf_thumb/template_56.png"),
  // },
  // {
  //   id: "57",
  //   thumb: require("../assets/pdf_thumb/template_57.png"),
  // },
  // {
  //   id: "58",
  //   thumb: require("../assets/pdf_thumb/template_58.png"),
  // },
  // {
  //   id: "59",
  //   thumb: require("../assets/pdf_thumb/template_59.png"),
  // },
  // {
  //   id: "60",
  //   thumb: require("../assets/pdf_thumb/template_60.png"),
  // },
  // {
  //   id: "61",
  //   thumb: require("../assets/pdf_thumb/template_61.png"),
  // },
  // {
  //   id: "62",
  //   thumb: require("../assets/pdf_thumb/template_62.png"),
  // },
  // {
  //   id: "63",
  //   thumb: require("../assets/pdf_thumb/template_63.png"),
  // },
  // {
  //   id: "64",
  //   thumb: require("../assets/pdf_thumb/template_64.png"),
  // },
  // {
  //   id: "65",
  //   thumb: require("../assets/pdf_thumb/template_65.png"),
  // },
  // {
  //   id: "66",
  //   thumb: require("../assets/pdf_thumb/template_66.png"),
  // },
  // {
  //   id: "67",
  //   thumb: require("../assets/pdf_thumb/template_67.png"),
  // },
  // {
  //   id: "68",
  //   thumb: require("../assets/pdf_thumb/template_68.png"),
  // },
  // {
  //   id: "69",
  //   thumb: require("../assets/pdf_thumb/template_69.png"),
  // },
  // {
  //   id: "70",
  //   thumb: require("../assets/pdf_thumb/template_70.png"),
  // },
  // {
  //   id: "71",
  //   thumb: require("../assets/pdf_thumb/template_71.png"),
  // },
  // {
  //   id: "72",
  //   thumb: require("../assets/pdf_thumb/template_72.png"),
  // },
  // {
  //   id: "73",
  //   thumb: require("../assets/pdf_thumb/template_73.png"),
  // },
  // {
  //   id: "74",
  //   thumb: require("../assets/pdf_thumb/template_74.png"),
  // },
  // {
  //   id: "75",
  //   thumb: require("../assets/pdf_thumb/template_75.png"),
  // },
];

export default function TemplatesListScreen({ navigation, route }) {
  const resume = route.params.resume;

  const [resumes, setResumes] = useState(templates);
  const sheetItemAction = useRef();

  useEffect(() => {
    // async function fetchData() {
    //   const listOfResumes = await getResumes();
    //   console.log("all local resumes", listOfResumes?.items);
    //   // setResumes(listOfResumes?.items ?? []);
    // }
    // fetchData();
    console.log("resume", resume);
    console.log("resume details", resume?.details?.workExperience[0]);
  }, []);

  return (
    <ScreenFull style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <BackNavigationBar
          iconLeft="arrow-back"
          // iconRight="search"
          btnLeft={() => {
            navigation.goBack();
          }}
          title="Choose Template"
          subtitle={
            "Browse through our selection of professionally designed templates"
          }
        />

        <FlatList
          style={{ flex: 1 }}
          data={resumes}
          renderItem={({ item, index }) => (
            <TemplateItem
              item={item}
              onPress={() => {
                navigation.navigate("GeneratePDFScreen", {
                  resume: resume,
                  template: item,
                });
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={{ margin: "2%", paddingBottom: 100 }}
          columnWrapperStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenFull>
  );
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
