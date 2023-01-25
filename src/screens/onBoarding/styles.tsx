import {Platform, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    height: Platform.OS === 'ios' ? hp(68) : hp(76),
    width: wp(100),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overLay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: Colors.GREY.darkWithOpacity,
    // opacity: 0.9,
  },
  termsPolicyCon: {
    // marginTop: hp(3.8),
    // marginTop: 32,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signingText: {
    fontFamily: Fonts.SFPROTEXT.Regular,
    color: Colors.WHITE.default,
    fontSize: isTab ? wp(3) :IS_IPHONE_X ? 15 : 13,
    fontWeight: '400',
    alignSelf: 'center',
  },
  privacyCon: {
    justifyContent: 'center',
  },
  privacyText: {
    textDecorationLine: 'underline',
    fontFamily: Fonts.SFPROTEXT.Regular,
    color: Colors.WHITE.default,
    fontSize: isTab ? wp(3) :IS_IPHONE_X ? 15 : 13,
    fontWeight: '400',
    alignSelf: 'center',
  },
  footerCon: {
    marginTop: hp(4),
    // marginTop:27,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  memberText: {
    fontFamily: Fonts.SFPROTEXT.Semibold,
    color: Colors.WHITE.opacity_50,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 17 : 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
  loginText: {
    fontFamily: Fonts.SFPROTEXT.Semibold,
    color: Colors.WHITE.default,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 17 : 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
  dotsContainer: {
    marginTop: hp(4.5),
    // marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  appNameLogoCon: {
    marginTop: hp(17),
    // marginTop: 116
  },
  greyDot: {
    marginHorizontal: wp(2),
    width:isTab ? wp(2): wp(2.7),
    height: isTab ? wp(2):wp(2.7),
    borderRadius: 50,
    backgroundColor: Colors.WHITE.opacity_50,
  },
  dot: {
    marginHorizontal: wp(2),
    width: isTab ? wp(2):wp(2.7),
    height:isTab ? wp(2) :wp(2.7),
    borderRadius: 20,
    backgroundColor: Colors.WHITE.default,
  },
  buttonCon: {
    marginTop: hp(3.5),
    // marginTop: 21,
  },
  flatListCon: {
    // height: hp(32),
    // backgroundColor: 'red',
  },
  footerHandle: {
    marginBottom: hp(4),
    // backgroundColor:'red'
  },
});

export default styles;
