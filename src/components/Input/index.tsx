import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

interface Props {
    placeholder: string,
    value: string,
    autoCorrect: boolean,
    secureTextEntry: boolean,
    onChangeText: Function
}

const Input = (props: Props) => {

    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            value={props.value}
            autoCapitalize="none"
            autoCorrect={props.autoCorrect}
            secureTextEntry={props.secureTextEntry}
            onChangeText={(text) => props.onChangeText(text)}
        />
    );
}

export default Input;