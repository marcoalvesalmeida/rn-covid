import React from 'react';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface Props {
    icon: string,
    iconSize: number,
    iconColor: string,
    onPress: Function
}

const ArrowBack = (props: Props) => {
    
    return (
        <TouchableOpacity onPress={() => props.onPress()}>
            <Icon name={props.icon} size={props.iconSize} color={props.iconColor} />
        </TouchableOpacity>
    );
}

export default ArrowBack;

