import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import RenderHtml from "react-native-render-html";
import { flipkartHtml, htmlContent } from "../../constants";

const source = {
  html: `
<p style='text-align:center;'>
  Hello World!
</p>`,
};

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { width } = useWindowDimensions();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 ,padding:10}}>
    <RenderHtml
      contentWidth={width}
      source={{ html: flipkartHtml }}
    />
  </ScrollView>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({});
