
import React from "react";
import { PropsNavMenu } from "../../types/propsComponent";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontHowToLearnScreen from "./FrontHowToLearnScreen";

const Stack = createNativeStackNavigator();

export default function HowToLearnScreen({ navigation }: PropsNavMenu) {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FrontHowToLearn" component={FrontHowToLearnScreen}/>
        </Stack.Navigator>
    );
  }