import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Landing from "./src/pages/Landing/Index";
import {AppLoading} from "expo";

import {
    useFonts,
    Archivo_400Regular,
    Archivo_700Bold,
} from "@expo-google-fonts/archivo";
import {
    Poppins_400Regular,
    Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function App() {
    // Declaring fonts we're going to use
    let [fontsLoaded] = useFonts({
        Archivo_400Regular,
        Archivo_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            // Creating a fragment in order to export Landing and StatusBar together
            <>
                <Landing />
                <StatusBar style="light" />
            </>
        );
    }
}
