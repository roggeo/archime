import React from "react";
import { Button, View } from "react-native";
import { PropsNavMenu } from "../../types/propsComponent";

export default function FrontLabScreen({navigation}: PropsNavMenu) {

    return <View>
        <Button title="Home" onPress={() => navigation.navigate('HomeScreen')}/>
        <Button title="Gesture" onPress={() => navigation.navigate('GestureScreen')}/>
        <Button title="SwipeGestureScreen" onPress={() => navigation.navigate('SwipeGestureScreen')}/>
        <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>
}