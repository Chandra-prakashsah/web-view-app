import { StyleSheet ,StatusBar, SafeAreaView} from 'react-native';
import AppContainer from './src/navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor={'transparent'} animated={true} /> */}
      <AppContainer/>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
