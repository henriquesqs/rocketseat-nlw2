import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TeacherList from "../pages/TeacherList/Index";
import Favorites from "../pages/Favorites/Index";

const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator>
            <Screen name="TeacherList" component={TeacherList} />
            <Screen name="Favorites" component={Favorites} />
        </Navigator>
    );
}

export default StudyTabs;
