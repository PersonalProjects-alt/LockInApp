import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer: {
        paddingTop: 25
    },

    container: {
        padding: 15,
        borderRadius: 15,
    },

    headerText: {
        color: 'white',
        fontSize: 20,
        paddingBottom: 10,
    },

    listedView: {
        backgroundColor: '#3b3b3b',
        flexDirection: 'row',
        alignItems: 'center', 
        paddingHorizontal: 15, 
        width: '100%',
        height: 60, 
        borderRadius: 25,
    },

    numberOfAppsText: {
        color: 'white',
        paddingBottom: 20
    },

    plusIconContainer: {
        marginLeft: 'auto', 
        alignItems: 'center',
    },

    plusIcon: {
        width: 45,
        height: 45,
        backgroundColor: '#242424',
        borderRadius: 12,
        resizeMode: 'center'
    }

});