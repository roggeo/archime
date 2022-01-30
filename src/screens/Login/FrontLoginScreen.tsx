import React from "react";
import { Button, View, Text, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonLogInStyle } from "../../styles/Button.style";
import { ScreenContainerStyle, ScreenImageStyle } from "../../styles/Screen.style";
import { TextStyle } from "../../styles/Text.style";
import { ViewStyle } from "../../styles/View.style";
import { PropsNavMenu } from "../../types/propsComponent";


export default function FrontLoginScreen({ navigation }: PropsNavMenu) {
    return <ScreenContainerStyle>
        <ViewStyle>
            <View>
                <ButtonLogInStyle
                    onPress={() => navigation.navigate("HomeScreen")}
                    title="Getting In" color="#412d51"/>
            </View>
        </ViewStyle>
    </ScreenContainerStyle>
}