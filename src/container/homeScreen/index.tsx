import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

interface IProps {
  appTheme: Object;
}
interface IState {}

const options = {
  url: 'https://api.teamway.io/project',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

class HomeScreen extends React.Component<IProps, IState> {
  state: {};
  constructor(props: any) {
    super(props);
    this.state = {data: [], isLoading: true};
  }

  componentDidMount() {
    // console.log('hehe');
    axios(options).then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        this.setState({
          data: response.data,
          isLoading: false,
        });
      } else {
        this.setState({
          data: [],
          isLoading: false,
        });
      }
    });
  }
  // Name of project, Name of company,   and techstack.

  render() {
    const {navigation} = this.props;
    const {data = [], isLoading = ''} = this.state;

    console.log(data);
    return (
      <SafeAreaView>
        <View>
          {isLoading && (
            <ActivityIndicator
              size={'large'}
              style={styles.activityIndicator}
            />
          )}

          <FlatList
            data={data}
            renderItem={(data) => {
              let item = data.item;
              let projectName = item && item.title;
              let companyName = item && item.company && item.company.name;
              let teamSize = item && item.teamSize;
              let techStack = item && item.techStack;
              return (
                <TouchableOpacity
                  style={styles.flatlistStyle}
                  onPress={() =>
                    navigation.navigate('Details', {
                      allData: data.item,
                    })
                  }>
                  <Text style={styles.textColor}>
                    COMPANY NAME : {companyName}
                  </Text>
                  <Text style={styles.textColor}>PROJECT : {projectName}</Text>
                  <Text style={styles.textColor}>TEAM SIZE : {teamSize}</Text>
                  <Text style={styles.textColor}>TECHNOLOGY USED : </Text>
                  <FlatList
                    data={techStack}
                    horizontal
                    renderItem={(data) => {
                      // console.log('ddd', data);
                      let stackName = data && data.item && data.item.name;
                      return (
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.textColor}>
                            {stackName + ` , `}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </TouchableOpacity>
              );
            }}
          />
          {/* <Button
            title="Go to Details"
            onPress={() =>
              navigation.navigate('Details', {
                allData: 'hehehehehhehe',
              })
            }
          /> */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {marginTop: 100},
  flatlistStyle: {
    backgroundColor: '#ef553a',
    flex: 1,
    padding: 40,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  textColor: {
    color: '#FFF',
    fontSize: 18,
    marginVertical: 5,
  },
});

export default HomeScreen;
