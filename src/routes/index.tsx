import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreens } from "./stack.routes";


export function Routes() {

    return (
        <NavigationContainer>
            <StackScreens />
        </NavigationContainer>
    )
}