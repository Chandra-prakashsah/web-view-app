import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import CustomBottomSheetModal from "../../component/bottom-sheet-modal";

const SettingScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={{ flex: 1 }}>
      <Text onPress={() => navigation.navigate("Custom")}>Profile!</Text>
      {/* <CustomBottomSheetModal /> */}
    </View>
  );
};
export default SettingScreen;

const styles = StyleSheet.create({});
