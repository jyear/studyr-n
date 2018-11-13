import React, { PureComponent } from "react";
import { View, Text, Image, Platform } from "react-native";
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
    addBook() {}
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
    render() {
        return (
            <View style={styles.pageBox}>
                <View style={{ height: 44 }} />
                <View>
                    <Text onPress={this.openConfirm.bind(this)}>打开弹窗</Text>
                    <Text>{this.state.user}</Text>
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
