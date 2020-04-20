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

  HomeScreen = ({navigation}) => {
    const {data} = this.state;
    console.log('hehe', data);
    // const array = Object.values(data);
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {/* <Text>Home Screen</Text> */}
        <FlatList
          data={data}
          renderItem={(data) => {
            console.log('dddd', data);
            return (
              <View style={{backgroundColor: 'red', flex: 1}}>
                <Text>hy</Text>
              </View>
            );
          }}
        />
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('Details', {
              allData: 'hehehehehhehe',
            })
          }
        />
      </View>
    );
  };

  DetailsScreen = ({route, navigation}) => {
    const {allData} = route.params;
    // console.log(allData);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  };
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
