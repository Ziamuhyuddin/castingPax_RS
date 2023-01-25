import {StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';

const styles = StyleSheet.create({
  menuListContainer: {
    // backgroundColor:'red',
    padding: isTab?wp(4):wp(6),
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: Colors.GREY.default,
  },
  customContainer: {
    padding: wp(0),
    paddingVertical: hp(2),
  },
  menuListImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: wp(5),
    height: hp(2.5),
  },
  customText: {
    marginStart: wp(3.5),
    fontSize: isTab ? wp(3.2):IS_IPHONE_X ? 18 : 16,
  },
  menuText: {
    flex:1,
    // backgroundColor: 'orange',
    fontWeight: '400',
    marginStart: wp(5),
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(3):IS_IPHONE_X ? 16 : 14,
    color: Colors.GREY.darkWithOpacity,
  },
  finalizeText: {
    fontWeight: '700',
    fontFamily: Fonts.ROBOTO.Bold,
    fontSize: isTab ? wp(3.2):IS_IPHONE_X ? 18 : 16,
    color: Colors.GREY.darkWithOpacity,
  },
  dropDownIcon: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: isTab ? wp(3.5):wp(5),
    height: isTab ? wp(3.5):wp(5),
  },
});

export default styles;
