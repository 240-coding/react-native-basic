import React from 'react';
import { Text, View } from 'react-native';
import Counter from './components/Counter';
import EventButton from './components/EventButton';

const App = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
          <Text
            style={{
                fontSize: 30,
                marginBottom: 10,
            }}>
              Props
          </Text>
          <Counter />
          <EventButton />
      </View>
    );
  };

export default App;