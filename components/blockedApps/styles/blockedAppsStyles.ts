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
        marginBottom: 8,
        resizeMode: 'contain',
    },

    appIcon: {
        width: 40,
        height: 40,
        marginBottom: 8,
    },

    appListContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        width: 'auto',
        flexWrap: 'wrap'
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

    minusIcon: {
        width: 4,
        height: 4,
        padding: 8,
        alignSelf: 'center',
        marginTop: 2
        
    },

    removeBtn: {
        backgroundColor: '#000000',
        borderRadius: 999,
        width: 22,
        height: 22,
        zIndex: 20,
        position: 'absolute',
        top: -10,
        left: -5
        
    }



});