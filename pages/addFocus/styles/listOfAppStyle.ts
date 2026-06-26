import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },

    background: {
        backgroundColor: '#000',
        flex: 1,
        paddingHorizontal: 15,
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 25,
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

    inputContainer: {
        height: 55,
        borderRadius: 18,
        backgroundColor: '#181818',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        marginBottom: 18,
    },

    inputIcon: {
        width: 15,
        height: 15,
        tintColor: '#FFFFFF',
        opacity: 0.8,
        marginRight: 12,
    },

    AppNameInput: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        paddingVertical: 0,
    },

    listContainer: {
        borderRadius: 22,
        backgroundColor: '#111111',
    },

    listContent: {
        paddingVertical: 4,
    },

    appRow: {
        minHeight: 65,
        backgroundColor: '#111111',
        paddingHorizontal: 14,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    appRowBorder: {
        borderBottomWidth: 0.6,
        borderBottomColor: '#232323',
    },

    appLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    appIcon: {
        width: 38,
        height: 38,
        borderRadius: 9,
        marginRight: 12,
    },

    appName: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
    },

    appCategory: {
        color: '#8A8A8F',
        fontSize: 11,
        marginTop: 3,
        fontFamily: 'Montserrat-Regular',
    },

    circle: {
        width: 22,
        height: 22,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#474646',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
    },

    circleSelected: {
        backgroundColor: '#45D76B',
        borderColor: '#45D76B',
    },

    checkText: {
        color: '#000',
        fontSize: 13,
        fontFamily: 'Montserrat-SemiBold',
    },
});