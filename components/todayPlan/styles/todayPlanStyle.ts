import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer: {
        paddingTop: 25

    },

    container: {
        padding: 20,
        borderRadius: 25,
        borderColor: '#1D1E1E',
        borderWidth: 1
    },

    circleDot: {
        borderRadius: 999,
        backgroundColor: '#ffffff',
        width: 10,
        height: 10,
    },

    outerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },

    titleText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 600,
    },
    
    startTime: {
        color: '#B7B7B7',
        fontSize: 12,
        fontWeight: 500
    },

    startTimeTime: {
        color: '#ffffff',
        fontWeight: 600
    },

    durationTitle: {
        color: '#B8B8B8',
        fontWeight: 600,
        fontSize: 15
    },

    durationTime: {
        color: '#B8B8B8',
        fontWeight: 400,
        fontSize: 15
    }



});