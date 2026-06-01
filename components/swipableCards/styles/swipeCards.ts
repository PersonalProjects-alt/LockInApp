import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 20,
    },

    card: {
        width: '100%',
        minWidth: 340,
        height: 250,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },

    stackPosition: {
        position: 'absolute',
    },

    cardFirstTitle: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
    },

    cardTitle: {
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        paddingTop: 10,
        fontFamily: 'Montserrat-ExtraLight',
    },

    lastCardText: {
        color: 'white',
    },

    cardDesc: {
        color: 'white',
        fontSize: 14,
        paddingTop: 10,
        fontFamily: 'Montserrat-ExtraLight',
    },

    tinderCard: {
        position: 'absolute',
    },

    cardWrapper: {
        position: 'absolute',
    },

    noCardsText: {
        color: '#3be67c',
        fontSize: 28,
        fontFamily: 'Montserrat-Medium',
        alignSelf: 'center',
    },

    noCardsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },

    instructionsView: {
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
    },

    instructionsText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        marginTop: 20,
        maxWidth: 200,
        
    }

});