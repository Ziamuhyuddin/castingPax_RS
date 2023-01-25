import {Platform, StyleSheet} from 'react-native';
import {
  IS_IPHONE_X,
  Fonts,
  wp,
  hp,
  Colors,
  isTab,
  IS_IPHONE,
} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE.default,
  },
  profileHeader: {
    justifyContent: 'flex-end',
    height: isTab ? hp(14) : Platform.OS === 'ios' ? hp(10) : hp(11),
    backgroundColor: Colors.BLUE.withOpacity,
  },
  imgAbsoluteCon: {
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  profileImageCon: {
    ...StyleSheet.absoluteFillObject,
    top: isTab ? wp(-15) : Platform.OS === 'ios' ? hp(-8) : hp(-9),
    left: wp(2),
    borderRadius: wp(1),
  },
  profileImage: {
    width: isTab ? wp(26) : wp(30),
    height: isTab ? wp(26) : wp(30),
    borderRadius: 5,
    marginStart: wp(4),
  },
  profileName: {
    // marginStart: isTab ? wp(27.5) : wp(33),
    marginStart: isTab ? wp(33.5) : wp(39),
    marginBottom: hp(1),
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: '500',
    color: Colors.BLACK.default,
    fontSize: isTab ? wp(3.7) : IS_IPHONE_X ? 20 : 18,
  },
  attributesCon: {
    marginHorizontal: wp(6),
    marginTop: isTab ? wp(12) : IS_IPHONE_X ? hp(6) : hp(10),
  },
  buttonCon: {
    // borderWidth:1,
    marginTop: hp(4),
    marginBottom: hp(2),
  },
  dropDownCon: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  bottomIndicator: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;
