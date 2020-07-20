import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({  
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
    }, 
    containerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogin: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 30,
        color: '#666',
        marginBottom: 40
    },
    lessPassword: {
        marginTop: 8,
        fontFamily: 'Roboto_500Medium',
        fontSize: 15,
        color: '#666',
    },
    viewLessPassword: {
        width: 300,
        alignItems: 'center'
    }
});