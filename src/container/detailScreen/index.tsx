import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Linking,
} from 'react-native';

interface IProps {
  appTheme: Object;
}
interface IState {}

class DetailScreen extends React.Component<IProps, IState> {
  state: {};
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const {allData} = this.props.route.params;
    console.log(allData, 'allData');
    let item = allData;

    // Company Status
    let companyName = item && item.company && item.company.name;
    let companyDescription = item && item.company && item.company.description;
    let companyValues = item && item.company && item.company.values;

    // Project Description
    let projectName = item && item.title;
    let projectSubtitle = item && item.subtitle;
    let projectDescription = item && item.description;
    let techStack = item && item.techStack;
    let startDate = item && item.startDate;
    let deadline = item && item.deadline;

    // Team Detail
    let teamSize = item && item.teamSize;
    let teamName = item && item.team && item.team.name;
    let teamType =
      item && item.team && item.team.teamType && item.team.teamType.name;

    // Links
    let link = item && item.links;

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={[styles.detailContainer, {backgroundColor: '#0BAB64'}]}>
            <Text
              style={[
                styles.textColor,
                {textAlign: 'center', marginBottom: 20},
              ]}>
              Company Status
            </Text>
            <Text style={styles.textColor}>Name: {companyName}</Text>
            <Text style={styles.textColor}>
              Description: {companyDescription}
            </Text>
            <View style={styles.flexRow}>
              <Text style={styles.textColor}>Moto : </Text>
              <FlatList
                data={companyValues}
                horizontal
                renderItem={(data) => {
                  let stackName = data && data.item && data.item.name;
                  return (
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.textColor}>{stackName + ` , `}</Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <View style={[styles.detailContainer, {backgroundColor: '#09203F'}]}>
            <Text
              style={[
                styles.textColor,
                {textAlign: 'center', marginBottom: 20},
              ]}>
              Project Detail
            </Text>
            <Text style={styles.textColor}>Title : {projectName}</Text>
            <Text style={styles.textColor}>Sub Title : {projectSubtitle}</Text>
            <Text style={styles.textColor}>
              Description : {projectDescription}
            </Text>
            <Text style={styles.textColor}>Start Date : {startDate}</Text>
            <Text style={styles.textColor}>DeadLine : {deadline}</Text>

            <View style={styles.flexRow}>
              <Text style={styles.textColor}>Technologies : </Text>
              <FlatList
                data={techStack}
                horizontal
                renderItem={(data) => {
                  // console.log('ddd', data);
                  let stackName = data && data.item && data.item.name;
                  return (
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.textColor}>{stackName + ` , `}</Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <View style={[styles.detailContainer, {backgroundColor: '#A71D31'}]}>
            <Text
              style={[
                styles.textColor,
                {textAlign: 'center', marginBottom: 20},
              ]}>
              Team Detail
            </Text>
            <Text style={styles.textColor}>Title : {projectName}</Text>
            <Text style={styles.textColor}>Sub Title : {projectSubtitle}</Text>
            <Text style={styles.textColor}>Name : {teamName}</Text>
            <Text style={styles.textColor}>Team Type : {teamType}</Text>
            <Text style={styles.textColor}>Team Size : {teamSize}</Text>
          </View>

          <View style={[styles.detailContainer, {backgroundColor: '#734AE8'}]}>
            <Text
              style={[
                styles.textColor,
                {textAlign: 'center', marginBottom: 20},
              ]}>
              Links
            </Text>

            <FlatList
              data={link}
              horizontal
              renderItem={(data) => {
                // console.log('ddd', data);
                let link = data && data.item && data.item.name;
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      // style={{color: 'blue'}}
                      onPress={() => Linking.openURL(link)}>
                      <Text style={styles.textColor}>{link + ` , `}</Text>
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {marginTop: 100},
  detailContainer: {
    // flex: 1,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  textColor: {
    color: '#FFF',
    fontSize: 18,
    marginVertical: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
