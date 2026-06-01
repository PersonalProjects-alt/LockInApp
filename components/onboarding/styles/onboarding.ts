import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        backgroundColor: '#000',
        flex: 1,
        fontFamily: 'Montserrat-VariableFont_wght',
    },

    header: {
        paddingHorizontal: 10,
        paddingTop: 30,
    },

    header_text: {
        color: 'white',
        fontSize: 32,
        paddingTop: 60,
        width: '75%',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        alignSelf: 'center',
    },

    subHeader_text: {
        color: 'white',
        fontSize: 15,
        paddingTop: 5,
        fontFamily: 'Montserrat-ExtraLight',
        textAlign: 'center',
        paddingBottom: 30,
        width: '85%',
        alignSelf: 'center',
    },

    container: {
        padding: 20,
        borderRadius: 30,
        borderWidth: 0.3,
        borderColor: 'rgba(255, 255, 255, 0.75)',
    },

    buttonOption: {
        height: 56,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 22,
        borderWidth: 0.4,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },


    buttonOptionContainer: {
        borderRadius: 30,
        paddingVertical: 7,
    },

    inputIcon: {
        width: 23,
        height: 23,
        tintColor: '#FFFFFF',
        opacity: 0.95,
        marginRight: 18,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 17,
    },

    suggestionContainer: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,
    },

    suggestionText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '300',
        fontFamily: 'Montserrat-Thin',
    },

    actionText: {
        color: '#56A0D7',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'Montserrat-Regular',

    },

    googleIcon: {
        width: 23,
        height: 23,
        marginRight: 18,
    },


});