import React from 'react';
import {Message} from '../../types';
import { Text,View } from 'react-native';
import moment from "moment";
import styles from './styles';

export type ChatMessageProps = {
    message: Message;
}
const ChatMessage = (props: ChatMessageProps)=>{
    const {message}=props;

    const isMyMessage = ()=> {
        return message.user.id === 'u1';
    }

    return(
        <View style={styles.container}>
            <View style={[
                styles.messageBox,{
                    backgroundColor : isMyMessage()? '#DCF8C5': 'white',
                    marginLeft : isMyMessage()? 50: 0,
                    marginRight : isMyMessage() ? 0 : 50,

                }
                ]}>

            
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text  style={styles.messages}>{message.content}</Text>
                <Text  style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;