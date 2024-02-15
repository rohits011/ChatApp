import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const ChatBlock = ({ chat, navigation }) => {
  const lastChat = chat.chats[chat.chats.length - 1];
  const lastChatUser = lastChat.from === chat.username ? 'You' : lastChat.from;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
      <View style={styles.chatBlock} >
        <Image source={require('./../assests/userIcon.jpeg')} style={styles.imageBlock} />
        <View style={styles.userChat}>
          <Text style={styles.chatBlockUser}>{chat.username}</Text>
          <Text style={styles.chatBlockText}>{lastChatUser}: {lastChat.text}</Text>
        </View>

      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginHorizontal: 50
        }}
      />
    </TouchableOpacity>

  );
};

const Chats = ({ navigation }) => {
  this.navigation = navigation;
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      username: 'John Doe',
      chats: [
        {
          id: 1,
          text: 'Hello, world!',
          from: 'Rohit singh'
        },
        {
          id: 2,
          text: 'How are you?',
          from: 'John Doe'
        },
        {
          id: 3,
          text: 'I\'m fine, thank you.',
          from: 'Rohit singh'
        }
      ]
    },
    {
      id: 2,
      username: 'Jane Doe',
      chats: [
        {
          id: 4,
          text: 'Good morning, John!',
          from: 'Jane Doe'
        },
        {
          id: 5,
          text: 'I\'m doing well, thanks.',
          from: 'Jane Doe'
        }
      ]
    },
    {
      id: 3,
      username: 'Jimmy Smith',
      chats: [
        {
          id: 6,
          text: 'Hey, how are you doing?',
          from: 'Jimmy Smith'
        },
        {
          id: 7,
          text: 'I\'m doing great, thanks for asking!',
          from: 'Jimmy Smith'
        }
      ]
    }
  ]);
  // const [blocks, setBlocks] = useState([]);
  // // const tasks = useQuery(api.chats.get);
  // setBlocks(tasks);



  return (
    <View style={styles.container}>
      <FlatList
        data={blocks}
        renderItem={({ item }) => <ChatBlock chat={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'skyblue',
    // alignItems: 'center',
  },
  chatBlock: {
    // flexBasis: 'auto',/
    margin: 5,
    marginHorizontal: 20,
    maxWidth: '100%',
    padding: 10,
    // backgroundColor: 'teal',
    borderRadius: 20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  userChat: {
    padding: 5,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'space-between'

  },
  chatBlockText: {
    fontSize: 10,
    fontWeight: 'light',
    color: 'black',
  },
  chatBlockUser: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  imageBlock: {
    height: 50,
    width: 50,
    borderRadius: 25
  }
});

export default Chats;