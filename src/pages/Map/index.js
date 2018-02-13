import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet, Image, Modal, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from 'styles';

import store from 'redux/store';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchUser } from 'redux/ducks/newUser';

/**
 * coordinate: new MapView.AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
    }),
 */

class Map extends Component {

  state = {
    modalVisible: false,
    coordinate: {
      latitude: -27.2177659,
      longitude: -49.6451598,
    },
    coordinateTest: [],
    userName: 'mauriciolucas22',
  }

  componentWillMount = () => {
    // AsyncStorage.clear();
  }


  openModal = ({ nativeEvent }) => {
    this.setState({ modalVisible: true });
    //console.tron.log(nativeEvent.coordinate);

    // faz copia e setState
    this.setState({ coordinate: nativeEvent.coordinate});
  }

  closeModal() {
    this.props.searchUser(this.state.userName, this.state.coordinate);

    this.setState({ modalVisible: false });
  }

  onMapPress = ({ nativeEvent }) => {
    console.tron.log(nativeEvent.coordinate)
    
  }

  cancel() {
    this.setState({ modalVisible: false });
  }


  render() {

    // const { region } = this.props;
    // console.log(region);
    /**
     * { this.props.users && this.props.users.map(coord => <MapView.Marker key={coord.user.id}  coordinate={coord.user.coordinate} >
          <View style={styles.marker}>
            <Image source={uri= coord.user.data.avatar_url }/>
          </View>
        </MapView.Marker> ) }

        { this.props.users && this.props.users.map( marker =>  <Marker key={} image={marker.user.data.avatar_url} coordinate={marker.user.coordinate} />) }
     */

     /*<MapView.Callout>
                <View
                  style={{
                    height: 100,
                    width: 100,
                  }}
                >
                  <Text>Callout here</Text>
                </View>
              </MapView.Callout>*/

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

          {
            this.props.users && this.props.users.map(coord =>
              <MapView.Marker key={coord.id}  coordinate={coord.coordinate} title={coord.data.login} description={coord.data.bio}>
                <View>
                  <Image style={styles.avatar} source={{ uri: coord.data.avatar_url }}/>
                </View>

                

              </MapView.Marker>
            ) 
          }

        </MapView>


        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Adicionar novo local</Text>
              
              <TextInput style={styles.input} onChangeText={userName => this.setState({userName})} value={this.state.userName}/>
              
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={() => this.closeModal()} >
                  <Text style={styles.textSaveButton} >Salvar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.cancelButton} onPress={() => this.cancel()}>
                    <Text style={styles.textCancelButton} >Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.newUser,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);