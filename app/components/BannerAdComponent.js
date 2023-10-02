import { StyleSheet, Text, View } from "react-native";
//Banner Ad import
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
export default function BannerAdComponent() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <BannerAd
        size={BannerAdSize.BANNER}
        //unitId={TestIds.BANNER}
        unitId={"ca-app-pub-3940256099942544/6300978111"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
