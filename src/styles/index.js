import { StyleSheet } from 'react-native';

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
    backgroundColor: 'grey'
  },
  innerContainer: {
    alignItems: 'center',
  },
  marker: {
    width: 32,
    height: 5,
    borderRadius: 20,
    marginLeft: 40,
  },
});

export default styles;