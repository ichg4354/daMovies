import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail from "../screens/Detail";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import Favs from "../screens/Favs";

const Tabs = createBottomTabNavigator();

export default () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Movies" component={Movies} />
    <Tabs.Screen name="Tv" component={Tv} />
    <Tabs.Screen name="Search" component={Search} />
    <Tabs.Screen name="Favs" component={Favs} />
  </Tabs.Navigator>
);
