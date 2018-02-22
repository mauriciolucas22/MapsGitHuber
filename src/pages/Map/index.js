import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet, Image, Modal, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from 'styles';

import MyModal from 'components/Modal';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Reducers Action Creators
//import { searchUser } from 'redux/ducks/newUser';
import { setModalVisible } from 'redux/ducks/modalVisible';

/**
 * coordinate: new MapView.AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
    }),
 */

class Map extends Component {

  state = {
    modalVisible: false,
    coordinate: {},
  }

  componentWillMount = () => {
    // AsyncStorage.clear();
  }

  openModal = ({ nativeEvent }) => {
    this.props.setModalVisible(true);
    
    //this.setState({ modalVisible: true, coordinate: nativeEvent.coordinate });
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

        { this.state.modalVisible && <MyModal modalVisible={this.props.modalVisible.status} coordinate={this.state.coordinate}/> }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.newUser,
  modalVisible: state.modalVisible,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setModalVisible }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);