import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';
import Event from './Event';

const eventTypes = ['All', 'Horses', 'Harness', 'Greyhounds' ];

export default class App extends Component {
  state = {
    selected: 0,
    data: null,
    selectedEvent: null,
  };

  async componentDidMount() {
    const response = await axios.get('https://www.williamhill.com.au/experience/racing/upcomingracing');
    this.setState({
      data: response.data,
    });
  }

  renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem} onPress={() => this.setState({ selectedEvent: item })}>
      <Text>{item.venue} - R{item.raceNumber}</Text>
      <Text>{moment(item.timeOfRace).format('h:mm A')}</Text>
    </TouchableOpacity>
  );

  render() {
    const { selected, data, selectedEvent } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.title}>Up next</Text>
        </View>
        <View style={styles.filter}>
          {
            _.map(eventTypes, (eventType, i) => (
              <TouchableOpacity
                key={eventType}
                style={[styles.filterButton, i === selected ? styles.selectedButton : null]}
                onPress={() => this.setState({ selected: i })}
              >
                <Text style={i === selected ? styles.selectedText : null}>{eventType}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.content}>
          {
            data ? (
              <FlatList
                data={selected === 0 ? data.nextToJump : data.nextToJump.filter(item => item.eventType === selected)}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
              ) : (
                <View style={styles.loading}>
                  <ActivityIndicator size="large" />
                </View>
              )
          }
        </View>
        <Event visible={!!selectedEvent} event={selectedEvent} onClose={() => this.setState({ selectedEvent: null })} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00143c',
  },
  header: {
    backgroundColor: '#00143c',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  filter: {
    flexDirection: 'row',
    backgroundColor: '#dfdfdf',
  },
  filterButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  selectedButton: {
    backgroundColor: '#00143c',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '700',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
