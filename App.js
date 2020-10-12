import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

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
    console.log(Font);
    return Font.loadAsync(font);
  });

export default function App() {
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
    <h1>LOADEd</h1>
  ) : (
    <AppLoading
      startAsync={getAssets}
      onError={console.error}
      onFinish={onFinish}
    />
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
