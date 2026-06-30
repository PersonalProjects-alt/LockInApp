import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        backgroundColor: '#000',
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: 'Montserrat-VariableFont_wght',
    },

    container: {
        padding: 20,
        borderRadius: 25,
        borderColor: '#1D1E1E',
        borderWidth: 1
    },

    header: {
        // paddingHorizontal: 10,
        // paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20
    },

    header_text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 20,
        marginTop: 15,
    },


    addTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        paddingBottom: 140,

    },

    buttonStyle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 40
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

    buttonText: {
        color: 'black',
        fontSize: 20,
    },

    sessionNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },

    pencilIcon: {
        width: 22,
        height: 22,
        tintColor: '#ffffff',
    },

    sessionNameTitle: {
        fontSize: 17,
        fontWeight: '500',
        color: '#ffffff',
    },

    repeatContainer: {
        width: '100%',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 18,
        borderWidth: 1,
        borderColor: '#1F2024',
    },

    repeatTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 14,
    },

    daysRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    dayCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },

    dayCircleSelected: {
        backgroundColor: '#FFFFFF',
    },

    dayCircleUnselected: {
        backgroundColor: '#050506',
        borderWidth: 1,
        borderColor: '#2A2B30',
    },

    dayText: {
        fontSize: 15,
        fontWeight: '700',
    },

    dayTextSelected: {
        color: '#000000',
    },

    dayTextUnselected: {
        color: '#FFFFFF',
    },

    sessionNameInput: {
        color: '#FFFFFF',
        fontSize: 14,
        paddingVertical: 0,
        marginTop: 4,
    },

    timeContainer: {
        marginBottom: 20
    },

    timeTitle: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 10,
    },

    timeRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 2,
    },

    timeLabel: {
        color: '#6F6F76',
        fontSize: 12,
        marginBottom: 6,
    },

    timeButton: {
        backgroundColor: '#14171B',
        borderRadius: 6,
        paddingVertical: 7,
        paddingHorizontal: 9,
        minWidth: 84,
        alignItems: 'center',
    },

    timeButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
    },

    timeDivider: {
        width: 28,
        height: 1,
        backgroundColor: '#D9D9D9',
        marginHorizontal: 22,
        marginBottom: 17,
    },

    editSessionBtn: {
        backgroundColor: '#46D15C',
        padding: 13,
        borderRadius: 15,
        height: 60,
        justifyContent: 'center',
        fontFamily: 'Montserrat-Medium',
    },

    editSessionBtnText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        textAlign: 'center'
    }

});