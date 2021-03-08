import React from 'react';
import { Text, View } from 'react-native';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

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
          <EventInput />
      </View>
    );
  };

export default App;