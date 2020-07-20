import { StyleSheet } from 'react-native';

export default StyleSheet.create({   
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    imgTop: {
        width: 200,
        height: 180,
        top: -25,
        left: -170
    },
    imgBottom: {
        width: 220,
        height: 190,
        bottom: -30,
        right: -185
    },
    logo: {
        width: 200,
        height: 90
    },
    title: {
        color: '#666',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 40,
    }
});