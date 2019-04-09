import React, { Component } from "react";

import {
    createBottomTabNavigator,
    createStackNavigator,
    NavigationActions
} from "react-navigation";
import { View, Text, Image, StyleSheet } from "react-native";
import welcomScreen from "./entries/welcome";
import HomeScreen from "./entries/home";
import MyScreen from "./entries/my";
import msgIcon from "./assets/images/message.png";
import connectIcon from "./assets/images/connect.png";
import findIcon from "./assets/images/find.png";
import myIcon from "./assets/images/my.png";

import NavigationService from "./util/navigationservice";

const setIcon = function({ ...set }) {
    return (
        <View style={styles.iconbox}>
            <View style={styles.text} />
            <Image
                source={set.source}
                style={{
                    width: 24,
                    height: 24,
                    tintColor: set.focused ? "#ff0000" : set.tintColor
                }}
            />
        </View>
    );
};

const TabRoot = createBottomTabNavigator(
    {
        HomeStack: {
            screen: HomeScreen,
            navigationOptions: navigation => {
                return {
                    tabBarLabel: "书架",
                    tabBarIcon: state => {
                        return setIcon({
                            ...state,
                            source: msgIcon
                        });
                    }
                };
            }
        },
        My: {
            screen: MyScreen,
            navigationOptions: navigation => {
                return {
                    tabBarLabel: "我",
                    tabBarIcon: state => {
                        return setIcon({
                            ...state,
                            source: myIcon
                        });
                    }
                };
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "red"
        }
    }
);

const RootRouter = createStackNavigator(
    {
        Welcom: {
            screen: welcomScreen
        },
        TabRoot: {
            screen: TabRoot
        }
    },
    {
        navigationOptions: () => {
            return {
                header: null
            };
        }
    }
);

const styles = StyleSheet.create({
    iconbox: {
        position: "relative"
    },
    text: {
        position: "absolute",
        right: -5,
        top: 0,
        borderRadius: 10,
        width: 10,
        height: 10,
        backgroundColor: "red"
    }
});

export default class Route extends Component {
    render() {
        return (
            <RootRouter
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}
