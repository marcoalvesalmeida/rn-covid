import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({        
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
    },   
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontFamily: 'Ubuntu_700Bold',
        marginBottom: 16,
        marginTop: 48,
        color: '#666'
    },
    description: {
        fontSize: 15,
        fontFamily: 'Roboto_400Regular',
        lineHeight: 24,
        color: '#666',
    },
    updated: {
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
        color: '#666'
    },
    noticeList: {
        marginTop: 32
    },
    firstLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    lastLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    notice: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#67b4fd',
        marginBottom: 16
    },
    noticeTitleProperty: {
        fontSize: 18,
        color: '#41414d',
        fontFamily: 'Ubuntu_700Bold'
    },
    noticeProperty: {
        fontSize: 14,
        color: '#41414d',
        fontFamily: 'Roboto_500Medium'
    },
    noticeValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
        fontFamily: 'Roboto_400Regular',
    },
    emptyListView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    emptyList: {
        fontSize: 16,
        color: '#41414d',
        fontFamily: 'Roboto_500Medium'
    }
});