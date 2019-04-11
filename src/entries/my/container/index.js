import React, { PureComponent } from "react";
import { View, Text, WebView, Platform } from "react-native";

export default class Index extends PureComponent {
    constructor() {
        super();
        this.state = {
            uri: ""
        };
    }
    jsCode = `window.localStorage.setItem('isApp',false);window.localStorage.setItem('platform','${
        Platform.OS == "ios" ? "iOS" : "Android"
    }');window.localStorage.setItem('isApp',true);window.localStorage.setItem('token','eyJpdiI6Ik1ERXdNakF6TURRd05UQTJNRGN3T0E9PSIsInZhbHVlIjoiK3E1YkhjVEUrOGxaTmNsdzdZbDM5K0h2bzEwbGs4SjgydjdhTk9JREJVdzNaZ3RtWUc1bVozQnBPZDd3UXBCWm5jTG54d1ZpR2JSRkM1U0dQZlo3SGd1a05qWHFScjgxek5salRBcGpiTzgzNEtFSXRTSisxS29Gb2M0bDRqMmRNT0NrQmhDOWZBZWVzTTU1ajk4K2hFYW0zcnN5YWZBTDFkV1d3ak02NGtTQ0U1R3gxMzRrOEptZHRncVlvOUo4ODNiVFRNTVJmcnc0TVRnSUJ1Q0tMbGowYXhPa1ZQSEhJV05sWE1vWUwxTUQvRVRJOW8zV1ZtRFNPRU1MTWIrU3VsQkR5bStFYWQ5Y1ZjMEVnWUJ6YWVmM2MyRUUyNnZuUFNOT3UyZmZiWnl0T2dQM3I0bDlEdkxKbWhaMHBGTTlKa25mQ2FoRjZGRURkRXlMTEc5cE16eFpvZUp1dHl0dlhuS3lEcGJ3VDQ1eGlRb0EyTVNyeEdGM1A5K2NodXJnK1J4YWVDQTlKUkdsOGI5SlRidXU0WFdIY3JvUnJXRHhEWWUwcmtXUm1lZ1JjOVpKbTN4Z3Jxd1pDOWZwK3JwdCJ9');`;
    componentDidMount() {
        this.setState({
            uri:
                "http://192.168.20.137:8003/transfer?from=eyJpdiI6Ik1ERXdNakF6TURRd05UQTJNRGN3T0E9PSIsInZhbHVlIjoiS05pVFFwSWc0alJYT0tjTTVneklxMTFESm9lS3hIRndIM01QZGlia1J1K1pLNmpHQjVyZmtiRXVzUWRLNE1QLyJ9"
        });
    }

    shouldLoad(e) {
        console.log(1, e);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    source={{
                        uri: this.state.uri,
                        method: "GET",
                        headers: { "Cache-Control": "no-cache" }
                    }}
                    injectedJavaScript={this.jsCode}
                    javaScriptEnabledAndroid={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    onShouldStartLoadWithRequest={this.shouldLoad.bind(this)}
                    ref={webview => (this.webview = webview)}
                    useWebKit={true}
                />
            </View>
        );
    }
}
