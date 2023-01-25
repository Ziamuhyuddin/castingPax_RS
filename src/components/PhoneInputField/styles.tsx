import {StyleSheet} from 'react-native';
import {Colors, Fonts, hp, isTab, IS_IPHONE_X, wp} from '../../constants';
// import { APP_COLORS } from '../../constants';
// import { AppFonts } from '../../constants/strings';

const styles = StyleSheet.create({
  attributeText: {
    marginBottom: hp(3),
    fontFamily: Fonts.ROBOTO.Regular,
    fontWeight: '400',
    fontSize: isTab ? wp(3.2) : IS_IPHONE_X ? 18 : 16,
    color: Colors.GREY.default,
  },

  container: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE.default,
    marginBottom: hp(1),
    paddingBottom: hp(1),
    borderBottomColor: Colors.BLACK.withOpacity,
    borderBottomWidth: 1,
  },

  inputStyle: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: IS_IPHONE_X ? 18 : 16,
    fontWeight: '400',
    color: Colors.GREY.darkWithOpacity,
    marginLeft: wp(-1),
    backgroundColor: Colors.WHITE.default,
    padding: 0,
  },
  countryPickerButtonStyle: {
    width: wp(12),
    //paddingRight: wp(8),
  },
  ic_dropDownCon: {
    marginTop: hp(0.3),
    alignSelf: 'center',
  },
  ic_dropDown: {
    width: wp(3),
    height: hp(0.8),
  },
});

export default styles;
