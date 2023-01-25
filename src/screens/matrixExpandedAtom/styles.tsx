import {Platform, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE.default,
    flex: 1,
  },
  screenPadding: {
    backgroundColor: Colors.WHITE.default,
    flex: 1,
    // paddingHorizontal: wp(6),
  },
  topMargin: {
    marginTop: hp(0.1),
  },
  buttonCon: {
    paddingHorizontal: wp(2),
    marginTop: hp(1.3),
    marginBottom: hp(1.3),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  subHeading: {
    marginStart: wp(2),
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    fontWeight: '500',
    fontFamily: Fonts.ROBOTO.Medium,
    color: Colors.BLACK.Opacity_8,
  },
  signInText: {},
  btSignIn: {
    width: wp(43),
    height: Platform.OS === 'ios' ? hp(4.5) : hp(5.5),
  },
  btLunch: {
    width: wp(43),
    height: Platform.OS === 'ios' ? hp(4.5) : hp(5.5),
  },
  statusText: {
    marginEnd: wp(7),
    fontWeight: '500',
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    color: Colors.GREEN.primary,
  },
  chevronDown: {
    resizeMode: 'contain',
    width: wp(3),
    height: hp(1),
  },
  indicatorCon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  squareGrey: {
    tintColor: Colors.GREY.default,
    resizeMode: 'contain',
    width: isTab ? wp(2.2) : wp(3),
    height: isTab ? hp(2.2) : hp(3),
  },
  sublistCon: {
    padding: 0,
    borderColor: Colors.GREY.default,
    paddingVertical: hp(2),
    borderWidth: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: wp(4),
    paddingStart: wp(6.7),
  },
  transparentView: {
    // ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.54)',
    flex: 1,
  },
  // modalMainCon: {
  //   flex: 1,
  //   // backgroundColor: "red",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  switchMainCon: {
    bottom: hp(40),
    left: wp(25),
    // justifyContent: "center",
    // alignItems: "center",
    position: 'absolute',
    backgroundColor: Colors.WHITE.default,
    width: wp(50),
    height: hp(20),
    borderRadius: wp(2),
  },
  switchCon: {
    transform: [
      {scaleX: isTab ? 1.3 : Platform.OS === 'ios' ? 0.9 : 0.9},
      {scaleY: isTab ? 1.3 : Platform.OS === 'ios' ? 0.9 : 0.9},
    ],
  },
  tabButtonsText: {
    marginTop: Platform.OS === 'ios' ? hp(1) : hp(0.2),
    fontWeight: '500',
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 16 : 14,
    color: Colors.GREEN.primary,
  },
  switchTextCon: {
    marginTop: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  travelTimeCon: {
    // bottom: hp(30),
    left: wp(8),
    position: 'absolute',
    backgroundColor: Colors.WHITE.default,
    width: wp(85),
    // height: Platform.OS === "ios" ? hp(28) : hp(30.5),
    borderRadius: wp(2),
  },
  lunchCon: {
    // bottom: hp(30),
    left: wp(8),
    position: 'absolute',
    backgroundColor: Colors.WHITE.default,
    width: wp(85),
    // height: Platform.OS === "ios" ? hp(22) : hp(25),
    borderRadius: wp(2),
  },
  travellingText: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 20 : 18,
    color: Colors.BLACK.default,
  },
  travellingHeaderCon: {
    padding: wp(3),
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icCrossCon: {
    // borderWidth: 1,
    paddingHorizontal: wp(2),
  },
  icCross: {
    tintColor: Colors.RED.default,
    width: wp(3),
    height: hp(4),
  },
  switchButtonsCon: {
    marginTop: hp(2),
    marginHorizontal: wp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.GREEN.primary,
  },
  timeButton: {
    paddingVertical: hp(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  timeText: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 16 : 14,
    color: Colors.BLACK.default,
  },
  distanceButton: {
    paddingVertical: hp(0.5),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceText: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 16 : 14,
    color: Colors.BLACK.default,
  },
  travellingButtonCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp(3),
    width: wp(50),
  },
  textFieldCon: {
    flexDirection: 'row',
    marginTop: hp(3),
    marginHorizontal: wp(4),
    alignItems: 'center',
  },
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  bulletText: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 16 : 14,
    color: Colors.BLACK.default,
    width: wp(18),
    lineHeight: hp(2.5),
  },
});

export default styles;
