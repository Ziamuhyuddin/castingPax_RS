import {Platform, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE.default,
    flex: 1,
  },
  scrollStyle: {
    // paddingTop:hp(3),
    // paddingBottom:hp(3),
    backgroundColor: Colors.WHITE.default,
    flex: 1,
  },
  margin: {
    marginTop: hp(3),
  },
  topMargin: {
    marginTop: hp(0.1),
  },

  indicatorCon: {
    padding: wp(2),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  squareGrey: {
    tintColor: Colors.GREY.default,
    resizeMode: 'contain',
    width: isTab ? wp(5) : wp(7),
    height: isTab ? hp(5) : hp(7),
  },
  sublistCon: {
    padding: 0,
    borderColor: Colors.GREY.default,
    paddingVertical: Platform.OS === 'ios' ? hp(0.5) : hp(1),
    borderWidth: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: wp(4),
    paddingStart: wp(5),
  },
  checkBoxCon: {
    // backgroundColor: "red",
    paddingHorizontal: wp(2.5),
  },

  btSignIn: {
    width: wp(43),
    height: Platform.OS === 'ios' ? hp(4.5) : hp(5),
  },
  btWrap: {
    width: wp(43),
    height: Platform.OS === 'ios' ? hp(4.5) : hp(5.5),
    backgroundColor: Colors.RED.default,
  },
  statusText: {
    marginEnd: wp(7),
    fontWeight: '500',
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    color: Colors.GREEN.primary,
  },
  chevronDown: {
    tintColor: Colors.GREEN.default,
    resizeMode: 'contain',
    width: wp(3),
    height: hp(1),
  },
  chevronUp: {
    tintColor: Colors.GREEN.default,
    transform: [{scaleY: -1}],
    resizeMode: 'contain',
    width: wp(3),
    height: hp(1),
  },
  flexBox: {flexDirection: 'row', alignItems: 'center'},

  performerImage: {
    borderRadius: wp(1.5),
    // width: 45,
    // height: 43,
    width: isTab ? wp(9) : wp(12),
    height: isTab ? wp(8.5) : wp(11),
  },
  icCheckBoxGreyCon: {
    // backgroundColor: "red",
    paddingEnd: wp(2.5),
  },
  icCheckBoxGrey: {
    tintColor: Colors.GREY.default,
    resizeMode: 'contain',
    width: isTab ? wp(5) : wp(7),
    height: isTab ? hp(5) : hp(7),
  },
  icCheckBox: {
    resizeMode: 'contain',
    width: isTab ? wp(5) : wp(7),
    height: isTab ? hp(5) : hp(7),
  },

  matrixExpanded: {
    borderBottomWidth: 0.4,
    // borderTopWidth:item.isOpen?0:0.3,
    padding: 0,
    borderColor: Colors.GREY.default,
    paddingVertical: isTab ? hp(2) : Platform.OS === 'ios' ? hp(0.5) : hp(1),
    // paddingVertical: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: wp(4),
    paddingStart: wp(7),
  },
  loaderView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
  },
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});

export default styles;
