import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
export default class Index extends PureComponent {
    constructor() {
        super();
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(
                StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: "TabRoot"
                        })
                    ]
                })
            );
        }, 2000);
    }
    render() {
        return (
            <View>
                <Text>welcome</Text>
            </View>
        );
    }
}
