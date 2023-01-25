import {Platform, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.BLACK.withOpacity,
    // marginBottom: Platform.OS === 'ios' ? hp(3.5) : hp(0),
    // marginBottom: hp(3.5),
  },
  inputField: {
    padding: 0,
    marginBottom: hp(3.1),
    paddingBottom: hp(3.1),
    borderBottomColor: Colors.BLACK.withOpacity,
    borderBottomWidth: 1,
    fontFamily: Fonts.SFPROTEXT.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 17 : 15,
    fontWeight: '400',
  },
  customField: {
    marginStart: wp(6),
    marginTop: hp(2),
    marginBottom: hp(2),
    padding: 0,
    fontFamily: Fonts.SFPROTEXT.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 17 : 15,
    fontWeight: '400',
  },
  iconParentCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  iconinputFieldCon: {
    padding: 0,
    marginBottom: hp(3.1),
    paddingBottom: hp(3.1),
    borderBottomColor: Colors.BLACK.withOpacity,
    borderBottomWidth: 1,
    flex: 1,
    justifyContent: 'flex-end',
    fontFamily: Fonts.SFPROTEXT.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 17 : 15,
    fontWeight: '400',
  },
  iconStyle: {
    width: isTab ? wp(4.5) : 21,
    height: isTab ? hp(2.5) : 19,
  },
  iconContainer: {
    padding: 0,
    marginBottom: hp(3.1),
    paddingBottom: hp(3.1),
    borderBottomColor: Colors.BLACK.withOpacity,
    borderBottomWidth: 1,
  },
});

export default styles;
