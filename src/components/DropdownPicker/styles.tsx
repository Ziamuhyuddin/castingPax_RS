import {StyleSheet} from 'react-native';
import {
  Colors,
  Fonts,
  hp,
  isTab,
  IS_IPHONE,
  IS_IPHONE_X,
  wp,
} from '../../constants';

export const styles = StyleSheet.create({
  selectinputAndroid: {
    padding: 0,
    margin: 0,
    // borderWidth: 1,
    //marginBottom: hp(1),
    paddingBottom: hp(1),
    borderBottomColor: Colors.BLACK.withOpacity,
    borderBottomWidth: 1,
    fontFamily: Fonts.SFPROTEXT.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 17 : 15,
    fontWeight: '400',
    color: Colors.BLACK.default,
  },
  chevronContainer: {
    //  transform: [{scaleX: -1}],
    resizeMode: 'contain',
    width: isTab ? hp(2.5) : hp(2.1),
    height: isTab ? wp(3.5) : wp(2.5),
  },
  CancelTextStyle: {
    fontSize: isTab ? wp(3.2) : IS_IPHONE_X ? 18 : 16,
    color: Colors.RED.default,
    fontFamily: Fonts.SFPROTEXT.Semibold,
  },
  DoneTextStyle: {
    fontSize: isTab ? wp(3.2) : IS_IPHONE_X ? 18 : 16,
    color: Colors.GREEN.primary,
    fontFamily: Fonts.SFPROTEXT.Semibold,
  },

  titleStyle: {
    marginBottom: hp(2),
    fontFamily: Fonts.ROBOTO.Regular,
    fontWeight: '400',
    fontSize: isTab ? wp(3.2) : IS_IPHONE_X ? 18 : 16,
    color: Colors.GREY.default,
  },
  container: {
    marginBottom: hp(1),
    paddingBottom: hp(1),
  },
});
