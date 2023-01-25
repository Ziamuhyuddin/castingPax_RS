import {Platform, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE.default,
  },
  leftCon: {
    padding: wp(6),
    alignSelf: 'flex-start',
  },
  leftIcon: {
    resizeMode: 'contain',
    width: wp(3),
    height: hp(2.5),
  },
  screenPadding: {
    marginTop: hp(1),
    flex: 1,
    paddingHorizontal: wp(9),
  },
  paxText: {
    color: Colors.GREY.darkWithOpacity,
  },
  bgText: {
    color: Colors.GREY.lightGrey,
  },
  customLogo: {
    alignSelf: 'flex-start',
  },
  resetPassText: {
    marginTop: hp(2),
    fontFamily: Fonts.SFPRODISPLAY.Bold,
    fontSize: isTab ? wp(7) : IS_IPHONE_X ? 36 : 34,
    fontWeight: '700',
    color: Colors.GREY.darkWithOpacity,
  },
  resetInstructionTextCon: {
    // backgroundColor: 'red'
  },
  resetInstructionText: {
    lineHeight: isTab ? hp(3):hp(2.7),
    fontWeight: '400',
    marginTop: hp(2),
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(2.8) : Platform.OS === 'ios' ? 15 : 13,
    color: Colors.GREY.darkWithOpacity,
    // backgroundColor: 'red',
  },
  textFieldCon: {
    marginTop: hp(5.6),
  },
  customInputField: {
    marginBottom: 0,
  },
  focusInputField: {
    marginBottom: 0,
    paddingBottom: Platform.OS === 'ios' ? hp(0.7) : 0,
  },
  withoutKeyboard: {
    marginTop: hp(4),
  },

  btCon: {
    // backgroundColor: 'red',
    marginTop: hp(2.4),
  },
  btCustomStyle: {
    width: wp(85),
  },

  bottomMargin: {
    marginBottom: hp(3),
  },
  headerPadding: {
    marginTop: hp(3),
    paddingHorizontal: wp(9),
  },
  forgotText: {
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
