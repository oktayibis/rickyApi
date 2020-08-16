import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    backgroundColor: '#8fc0a9',
    width: width / 3,
    borderColor: '#d8d3cd',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 2,
  },
  label: {
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '700',
    letterSpacing: 1.1,
    fontSize: 16,
  },
});
