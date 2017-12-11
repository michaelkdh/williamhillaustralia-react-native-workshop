import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Modal, SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

export default class RunnersList extends Component {
  static propTypes = {
    event: PropTypes.object,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    event: null,
  };

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.text}>
        <Text>{item.number}. </Text>
        <Text>{item.name}</Text>
      </Text>

      <Text style={styles.text}>@ {item.displayPrice}</Text>
    </View>
  );

  render() {
    const { event, onClose, ...rest } = this.props;

    return (
      <Modal {...rest} animationType="slide" onRequestClose={onClose} transparent>
        {
          event ? (
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.title}>{event.venue} - R{event.raceNumber}</Text>
                <TouchableOpacity onPress={onClose}><Icon name="close" size={22} color="#fff" /></TouchableOpacity>
              </View>
              <View style={styles.content}>
                <FlatList data={_.sortBy(event.competitors, ['number'])} renderItem={this.renderItem} keyExtractor={item => item.id} />
              </View>
            </SafeAreaView>
          ) : null
        }
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#00143c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 80,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  text: {
    fontSize: 16,
  },
});
