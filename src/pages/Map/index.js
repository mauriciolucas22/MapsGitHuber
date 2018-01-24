import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal, TextInput } from 'react-native';
import MapView from 'react-native-maps';

import styles from 'styles';

import store from 'redux/store';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'redux/actions/newUser';

const LATITUDE = -27.2177659;
const LONGITUDE = -49.6451598;

class Map extends Component {

  state = {
    modalVisible: false,
    coordinate: new MapView.AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
    }),
    coordinate: {
      latitude: -27.2177659,
      longitude: -49.6451598,
    },
    coordinateTest: [],
    userName: 'Digite',
  }


  openModal = ({ nativeEvent }) => {
    this.setState({ modalVisible: true });
    //console.tron.log(nativeEvent.coordinate);

    // faz copia e setState
    this.setState({ coordinateTest: [
      this.state.coordinateTest,
      nativeEvent.coordinate
    ]});
  }

  closeModal() {
    this.props.searchUser(this.state.userName);

    console.tron.log(this.state.coordinateTest);

    this.setState({ modalVisible: false });
  }

  onMapPress = ({ nativeEvent }) => {
    console.tron.log(nativeEvent.coordinate)
    
  }


  render() {

    // const { region } = this.props;
    // console.log(region);

    return (
      <View style={styles.container}>

        <MapView
          style={styles.map}
          region={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
          onLongPress={ this.openModal }
        >

        { this.state.coordinate && <MapView.Marker.Animated coordinate={this.state.coordinate} /> }

        </MapView>


        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text>This is content inside of modal component</Text>
              <TextInput onChangeText={userName => this.setState({userName})} value={this.state.userName}/>
              <Button
                onPress={() => this.closeModal()}
                title="Close modal"
              >
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);