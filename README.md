
## Create new React Native

```bash
yarn add react-native-gesture-handler react-native-reanimated
#USE IT TOO: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
yarn add @react-navigation/drawer
yarn add react-native-screens
yarn add react-native-safe-area-context
yarn add @react-navigation/native


cd android && ./gradlew clean
cd ..
npx react-native run-android

yarn start --reset-cache
npx react-native start --reset-cache
```

## Build

```bash
cd android && ./gradlew build
# or
cd android && ./gradlew bundleRelease
```