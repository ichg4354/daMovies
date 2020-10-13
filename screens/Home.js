import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text>HOME</Text>
      <Button
        title="CLICK TO GO TO df"
        onPress={() => navigation.navigate("Detail")}
      ></Button>
    </View>
  );
};

export default Home;
