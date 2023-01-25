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
  signUpText: {
    marginTop: hp(2),
    fontFamily: Fonts.SFPRODISPLAY.Bold,
    fontSize: isTab ? wp(7) : IS_IPHONE_X ? 36 : 34,
    fontWeight: '700',
    color: Colors.GREY.darkWithOpacity,
  },
  textFieldCon: {
    marginTop: hp(4),
  },
  withKeyBoard: {
    marginTop: hp(0),
  },
  forgotCon: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    alignSelf: 'flex-end',
    fontFamily: Fonts.SFPROTEXT.Semibold,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 17 : 15,
    color: Colors.GREEN.default,
  },
  btCon: {
    marginTop: hp(3.1),
  },
  btCustomStyle: {
    width: wp(85),
  },
  footerCon: {
    marginTop: hp(3),
    // marginTop:27,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  memberText: {
    fontFamily: Fonts.SFPROTEXT.Semibold,
    color: Colors.GREY.opacity_40,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 17 : 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
  loginText: {
    fontFamily: Fonts.SFPROTEXT.Semibold,
    color: Colors.GREY.darkWithOpacity,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 17 : 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
  bottomMargin: {
    marginBottom: hp(3),
  },
});

export default styles;
