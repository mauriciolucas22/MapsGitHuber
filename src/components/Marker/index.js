import React from 'react';
import { View, Image } from 'react-native';
import { MapView, Marker } from 'react-native-maps';

import styles from 'styles';

const MyMarker = () => (
  <Marker coordinate={this.props.coordinate}>
    <Image style={styles.avatar} source={{uri: this.props.image}}/>
  </Marker>
  
);

export default MyMarker;