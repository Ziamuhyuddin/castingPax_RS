import React, {useState} from 'react';
import {Colors, Fonts, IS_IPHONE_X, hp, wp, isTab} from '../../../constants';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

interface SectionHeader {
  item?: any;
  atmosPress?: any;
  atmosCheckBoxPress?: any;
}

const SectionHeader = (props: SectionHeader) => {
  const {atmosPress, item, atmosCheckBoxPress} = props;

  const [checkBox, setCheckBox] = useState<boolean>(false);

  const atmosCheckBoxPressed = () => {
    setCheckBox(!checkBox);
    atmosCheckBoxPress();
  };

  return (
    <>
      <TouchableOpacity
        // disabled={isLoader}
        onPress={atmosPress}
        style={styles.container}
      >
        <TouchableOpacity
          style={[styles.checkBoxCon]}
          onPress={atmosCheckBoxPressed}
        >
          <Image
            style={checkBox ? styles.icCheckBox : styles.icCheckBoxGrey}
            source={
              checkBox
                ? require('../../../assets/icons/ic_radio_button_checked_FILL.png')
                : require('../../../assets/icons/ic_radio_button_unchecked.png')
            }
          />
        </TouchableOpacity>
        <View style={styles.titleDropDown}>
          <Text style={styles.mainHeading}>
            {' '}
            {item?.title.length < 23
              ? `${item?.title}`
              : `${item?.title.substring(0, 23)}...`}
          </Text>
          <Image
            style={styles.rightIcon}
            source={require('../../../assets/icons/ic_right.png')}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.GREY.default,
    paddingVertical: isTab ? hp(3) : hp(0.5),
    borderWidth: 0.3,
    paddingEnd: wp(4),
    paddingStart: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icSquare: {
    resizeMode: 'contain',
    width: isTab ? wp(2.2) : wp(3),
    height: isTab ? hp(2.2) : hp(3),
  },
  icCheckBox: {
    resizeMode: 'contain',
    width: isTab ? wp(5) : wp(7),
    height: isTab ? hp(5) : hp(7),
  },
  icCheckBoxGrey: {
    tintColor: Colors.GREY.default,
    resizeMode: 'contain',
    width: isTab ? wp(5) : wp(7),
    height: isTab ? hp(5) : hp(7),
  },
  checkBoxCon: {
    paddingHorizontal: wp(2.5),
  },
  squareBoxCon: {
    backgroundColor: 'red',
    paddingHorizontal: wp(2),
  },
  mainHeading: {
    alignSelf: 'center',
    color: Colors.GREY.darkWithOpacity,
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 18 : 16,
    fontWeight: '400',
  },
  titleDropDown: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
  rightIcon: {
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    width: isTab ? wp(3) : wp(4),
    height: isTab ? wp(3) : wp(4),
  },

  sublistCon: {
    padding: 0,
    borderColor: Colors.GREY.default,
    paddingVertical: hp(2),
    borderWidth: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: wp(4),
    paddingStart: wp(5),
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  squareGrey: {
    tintColor: Colors.GREY.default,
    resizeMode: 'contain',
    width: isTab ? wp(3.2) : wp(4),
    height: isTab ? hp(3.2) : hp(4),
  },
  subHeading: {
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    fontWeight: '500',
    fontFamily: Fonts.ROBOTO.Medium,
    color: Colors.BLACK.Opacity_8,
  },
  statusText: {
    marginEnd: wp(7),
    fontWeight: '500',
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    color: Colors.GREEN.primary,
  },
  chevronDown: {
    resizeMode: 'contain',
    width: wp(3),
    height: hp(1),
  },
  indicatorCon: {
    padding: wp(2),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.54)',
    flex: 1,
  },

  switchMainCon: {
    bottom: hp(40),
    left: wp(25),
    position: 'absolute',
    backgroundColor: Colors.WHITE.default,
    width: wp(50),
    height: hp(20),
    borderRadius: wp(2),
  },
  switchCon: {
    transform: [
      {scaleX: isTab ? 0.9 : Platform.OS === 'ios' ? 0.9 : 0.9},
      {scaleY: isTab ? 0.9 : Platform.OS === 'ios' ? 0.9 : 0.9},
    ],
  },
  tabButtonsText: {
    marginTop: Platform.OS === 'ios' ? hp(1) : hp(0.2),
    fontWeight: '500',
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    color: Colors.GREEN.primary,
  },
  switchTextCon: {
    marginTop: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  travelTimeCon: {
    left: wp(8),
    position: 'absolute',
    backgroundColor: Colors.WHITE.default,
    width: wp(85),
    borderRadius: wp(2),
  },
  lunchCon: {
    left: wp(8),
    position: 'absolute',
    backgroundColor: Colors.WHITE.default,
    width: wp(85),
    borderRadius: wp(2),
  },
  travellingText: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 20 : 18,
    color: Colors.BLACK.default,
  },
  travellingHeaderCon: {
    padding: wp(3),
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icCrossCon: {
    paddingHorizontal: wp(2),
  },
  icCross: {
    tintColor: Colors.RED.default,
    width: wp(3),
    height: hp(4),
  },
  switchButtonsCon: {
    marginTop: hp(2),
    marginHorizontal: wp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.GREEN.primary,
  },
  timeButton: {
    paddingVertical: hp(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  timeText: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    color: Colors.BLACK.default,
  },
  distanceButton: {
    paddingVertical: hp(0.5),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceText: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    color: Colors.BLACK.default,
  },
  travellingButtonCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp(3),
    width: wp(50),
  },
  textFieldCon: {
    flexDirection: 'row',
    marginTop: hp(3),
    marginHorizontal: wp(4),
    alignItems: 'center',
  },
  bulletText: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    color: Colors.BLACK.default,
    width: wp(18),
    lineHeight: hp(2.5),
  },
});

export default SectionHeader;
