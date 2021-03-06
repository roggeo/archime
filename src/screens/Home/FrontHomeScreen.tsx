import React from "react";
import { Button, View, Text, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenContainerStyle, ScreenImageStyle } from "../../styles/Screen.style";
import { TextStyle } from "../../styles/Text.style";
import { ViewStyle } from "../../styles/View.style";
import { PropsNavMenu } from "../../types/propsComponent";

const img_Wallpaper: any = require("./../../assets/wallpaper.jpg");

export default function FrontHomeScreen({ navigation }: PropsNavMenu) {
    return <ScreenContainerStyle>
        <ViewStyle>
            <ScreenImageStyle source={img_Wallpaper}/>
        </ViewStyle>
    </ScreenContainerStyle>
}