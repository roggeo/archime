import React, { Component } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Animated, StyleSheet, Text } from 'react-native';


export default function GestureScreen() {
  let translateX = new Animated.Value(0);
  let translateY = new Animated.Value(0);
  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );
  
    return (
      <>
        <Text>Pan Gesture Handler</Text>
        <PanGestureHandler onGestureEvent={onPanGestureEvent}>
          <Animated.View
            style={[
              styles.square,
              {
                transform: [
                  {
                    translateX: translateX,
                  },
                  {
                    translateY: translateY,
                  },
                ],
              },
            ]}
          />
        </PanGestureHandler>
      </>
    );
  
}
const styles = StyleSheet.create({
  square: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    marginTop: 22,
  },
});