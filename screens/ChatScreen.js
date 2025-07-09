
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { connectWebSocket, sendMessage } from '../utils/websocket';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const socket = connectWebSocket((msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.close();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(_, i) => i.toString()}
      />
      <TextInput value={input} onChangeText={setInput} placeholder="Type..." />
      <Button title="Send" onPress={() => { sendMessage(input); setInput(''); }} />
    </View>
  );
}
