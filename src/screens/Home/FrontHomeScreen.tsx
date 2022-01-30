import React from "react";
import { Button, View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { PropsNavMenu } from "../../types/propsComponent";

export default function FrontHomeScreen({ navigation }: PropsNavMenu) {
    return <SafeAreaView style={{
        flexGrow: 1,
        backgroundColor: '#955d51'
    }}>
        <View>
            <Text>Archime</Text>
        </View>
    </SafeAreaView>
}