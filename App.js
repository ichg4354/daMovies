import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

const casheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const onFinish = () => setIsReady(true);
  const images = [
    "https://images.unsplash.com/photo-1602371995644-0309957b30cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    require("./assets/icon.png"),
  ];
  const getAssets = () => {
    const loaded = casheImages(images);
    console.log(loaded);
  };
  return isReady ? (
    <h1>LOADEd</h1>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={onFinish}
      startAsync={getAssets}
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
