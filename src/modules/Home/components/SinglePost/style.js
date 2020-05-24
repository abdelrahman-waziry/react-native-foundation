import { StyleSheet, Dimensions } from "react-native";
import { human, iOSUIKit, material } from "react-native-typography";

export const styles = StyleSheet.create({
    singlePostWrapper: {
        backgroundColor: '#fff',
        flex: 1,
    },
    singlePostImage: {
        width: Dimensions.get('window').width,
        height: 450,
    },
    backIcon: {
        paddingStart: '5%',
        paddingTop: '4%',
    },
    infoContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    infoHeader: {
        flexDirection: "column",
        marginStart: 10
    },
    infoHeaderAvatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    infoHeaderUsername: {
        ...human.title3Object
    },
    infoHeaderDate: {
        fontWeight: '200',
        fontSize: 15,
        color: '#999'
    },
    downloadButton: {
        alignSelf: 'center',
        alignItems: 'center', 
        backgroundColor: '#222',
        width: '90%',
        paddingVertical: 20,
        borderRadius: 8,
    },
    downloadButtonText: {
        ...material.buttonWhiteObject
    }
})