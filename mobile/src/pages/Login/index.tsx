import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import { View, Text, Alert, KeyboardAvoidingView, Platform } from 'react-native';

//import components
import Input from '../../components/Input';
import ArrowBack from '../../components/ArrowBack';

import styles from './styles';

const Login = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleNavigateList() {
        if(email.length === 0 || password.length == 0){
            emptyInput();
            return false;
        }
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false){
            invalidEmail();
            return false;
        }else{
            if(email.replace(/\s/g, '') === "admin@admin.com" && password.replace(/\s/g, '') === "admin"){
                navigation.navigate('List');
            }else{
                invalidCredentials();
            }
        }
    }

    function emptyInput(){
        return rnAlert("Oooops!", "O campos não podem estar vazios!");
    }

    function invalidEmail(){
        return rnAlert("Oooops!", "O email digitado não possui formato válido!");
    }

    function invalidCredentials(){
        return rnAlert("Oooops!", "Credenciais inválidas, clique em \"Esqueceu a senha? \"");
    }

    function showLessPassword() {
        return rnAlert("Informações de login", "Email: admin@admin.com \nSenha: admin");
    }

    function rnAlert(title:string, content:string){
        return Alert.alert(
            title,
            content,
            [
                { text: "OK", onPress: () => {} }
            ],
            { cancelable: false }
        );
    }

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
            <View style={styles.container}>

                <ArrowBack icon="arrow-left" iconSize={20} iconColor="#67b4fd" onPress={handleNavigateBack} />

                <View style={styles.containerCenter}>
                    <Text style={styles.textLogin}>Olá, faça login para prosseguir.</Text>

                    <View>

                        <Input 
                            placeholder="Digite o email"
                            value={email}
                            autoCorrect={false}
                            secureTextEntry={false}
                            onChangeText={setEmail}
                        />

                        <Input 
                            placeholder="Digite a senha"
                            value={password}
                            autoCorrect={false}
                            secureTextEntry={true}
                            onChangeText={setPassword}
                        />

                        <Button 
                            text="Entrar" 
                            icon="arrow-right" 
                            iconColor="#FFF" 
                            iconSize={24} 
                            navigate={handleNavigateList} 
                        />
                        
                        <View style={styles.viewLessPassword}>
                            <Text onPress={() => showLessPassword()} style={styles.lessPassword}>Esqueceu a senha?</Text>
                        </View>
                    </View>

                </View>

            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;
