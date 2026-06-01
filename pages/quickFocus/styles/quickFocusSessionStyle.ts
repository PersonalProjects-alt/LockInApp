import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        backgroundColor: '#000',
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: 'Montserrat-VariableFont_wght',
    },

    header: {
        paddingHorizontal: 10,
        paddingTop: 30,
    },

    header_text: {
        color: 'white',
        fontSize: 30,
        paddingTop: 20,
        fontFamily: 'Montserrat-SemiBold',
    },

    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 50
    },

    pickerColumn: {
        flex: 1,
        height: 215,
    },

    separator: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        textAlign: 'center',
    },

    wheelPicker: {
        backgroundColor: 'black',
        width: '100%',
        height: 215,
    },

    defaultTimesViewContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30
    },

    defaultTimesContainer: {
        borderRadius: 999,
        padding: 20,
        width: 90,
        height: 90,
        backgroundColor: '#383838'
    },

    defaultTimesText: {
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        paddingTop: 15
    },

    buttonContainer: {
        display:'flex',
        justifyContent: 'center',
    },

    buttonStyle: {
        backgroundColor: 'white', 
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 40,

    },

    buttonText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
    }





});