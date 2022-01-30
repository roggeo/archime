import * as React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultNavigatorOptions, NavigationContainer } from '@react-navigation/native';
import mainRoutes from './routes';
import { SafeAreaView } from 'react-native-safe-area-context';


const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <>
      <StatusBar backgroundColor={`#4d2415`}/>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen" screenOptions={{
        headerStyle: {
          backgroundColor: '#401f12'
        },
        headerTitleStyle: {
          color: '#bf8a76'
        },
        drawerActiveBackgroundColor: '#643125',
        drawerInactiveBackgroundColor: '#4a2517',
        drawerLabelStyle: {
          color: '#bf8a76'
        },
        drawerStyle: {
          backgroundColor: '#401f12'
        }
      }}>
        {mainRoutes().map((route, index) => (
          <Drawer.Screen name={route.ScreenName} component={route.ComponentFunc} options={{
            title: route.Title
          }}/>
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}