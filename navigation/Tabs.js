import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail from "../screens/Detail";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import Favs from "../screens/Favs";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => {
  return route?.state?.routeNames[route?.state?.index];
};

const changeHeaderName = (navigation, newName) => {
  navigation.setOptions({ title: newName || "Movies" });
};

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    changeHeaderName(navigation, getHeaderName(route));
  }, [route]);
  return (
    <Tabs.Navigator> 
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Tv" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favourites" component={Favs} />
    </Tabs.Navigator>
  );
};
