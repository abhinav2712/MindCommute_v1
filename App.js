import React from "react";
import {Ionicons} from "@expo/vector-icons";

import { createAppContainer , createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "react-navigation";
import Tabs from './navigation/tabs';
import LoadingScreen from "./screens/LoadingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MessageScreen from "./screens/MessageScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PostScreen from "./screens/PostScreen";


// These imports load individual services into the firebase namespace.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyADw4FRNTSG8Tfb6XraN7Kkkb5cSvP6L6s",
  authDomain: "mindcommute-852b7.firebaseapp.com",
  projectId: "mindcommute-852b7",
  storageBucket: "mindcommute-852b7.appspot.com",
  messagingSenderId: "893591701949",
  appId: "1:893591701949:web:b83fc6862933a6c47e6ad4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Register:RegisterScreen
});


<AppStack.Screen>
  name="LoginScreen"
  options={{ headerShown: false }}
 
</AppStack.Screen> 

const AuthStack = createStackNavigator({
  
  Logins: LoginScreen, 
  Register: RegisterScreen,
});



export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading",
      
    }
  )
);

