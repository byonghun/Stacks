/** @format */
import { Navigation } from "react-native-navigation";
import App from './App';
//import {AppRegistry} from 'react-native';
//import {name as appName} from './app.json';

Navigation.registerComponent(`stacks`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "stacks"
      }
    }
  });
});
