import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { AddPackage } from "../screens/AddPackage";
import { PackageDetails } from "../screens/PackageDetails";
import { PackageDTO } from "../dtos/PackageDTOS";
import { PackagesDelivered } from "../screens/PackagesDelivered";

export type StackScreensParams = {
    Home: undefined;
    AddPackage: undefined;
    PackageDetails: { item?: PackageDTO };
    PackagesDelivered: undefined;
}

const { Navigator, Screen } = createStackNavigator<StackScreensParams>()


export function StackScreens() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
           
        </Navigator>
    )
}