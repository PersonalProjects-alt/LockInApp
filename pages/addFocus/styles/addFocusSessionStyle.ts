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

    addTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
    },

    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        paddingBottom: 140,

    },

    buttonStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 40
    },

    buttonText: {
        color: 'black',
        fontSize: 20,
    }


});