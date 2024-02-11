import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic here
    console.log(username, password);
    if (username === 'admin' && password === 'admin') {
        navigation.navigate('Main');
    }
    alert("wrong username or password");
   
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={{ width: '80%', marginVertical: 10 }}
        placeholder="Username"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={{ width: '80%', marginVertical: 10 }}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={{ fontWeight: 'bold', color: 'blue' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
  };

export default LoginScreen;