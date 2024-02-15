// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './components/MainScreen';
import LoginScreen from './components/LoginScreen';
import Chats from './components/Chats';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen name="Main" component={MainScreen} /> */}
        <Stack.Screen name="Chats" component={Chats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// npm install react-navigation
// npm start -- --reset-cache

// import { ConvexProvider, ConvexReactClient } from "convex/react";
// import "react-native-get-random-values";
// import { CONVEX_URL } from "@env";
// import Tasks from "./components/Tasks";

// const convex = new ConvexReactClient(CONVEX_URL, {
//   unsavedChangesWarning: false,
// });

// export default function App() {
//   return (
//     <ConvexProvider client={convex}>
//       <Tasks />
//     </ConvexProvider>
//   );
// }