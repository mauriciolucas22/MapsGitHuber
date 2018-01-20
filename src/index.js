import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import MapView from 'react-native-maps';
import { Provider } from 'react-redux';
import store from './redux/store';

import "config/ReactotronConfig";
import styles from 'styles';



class App extends Component {

  state = {
    modalVisible: false,
  }


  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }


  render() {

    const { region } = this.props;
    console.log(region);

    return(
      <Provider store={store}>
      <View style={styles.container}>

        <MapView
          style={styles.map}
          region={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
          onLongPress={() => this.openModal()}
        >
        </MapView>


        <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>This is content inside of modal component</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                >
                </Button>
              </View>
            </View>
          </Modal>
      </View>
      </Provider>
    );
  }
}

export default (App);