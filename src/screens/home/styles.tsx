import {StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE.default,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontL: {
    fontSize: 30,
    fontFamily: Fonts.SFPRODISPLAY.Ultralight,
    color: Colors.BLACK.default,
  },
  circle: {
    backgroundColor: 'yellow',
    width: wp(100),
    height: wp(100),
    borderRadius: wp(100),
  },
});

export default styles;
