import { StyleSheet, Dimensions } from "react-native";
import { iOSUIKit } from "react-native-typography";

export const styles = StyleSheet.create({
    gridWrapper: {
        flex: 1, 
        flexDirection: 'column',
        alignSelf: 'center',
        width: '90%',
    },
    imageContainer: {
        height: 200,
        margin: '2%',
        borderRadius: 16,
        shadowColor: "#999",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    title: {
        ...iOSUIKit.largeTitleEmphasizedObject,
        marginVertical: 5,
        marginStart: '2%',
        color: '#333'
    },
    gridStyleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '2%',
        marginVertical: 10
    },
    gridStyleBarText: {
        ...iOSUIKit.title3EmphasizedObject,
        color: '#555'
    },
    gridStyleBarIcon: {
        alignSelf: 'flex-end',
        color: '#555'
    }
})