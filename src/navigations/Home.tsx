import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { AddPackage } from "../screens/AddPackage";
import { PackageDetails } from "../screens/PackageDetails";
import { PackageDTO } from "../dtos/PackageDTOS";
import { TopTabNavigator } from "../routes/topTab.routes";


const { Navigator, Screen } = createStackNavigator()


export function HomeStack() {

    return (
        <Navigator
            initialRouteName="HomeTop"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name={'HomeTop'}
                component={TopTabNavigator}
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