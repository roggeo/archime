import React from "react";
import { PropsNavMenu } from "../../types/propsComponent";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontLoginScreen from "./FrontLoginScreen";

const Stack = createNativeStackNavigator();

export default function LoginScreen() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FrontLogin" component={FrontLoginScreen}/>
        </Stack.Navigator>
    );
  }