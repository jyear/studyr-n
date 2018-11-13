import React from "react";
import storeFun from "./store";
import { Text } from "react-native";
import { Provider } from "react-redux";
import Route from "./routes";
import realm from "./realms/index";
global.store = storeFun();
global.realm = realm();

global.realm.write(() => {
    global.realm.create(
        "User",
        {
            id: 0,
            name: "吉泽明步1",
            phone: "13452145874"
        },
        true
    );
});

export default function() {
    return (
        <Provider store={store}>
            <Route />
        </Provider>
    );
}
