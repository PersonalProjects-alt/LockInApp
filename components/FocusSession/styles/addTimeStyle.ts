import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer: {
        paddingTop: 25,

    },

    container: {
        padding: 20,
        borderRadius: 25,
        borderColor: '#1D1E1E',
        borderWidth: 1
    },

    timeContainerView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 30
    },


    plusIcon: {
        width: 37,
        height: 37,
        tintColor: '#ffffff',
        resizeMode: 'contain',
    },

    addMoreBtn: {
        width: 58,
        height: 58,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#242526',
        justifyContent: 'center',
        alignItems: 'center',
    },


    durationTimeText: {
        color: 'white',
        fontSize: 40,
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
    },





});