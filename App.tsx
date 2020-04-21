import React from 'react';
import {Button, View, Text, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/container/homeScreen';
import DetailScreen from './src/container/detailScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Project">
          <Stack.Screen name="Project" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
