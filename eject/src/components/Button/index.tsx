import React, { useState } from 'react';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import styles from './styles';

interface Props {
    icon: string,
    iconColor: string,
    iconSize: number, 
    text: string,
    navigate: Function
}

const Button = (props: Props) => {

    return (
        <RectButton style={styles.button} onPress={() => { props.navigate() }}>
            <View style={styles.buttonIcon}>
                <Text>
                    <Icon name={props.icon} color={props.iconColor} size={props.iconSize} />
                </Text>
            </View>
            <Text style={styles.buttonText}>
                {props.text}
            </Text>
        </RectButton>
    );
}

export default Button;