import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    width: width / 3,
    borderColor: '#68b0ab',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 2,
  },
  label: {
    color: '#68b0ab',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '700',
    letterSpacing: 1.1,
    fontSize: 16,
  },
});
