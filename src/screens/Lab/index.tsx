import React from "react";
import { PropsNavMenu } from "../../types/propsComponent";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontLabScreen from "./FrontLabScreen";
import GestureScreen from "./GestureScreen";
import SwipeGestureScreen from "./SwipeGestureScreen";

const Stack = createNativeStackNavigator();

export default function LabScreen({ navigation }: PropsNavMenu) {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FrontLabScreen" component={FrontLabScreen}/>
            <Stack.Screen name="GestureScreen" component={GestureScreen}/>
            <Stack.Screen name="SwipeGestureScreen" component={SwipeGestureScreen}/>
        </Stack.Navigator>
    );
  }