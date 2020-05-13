import { StyleSheet } from "react-native";
import { iOSUIKit, iOSColors, human } from 'react-native-typography'

export const styles = StyleSheet.create({
    searchBarWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor:'#f2f2f2',
        height: 50,
        width: '90%',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    searchBarInput: {
        width: '90%',
        color: '#444444',
        paddingHorizontal: 5,
        fontSize: 20,
        justifyContent: 'center',
        fontFamily: human.title3Object.fontFamily
    }
})