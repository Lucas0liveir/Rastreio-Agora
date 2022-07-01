import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreens } from "./stack.routes";
import { TopTabNavigator } from "./topTab.routes";
import { HomeStack } from "../navigations/Home";


export function Routes() {

    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}