import {StyleSheet, Platform} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';

const styles = StyleSheet.create({
  transparentView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.54)',
    flex: 1,
  },
  drawerHeaderCon: {
    height: hp(12),
    backgroundColor: Colors.BLUE.withOpacity,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
  },
  headerContent: {
    flexDirection: 'row',
  },
  userInfoText: {
    marginStart: wp(3),
    justifyContent: 'center',
  },
  userName: {
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: '500',
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 18 : 16,
    color: Colors.GREY.darkWithOpacity,
  },
  userEmail: {
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: '500',
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    color: Colors.GREY.default,
  },
  drawerImage: {
    borderRadius: wp(20),
    backgroundColor: 'white',
    width: isTab ? wp(10) : wp(13),
    height: isTab ? wp(10) : wp(13),
  },
  applyFlex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE.default,
  },
  drawerItemsCon: {
    marginTop: hp(3),
    paddingHorizontal: wp(4.5),
  },
  dropDownIcon: {
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    width: wp(5),
    height: wp(5),
  },
  menuDropDownCon: {
    marginHorizontal: wp(8),
  },
  menuItemsText: {
    lineHeight: hp(5),
    fontFamily: Fonts.ROBOTO.Regular,
    color: Colors.GREY.darkWithOpacity,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
  },
  dropDownCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCon: {
    marginBottom: hp(2),
    alignSelf: 'center',
  },
  customLogo: {
    alignSelf: 'flex-start',
  },
  paxText: {
    color: Colors.GREY.darkWithOpacity,
  },
  bgText: {
    color: Colors.GREY.lightGrey,
  },
  activityCon: {
    alignItems: 'center',
    borderBottomColor: Colors.GREY.default,
    justifyContent: 'center',
    flex: 1,
  },
});

export default styles;
