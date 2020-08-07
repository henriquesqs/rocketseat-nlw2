import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TeacherList from "../pages/TeacherList/Index";
import Favorites from "../pages/Favorites/Index";
import {Ionicons} from "@expo/vector-icons";
import giveClassesIcon from "../assets/images/icons/give-classes.png";
import heartOutlineIcon from "../assets/images/icons/heart-outline.png";
import {Image} from "react-native";

const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: "Archivo_700Bold",
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: "#f4f4fc",
                activeBackgroundColor: "#ebebf5",
                inactiveTintColor: "#c1bccc",
                activeTintColor: "#32264d",
            }}
        >
            <Screen
                name="TeacherList"
                component={TeacherList}
                options={{
                    tabBarLabel: "Proffys",
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Image
                                source={giveClassesIcon}
                                resizeMode="contain"
                                style={{
                                    tintColor: focused ? "#8257e5" : color,
                                    height: 25,
                                }}
                            />
                        );
                    },
                }}
            />
            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Image
                                source={heartOutlineIcon}
                                style={{
                                    tintColor: focused ? "#8257e5" : color,
                                    height: 28,
                                }}
                            />
                        );
                    },
                }}
            />
        </Navigator>
    );
}

export default StudyTabs;
