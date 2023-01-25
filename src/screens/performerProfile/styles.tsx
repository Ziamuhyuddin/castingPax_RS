import {Platform, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE.default,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: isTab ? hp(14) : Platform.OS === 'ios' ? hp(10) : hp(11),
    backgroundColor: Colors.BLUE.withOpacity,
  },
  imgAbsoluteCon: {
    alignSelf: 'flex-start',
  },
  profileImageCon: {
    ...StyleSheet.absoluteFillObject,
    top: isTab ? hp(-6.5) : hp(-5),
    borderRadius: wp(1),
  },
  profileImage: {
    width: isTab ? wp(20) : wp(28),
    height: isTab ? wp(24) : wp(30),
    borderRadius: 5,
    marginStart: wp(4),
  },
  profileName: {
    marginStart: isTab ? wp(30) : wp(35),
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: '500',
    color: Colors.BLACK.default,
    fontSize: isTab ? wp(3.7) : IS_IPHONE_X ? 20 : 18,
    marginEnd: 0,
    textAlign: 'center',
  },
  icEdit: {
    // alignSelf:'flex-end',
    marginEnd: wp(4),
    resizeMode: 'contain',
    width: isTab ? wp(5.5) : wp(6.5),
    height: isTab ? wp(5.5) : wp(6.5),
  },
  socialCon: {
    alignSelf: 'flex-end',
  },
  attributesCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingBottom: wp(1.5),
  },
  largeAttributecon: {
    paddingBottom: wp(2),
  },
  attributeParentCon: {
    marginTop: isTab ? wp(12) : IS_IPHONE_X ? hp(6) : hp(7),
    marginBottom: isTab ? wp(12) : IS_IPHONE_X ? hp(6) : hp(7),
  },
  profileLoader: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default styles;
