import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOpacity: 5.0
  },
  marker: {
    height: 45,
  },
  innerContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
    backgroundColor: colors.modalBackgroundColor,
    marginHorizontal: 20,
  },
  title:{
    fontSize: fonts.regular,
    color: colors.titleColor,
  },
  input: {
    alignSelf: 'stretch',
    marginTop: 20,
    borderRadius: 5,
    borderColor: colors.borderColorInput,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7.5,
    borderRadius: 5,
    height: 42,
    width: 75,
    backgroundColor: colors.saveButton,
  },
  //textSaveButton: {},
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 7.5,
    borderRadius: 5,
    height: 42,
    width: 75,
    backgroundColor: colors.cancelButton,
  },
  //textCancelButton: {},
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 5,
    borderColor: '#FFF',
  }

});

export default styles;