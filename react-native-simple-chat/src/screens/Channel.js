import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { DB, createMessage, getCurrentUser } from '../utils/firebase';
import styled, { ThemeContext } from 'styled-components/native';
import { Alert, Text, FlatList } from 'react-native';
import { Input } from '../components';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

const SendButton = props => {
    const theme = useContext(ThemeContext);

    return (
        <Send
            {...props}
            disabled={!props.text}
            containerStyle={{
                width: 44,
                height: 44,
                alignItems: 'ceneter',
                justifyContent: 'center',
                marginHorizontal: 4,
            }}
        >
            <MaterialIcons
                name="send"
                size={24}
                color={
                    props.text ? theme.sendButtonActivate : theme.sendButtonInactivate
                }
                />
        </Send>
    );
};

const Channel = ( {navigation, route: { params }} ) => {
    const theme = useContext(ThemeContext);
    const { uid, name, photoUrl } = getCurrentUser();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = DB.collection('channels')
        .doc(params.id)
        .collection('messages')
        .orderBy('createdAt', 'desc')
        .onSnapshot(snapshot => {
            const list = [];
            snapshot.forEach(doc => {
                list.push(doc.data());
            });
            setMessages(list);
        });
    
        return () => unsubscribe();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: params.title || 'Channel' });
    }, []);

    const _handleMessageSend = () => {};
    
    return (
        <Container>
            <FlatList
                keyExtractor={item => item['id']}
                data={messages}
                renderItem={({ item }) => (
                    <Text style={{ fontSize: 24 }}>{item.text}</Text>
                )}
                inverted={true}
            />
            <Input
                value={text}
                onChangeText={text => setText(text)}
                onSubmitEditing={() => createMessage({ channelId: params.id, text })}
            />
        </Container>
    );
};

export default Channel;