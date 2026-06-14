import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer: {
        paddingTop: 25,
        paddingBottom: 30

    },

    container: {
        padding: 20,
        borderRadius: 25,
        borderColor: '#1D1E1E',
        borderWidth: 1
    },

    headerText: {
        color: 'white',
        fontSize: 17,
        paddingBottom: 10,
        fontWeight: '500',
        fontFamily: 'Montserrat-SemiBold',
    },

    subHeaderText: {
        color: 'white',
        fontSize: 15,
        paddingBottom: 30,
        fontWeight: '300',
        fontFamily: 'Montserrat-Light',
    },

    plusIcon: {
        width: 40,
        height: 40,
        tintColor: '#ffffff',
        resizeMode: 'contain',
    },

    minusIcon: {
        width: 50,
        height: 50,
        tintColor: '#ffffff',
        resizeMode: 'contain',
    },

    addMoreText: {
        color: '#ffffff',
        fontSize: 11,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
    },

    addMoreBtn: {
        width: 78,
        height: 85,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#242526',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },



});