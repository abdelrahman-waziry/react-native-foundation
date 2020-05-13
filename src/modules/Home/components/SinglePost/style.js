import { StyleSheet, Dimensions } from "react-native";
import { iOSUIKit } from "react-native-typography";

export const styles = StyleSheet.create({
    singlePostWrapper: {
        backgroundColor: '#fff',
        flex: 1,
    },
    singlePostImage: {
        width: Dimensions.get('window').width,
        height: 400,
    },
    backIcon: {
        paddingStart: '5%',
        paddingTop: '4%'
    }
})