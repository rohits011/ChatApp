import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = () => {
  const [text, setText] = useState('Hello, world!');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{text}</Text>
      <Button
        title="Change Text"
        onPress={() => setText('New text!')}
      />
    </View>
  );
};

export default MainScreen;