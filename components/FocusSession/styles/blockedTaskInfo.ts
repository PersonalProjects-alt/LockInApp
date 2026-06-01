import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer: {
        paddingTop: 40,
        paddingBottom: 20
    },

    daysTitleText: {
        color: 'white',
        paddingTop: 10,
        paddingBottom: 40,
    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 7,
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },

    daysContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        justifyContent: 'center',
        paddingBottom: 20,
    },

    daysText: {
        color: 'white',
        fontSize: 16,

    },

    daysTextSelected: {
        color: 'white',
        fontSize: 16,
        padding: 10,
        backgroundColor: '#5E605E',
        borderRadius: 999,
    },

    dayButtonSelected: {
        color: 'white',
        backgroundColor: '#5E605E',
        fontSize: 16,
        borderRadius: 999,

    },

    input: {
        color: '#9D9D9D',
        fontSize: 12,
        fontWeight: 300,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    descriptionInput: {
        borderWidth: 1,
        borderColor: '#B4B4B4',
        borderRadius: 4,
        height: 120,
        padding: 12,
    }


});