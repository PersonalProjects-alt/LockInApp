import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        backgroundColor: '#000',
        flex: 1,
        paddingHorizontal: 15,
        fontFamily: 'Montserrat-VariableFont_wght',
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 30
    },

    header_text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold',
    },

    arrowIcon: {
        width: 25,
        height: 25,
        tintColor: '#ffffff',
    },

    backButton: {
        position: 'absolute',
        left: 0,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20,
    },

    sessionDurationText: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',

    }


});