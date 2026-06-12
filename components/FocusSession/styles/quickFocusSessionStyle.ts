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

    headerText: {
        color: 'white',
        fontSize: 17,
        paddingBottom: 20,
        fontWeight: '500'
    },

    subHeaderText: {
        color: 'white',
        fontSize: 15,
        paddingBottom: 10,
        fontWeight: '300',
    },

    sessionTimeText: {
        color: 'white',
        fontSize: 45,
        fontWeight: '400',
        paddingBottom: 20,
        fontFamily: 'Montserrat-Medium',
    },

    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,

    },

    editSessionBtn: {
        backgroundColor: '#ffffff',
        padding: 13,
        borderRadius: 10,
        flex: 1
    },

    editSesionText: {
        color: '#000000',
        fontWeight: '600',
        fontSize: 15,
        textAlign: 'center'
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