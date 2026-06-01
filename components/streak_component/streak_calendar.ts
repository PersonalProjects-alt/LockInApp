import { ca } from 'date-fns/locale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer: {
        paddingTop: 20,
    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 7,
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    title: {
        color: 'white',
        fontSize: 15,
        justifyContent: 'flex-start',
        fontFamily: 'Montserrat-Regular',

    },

    calendar_container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: 10,
        paddingTop: 10,
    },

    calendar_day: {
        justifyContent: 'center',
        fontSize: 11,
        color: 'white',
    },

    date_row:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    dateCircle: {
        backgroundColor: '#161616',
        width: 40,
        height: 40,
        borderRadius: 999,
    },

    dateText: {
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 10,
    }, 

    activeDateText: {
        color: '#86D994',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
    },

    activeDateCircle: {
        backgroundColor: '#182920',
        borderColor: '#1C3325',
        borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: 999,

    },

    calendar_row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    }

});