import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const Root = () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => Root);
