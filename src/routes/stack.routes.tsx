import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { AddPackage } from "../screens/AddPackage";

export type StackScreensParams = {
    Home: undefined;
    AddPackage: undefined;
}

const { Navigator, Screen } = createStackNavigator<StackScreensParams>()


export function StackScreens() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name={'Home'}
                component={Home}
            />
            <Screen
                name={'AddPackage'}
                component={AddPackage}
            />
        </Navigator>
    )
}