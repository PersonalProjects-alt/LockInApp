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

    subHeader_text: {
        color: 'white',
        fontSize: 18,
        paddingTop: 5,
        fontFamily: 'Montserrat-ExtraLight',
    },

    todaysPlanText: {
        color: '#ffffff',
        paddingTop: 25,
        fontWeight: '500',
        fontSize: 17,
        marginLeft: 7  
    }

});