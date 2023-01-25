import {StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, Colors, isTab, wp} from '../../constants';

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
    // backgroundColor: 'red',
  },
  castingText: {
    fontFamily: Fonts.SFPRODISPLAY.Bold,
    color: Colors.GREEN.default,
    fontSize: isTab ? wp(6) : IS_IPHONE_X ? 28 : 26,
    fontWeight: '700',
    alignSelf: 'center',
  },
  paxText: {
    color: Colors.WHITE.default,
  },
  bgText: {
    fontFamily: Fonts.POPPINS.Light,
    fontWeight: '300',
    fontSize: isTab ? wp(4) : IS_IPHONE_X ? 19 : 17,
    color: Colors.WHITE.default,
    alignSelf: 'center',
  },
});

export default styles;
