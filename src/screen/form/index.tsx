import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import KeybaordAvoid from "../../component/keybaord-avoid";
import LtrRtl from "../rtl-ltr";

const Form = () => {
  return (
    <KeybaordAvoid>
      {/* <FlatList
        data={[0, 1, 2, 3, 4, 5, 6]}
        renderItem={() => {
          return (
            <View style={{margin:20}}>
                <Text>Hello</Text>
              <TextInput style={{ borderWidth: 1,height:50 }} />
            </View>
          );
        }}
      /> */}
      <LtrRtl />
    </KeybaordAvoid>
  );
};

export default Form;

const styles = StyleSheet.create({});
