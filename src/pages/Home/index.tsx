import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Componentes
import Button from '../../components/Button';

import styles from './styles';

const Home = () => {

    const navigation = useNavigation();

    function handleNavigateLogin() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imgTop} source={require('../../assets/azul.png')} />
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
                <Text style={styles.title}>Um projeto teste Netshow</Text>
            </View>
            <View>
                <Button 
                    text="Próxima Etapa" 
                    icon="arrow-right" 
                    iconColor="#FFF" 
                    iconSize={24} 
                    navigate={handleNavigateLogin} 
                />
            </View>
            <Image style={styles.imgBottom} source={require('../../assets/lilas.png')} />
        </View>
    );
}

export default Home;
