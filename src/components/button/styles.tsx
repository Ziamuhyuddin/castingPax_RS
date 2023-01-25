import {StyleSheet, Platform,Dimensions} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: wp(50),
    height: Platform.OS === 'ios' ? hp(5.8) : hp(7),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN.primary,
    borderRadius: 2,
  },
  btMatrix:{

      width: wp(43),
      height: isTab?wp(7.5):Platform.OS === 'ios' ? height > 680?hp(4.8) :hp(5.2) : hp(5.5),

  },
  btWrap:{
    backgroundColor: Colors.RED.default
  },
  matrixText:{
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: isTab?wp(2.8):IS_IPHONE_X?16:14,
    fontWeight: '500',
    color: Colors.WHITE.default
  },
  btText: {
    fontFamily: Fonts.SFPROTEXT.Semibold,
    fontSize: isTab ? wp(2.8) :IS_IPHONE_X ? 16 : 15,
    fontWeight: '600',
    color: Colors.WHITE.default,
  },
  customBT: {
    width: wp(85),
  },
  extraLarge:{
    width: wp(89),
  },
  iconCon:{
    // backgroundColor:'yellow',
    marginStart:wp(2),
    padding:wp(2),
    alignSelf:'center'
  },
  icon: {
    // marginStart: wp(2),
    width: wp(4),
    height: wp(4),
  },
});

export default styles;
