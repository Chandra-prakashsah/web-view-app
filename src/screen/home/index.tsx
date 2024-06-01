import React from "react";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { Dimensions, StyleSheet, View } from "react-native";
import { htmlContent } from "../../../src/constants";

const  Home=()=> {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{ 
        width: windowWidth,
        height: windowHeight,
      }}
    >
      <WebView
        style={[styles.container]}
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        onError={(error) => console.error("WebView error:", error)}
        javaScriptEnabled
        setDisplayZoomControls={false}
      />
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
