import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Tabs from "./Tabs";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
