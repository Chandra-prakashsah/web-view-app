import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Text, View } from "react-native";
import Header from "../../component/header";
import SettingScreen from "../../screen/setting";
import ProfileScreen from "../../screen/profile";
import Home from "../../screen/home";

const Tab = createBottomTabNavigator();


export const Tabs = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      sceneContainerStyle={{
        backgroundColor: "#fff",
      }}
      screenOptions={{
        lazy: true,
        tabBarStyle: {
          backgroundColor: "red",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          header: () => <Header />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => <Header />,
        }}
      />
    </Tab.Navigator>
  );
};
