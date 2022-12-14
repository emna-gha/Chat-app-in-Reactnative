import { MaterialCommunityIcons,MaterialIcons,FontAwesome5 , Entypo, Fontisto} from '@expo/vector-icons';
import React,{useState,useEffect} from 'react';
import { View,TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
const InputBox =()=>{
    const [message,setMessage]=useState('');

    const onMicrophonePress =()=>{
        console.warn('Microphone')
    }
    
    const onSendPress =()=>{
        console.warn(`Sending: ${message} `)
        //send message to backend
        setMessage('');
    }

    const onPress = () => {
        if (!message) {
          onMicrophonePress();
        } else {
          onSendPress();
        }
      }

      
    return(
        <View style={ styles.container}>
            <View style = {styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size = {24} color="grey"/>
                <TextInput style={styles.TextInput}
                multiline
                placeholder={'Type a message'}
                value={message}
                onChangeText={setMessage}
                />
                <Entypo name="attachment" size = {24} color="grey" style={styles.icons}/>
                {!message && <Fontisto name="camera" size = {24} color="grey"style={styles.icons}/>}

            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                {
                    !message 
                    ? <MaterialCommunityIcons name="microphone" size={28} color="white"/>
                    : <MaterialIcons name="send" size={28} color="white"/>
                }
                </View>
            </TouchableOpacity>
            
        </View>
    )
}
export default InputBox;