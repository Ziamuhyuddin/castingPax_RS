import {Platform, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE.default,
  },

  screenPadding: {
    marginTop: hp(1),
    flex: 1,
    paddingHorizontal: wp(9),
  },

  btCon: {

    marginTop: hp(1),
  },
  btCustomStyle: {
    width: wp(85),
  },

  headerPadding: {
    marginTop: hp(3),
    paddingHorizontal: wp(9),
  },
  phoneText: {
    fontWeight: '500',
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: Platform.OS === 'ios' ? 22 : 20,
    color: Colors.GREY.darkWithOpacity,
  },
  instructionText: {
    lineHeight: hp(2.9),
    marginTop: hp(1),
    fontWeight: '400',
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    color: Colors.GREY.darkWithOpacity,
  },
});

export default styles;
