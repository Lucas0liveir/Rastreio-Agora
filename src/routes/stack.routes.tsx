import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { AddPackage } from "../screens/AddPackage";
import { PackageDetails } from "../screens/PackageDetails";

export type StackScreensParams = {
    Home: undefined;
    AddPackage: undefined;
    PackageDetails: { item?: any }
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
            <Screen
                name={'PackageDetails'}
                component={PackageDetails}
            />
        </Navigator>
    )
}