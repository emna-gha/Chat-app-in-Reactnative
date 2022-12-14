import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const NewMessageButton =() => {
    const navigation = useNavigation ();
    const onPress = ()=>{
        navigation.navigate('Contacts');
    }
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
        <MaterialCommunityIcons name='message-reply-text'
        size={28}
        color = 'white'
        />

        </View>
    </TouchableOpacity>
    )
}
export default NewMessageButton;