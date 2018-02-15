import React, { Component } from 'react';
import { View, TouchableOpacity, Modal, Text, TextInput } from 'react-native';

import styles from './styles';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Reducers
import { searchUser } from 'redux/ducks/newUser';

class MyModal extends Component {

  state = {
    modalVisible: this.props.modalVisible, // Modal visible status
    coordinate: this.props.coordinate || {
      latitude: -27.2177659,
      longitude: -49.6451598,
    }, // coordinate initial
    userName: 'mauriciolucas22',
  }

  /**
   * 
   */
  closeModal() {
    this.props.searchUser(this.state.userName, this.state.coordinate);

    // this.props.enableModalVisible();

    this.setState({ modalVisible: false });
  }

  /**
   * Close modal without search User
   */
  cancel() {
    this.setState({ modalVisible: false });
  }

  requestClose = () => {

  }

  render() {
    return(
      <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.requestClose()}
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
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = disptach =>
  bindActionCreators({ searchUser }, disptach);

export default connect(mapStateToProps, mapDispatchToProps)(MyModal);