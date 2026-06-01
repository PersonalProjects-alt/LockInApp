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
        paddingTop: 60,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
    },

    subHeader_text: {
        color: 'white',
        fontSize: 15,
        paddingTop: 5,
        fontFamily: 'Montserrat-ExtraLight',
        textAlign: 'center',
        paddingBottom: 30,
    },

    container: {
        padding: 20,
        borderRadius: 30,
        borderWidth: 0.3,
        borderColor: 'rgba(255, 255, 255, 0.25)',
    },


    inputLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 8,
    },

    inputContainer: {
        height: 40,
        borderRadius: 9,
        borderWidth: 0.7,
        borderColor: 'rgba(255,255,255,0.25)',
        backgroundColor: 'rgba(255,255,255,0.03)',

        flexDirection: 'row',
        alignItems: 'center',

        paddingHorizontal: 12,
    },

    inputIcon: {
        width: 18,
        height: 18,
        tintColor: '#FFFFFF',
        opacity: 0.9,
        marginRight: 12,
    },


    textInput: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        paddingVertical: 0,
    },

    eyeIcon: {
        width: 18,
        height: 18,
        tintColor: '#FFFFFF',
        opacity: 0.9,
    },

    forgotPassword: {
        color: '#4CA3FF',
        fontSize: 13,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'right',
        marginTop: 16,
    },

    signInButton: {
        backgroundColor: '#FFFFFF',
        height: 40,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 34,
    },

    signInText: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
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

    arrowIcon: {
        width: 30,
        height: 30,
        tintColor: '#FFFFFF',
    }








});