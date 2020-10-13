import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <View>
      <Text>MOVIES</Text>
      <Button
        title="To Detail"
        onPress={() => navigation.navigate("Detail")}
      ></Button>
    </View>
  );
};
