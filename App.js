// import libraries to create components

import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from "./src/Project/Home";
import Home from "./src/Major Project/Home";
import VideoPlayer from "./src/Major Project/VideoPlayer";
import SearchScreen from "./src/Major Project/SearchScreen";
import Playlist from "./src/Major Project/Playlist";
import { MaterialIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import {reducer} from './src/Reducers/reducer'

const store = configureStore({
  reducer: reducer
});

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Root = () => {
  return (
    <Tabs.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Playlist') {
          iconName = 'playlist-play';
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tabs.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tabs.Screen name="Playlist" component={Playlist} options={{ headerShown: false }}/>
    </Tabs.Navigator>
  )
}

// create a component that return jsx/simple function
const App = () => {
  return (
  
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Root">
          <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayer} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
}

// create a Stylesheet to style the component

const Styles = StyleSheet.create({
  // container:{
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }
});

// export the file, so that we can use it in our app

export default App;