import React from 'react';
import { View, Image } from 'react-native';
import { MapView } from 'react-native-maps';

import styles from 'styles';

const Marker = () => (
  <MapView.Marker title='Title' key={this.props.key} coordinate={this.props.coordinate}>
    <View style={styles.containerMarker} >
      <Image style={styles.avatar} source={{uri: this.props.image}} />
    </View>
  </MapView.Marker>
);

export default Marker;