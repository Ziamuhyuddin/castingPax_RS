import {Platform, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors,isTab} from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE.default,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  icon: {
    resizeMode: 'contain',
    width: wp(5),
    height: hp(3),
  },
  text: {
    marginVertical: hp(1),
    fontWeight: '400',
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab?wp(2.6):IS_IPHONE_X ? 14 : 12,
    color: Colors.GREY.darkWithOpacity,
  },
  iconSelected: {
    tintColor: Colors.GREEN.default,
  },
  textSelected: {
    color: Colors.GREEN.default,
  },
});

export default styles;
