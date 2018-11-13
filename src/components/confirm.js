import React, { PureComponent, PropTypes } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    Platform,
    Modal
} from "react-native";
import closeIcon from "../assets/images/close.png";

class DetailInfo extends PureComponent {
    constructor(props) {
        super(props);
    }
    cancelClick() {
        let { cancelClick } = this.props;
        if (cancelClick && typeof cancelClick === "function") {
            cancelClick();
        }
    }
    sureClick() {
        let { sureClick } = this.props;
        if (sureClick && typeof sureClick === "function") {
            sureClick();
        }
    }
    render() {
        let { isVisible } = this.props;
        return (
            <Modal
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    alert("Modal has been closed.");
                }}
                animationType="none"
                style={styles.detail_info}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalCont}>
                        <View style={styles.title}>
                            <Text style={{ textAlign: "center" }}>
                                {this.props.title}
                            </Text>
                            <Image
                                source={closeIcon}
                                style={styles.closeBtn}
                                onStartShouldSetResponder={() => {
                                    return true;
                                }}
                                onResponderGrant={this.cancelClick.bind(this)}
                            />
                        </View>
                        <View style={styles.line} />
                        <Text style={styles.context}>{this.props.content}</Text>
                        <View style={styles.line} />
                        <View style={styles.bottonBox}>
                            <Text
                                style={[styles.btn, styles.grey]}
                                onStartShouldSetResponder={() => {
                                    return true;
                                }}
                                onResponderGrant={this.cancelClick.bind(this)}
                            >
                                取消
                            </Text>
                            <View style={styles.middleLine} />
                            <Text
                                style={[styles.btn, styles.green]}
                                onStartShouldSetResponder={() => {
                                    return true;
                                }}
                                onResponderGrant={this.sureClick.bind(this)}
                            >
                                确定
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}
DetailInfo.propTypes = {};
const styles = StyleSheet.create({
    detail_info: {
        backgroundColor: "rgba(0,0,0,.5)"
    },
    modalContainer: {
        backgroundColor: "rgba(0,0,0,.5)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modalCont: {
        backgroundColor: "#fff",
        width: "70%",
        borderRadius: 4
    },
    title: {
        position: "relative",
        paddingTop: 10,
        paddingBottom: 10
    },
    closeBtn: {
        position: "absolute",
        right: 5,
        top: 10,
        width: 18,
        height: 18
    },
    line: {
        backgroundColor: "#ccc",
        height: 1,
        transform: [{ scaleY: 0.5 }]
    },
    middleLine: {
        backgroundColor: "#ccc",
        width: 1,
        transform: [{ scaleX: 0.5 }]
    },
    context: {
        paddingLeft: 20,
        paddingBottom: 20,
        paddingTop: 20,
        paddingRight: 20
    },
    bottonBox: {
        flexDirection: "row"
    },
    btn: {
        flex: 1,
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 10
    },
    green: {
        color: "#05d178"
    },
    grey: {
        color: "#8f8f8f"
    }
});
export default DetailInfo;
