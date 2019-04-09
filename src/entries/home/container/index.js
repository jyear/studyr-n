import React, { PureComponent } from "react";
import { View, Text, Image, Platform, StatusBar } from "react-native";
import NavigationService from "../../../util/navigationservice";
import addIcon from "../../../assets/images/add.png";
import Confirm from "../../../components/confirm";
import styles from "./style";

class Index extends PureComponent {
    constructor() {
        super();
        this.state = {
            modalTitle: "提示",
            modalContent: "你是一个大傻逼吗？",
            isVisible: false,
            user: null
        };
    }
    addBook() {
        alert("dsds");
    }
    componentDidMount() {
        let user = global.realm.objects("User");
        this.setState({
            user: JSON.stringify(user)
        });
    }
    cancelDetailModal() {
        this.setState({
            isVisible: false
        });
    }
    sureDetailModal() {
        this.setState({
            isVisible: false
        });
    }
    openConfirm() {
        this.setState({
            isVisible: true
        });
    }
    goMy() {
        console.log(NavigationService);
        NavigationService.navigate("My");
    }
    render() {
        return (
            <View style={styles.pageBox}>
                <StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor={"red"}
                    translucent={true}
                    barStyle={"light-content"}
                />
                <View style={{ height: 24 }} />
                <View>
                    <Text onPress={this.openConfirm.bind(this)}>打开弹窗</Text>
                    <Text>{this.state.user}</Text>
                    <Text>你是大傻逼</Text>
                    <Text onPress={this.goMy.bind(this)}>去我</Text>
                </View>
                <Confirm
                    cancelClick={this.cancelDetailModal.bind(this)}
                    sureClick={this.sureDetailModal.bind(this)}
                    isVisible={this.state.isVisible}
                    title={this.state.modalTitle}
                    content={this.state.modalContent}
                />
            </View>
        );
    }
}
export default Index;
