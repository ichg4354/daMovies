import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Stack from "./navigation/Stack";

const casheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const casheFonts = (fonts) =>
  fonts.map((font) => {
    return Font.loadAsync(font);
  });

export default function App(prop) {
  const [isReady, setIsReady] = useState(false);
  const onFinish = () => setIsReady(true);
  const images = [
    "https://images.unsplash.com/photo-1602371995644-0309957b30cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    require("./assets/icon.png"),
  ];
  const getAssets = () => {
    const loadedImage = casheImages(images);
    const loadedFont = casheFonts([Ionicons.font]);
    return Promise.all([...loadedImage, ...loadedFont]);
  };
  return isReady ? (
    <NavigationContainer>
      <Stack />
      {/* <Button onPress={#} /> */}
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={getAssets}
      onError={console.error}
      onFinish={onFinish}
    ></AppLoading>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
