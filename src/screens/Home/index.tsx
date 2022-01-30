import React from "react";
import { PropsNavMenu } from "../../types/propsComponent";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontHomeScreen from "./FrontHomeScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreen({ navigation }: PropsNavMenu) {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FrontHome" component={FrontHomeScreen}/>
        </Stack.Navigator>
    );
  }