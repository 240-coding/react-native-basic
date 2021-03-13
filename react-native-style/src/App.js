import React from 'react';
import { View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';
import ShawdowBox from './components/ShawdowBox';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <ShawdowBox />
    </View>
  );
};

export default App;