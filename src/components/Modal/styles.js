import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOpacity: 60,
  },
  innerContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
    backgroundColor: colors.white,
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
});

export default styles;