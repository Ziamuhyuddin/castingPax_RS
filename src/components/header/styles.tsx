import {StyleSheet, Platform, Dimensions} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  shading: {
    backgroundColor: Colors.WHITE.default,
    shadowOffset: {
      width: wp(0),
      height: hp(0.2),
    },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    elevation: 3,
  },
  customShading: {
    backgroundColor: Colors.WHITE.default,
    shadowOffset: {
      width: wp(0),
      height: hp(0.1),
    },
    shadowRadius: 0,
    shadowOpacity: 0.1,
    elevation: 1.2,
  },
  headerCon: {
    backgroundColor: Colors.WHITE.default,
    // backgroundColor: 'red',
    paddingHorizontal: wp(5),
    alignItems: 'center',
    flexDirection: 'row',
    height: hp(8.2),
  },
  leftIconCon: {
    // padding: wp(3),
  },
  leftIcon: {
    resizeMode: 'contain',
    width: isTab ? wp(3.5) : wp(4.5),
    height: isTab ? hp(3.5) : hp(4.5),
  },
  titleIconCon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightIconCon: {
    padding: wp(1),
    // backgroundColor: 'red',
  },
  rightIcon: {
    resizeMode: 'contain',
    width: isTab ? wp(3) : wp(2.5),
    height: isTab ? hp(3) : hp(2.5),
  },
  horizentalRighticon: {
    resizeMode: 'contain',
    width: isTab ? wp(3) : wp(2.5),
    height: isTab ? hp(3) : hp(2.5),
    transform: [{rotate: '90deg'}],
  },
  headerText: {
    alignSelf: 'center',
    marginLeft: wp(7),
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: isTab ? wp(3.5) : IS_IPHONE_X ? 20 : 18,
    fontWeight: '500',
    color: Colors.GREY.darkWithOpacity,
    marginEnd: 20,
  },
  customHeaderText: {
    // alignSelf: 'center',
    marginLeft: wp(7),
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    fontWeight: '400',
    color: Colors.GREY.darkWithOpacity,
  },
  transparentView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.54)',
    flex: 1,
  },
  modalCon: {
    backgroundColor: Colors.WHITE.default,
    marginStart: wp(27),
    flex: 1,
  },
  btCustomStyle: {
    width: wp(27),
    height: isTab
      ? hp(5.2)
      : Platform.OS === 'ios'
      ? height > 680
        ? hp(4.5)
        : hp(5)
      : hp(5.3),
  },
  textCustomStyle: {
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 15 : 14,
    fontWeight: '500',
  },
  inputField: {
    flex: 1,
    marginLeft: wp(6.5),
    padding: 0,
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    // color: Colors.GREY.darkWithOpacity,
    fontWeight: '400',
  },
  filterIconCon: {
    // borderWidth: 1,
    padding: 4,
    marginEnd: 5,
  },
  filterIcon: {
    width: wp(4),
    height: hp(2.5),
  },
  headerTextCon: {
    justifyContent: 'center',
  },
  centerTextCon: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default styles;
