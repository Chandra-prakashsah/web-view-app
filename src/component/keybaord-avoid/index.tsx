import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const KeybaordAvoid = ({children}:{children:React.ReactNode}) => {
  return (
    <KeyboardAwareScrollView scrollEnabled>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeybaordAvoid;

const styles = StyleSheet.create({});
