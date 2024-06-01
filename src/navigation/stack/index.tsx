
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer, NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../component/header';
import { Tabs } from '../bottom';
import Form from '../../screen/form';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function LoginScreen() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigation.navigate('Tabs')}>Home Screen</Text>
    </View>
  );
}
const CustomScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => navigation.navigate('Form')}>Custom Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const AppContainer=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        animation:"slide_from_right",
        headerTitleAlign:"center",
        navigationBarColor:"red"
      }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          // header:()=><Header/>,
          headerShown:false
        }}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{
          //  header:()=><Header/>,
          headerShown:false
        }}/>
        <Stack.Screen name="Custom" component={CustomScreen} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;

