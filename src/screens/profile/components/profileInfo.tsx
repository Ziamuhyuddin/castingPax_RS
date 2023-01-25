import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Fonts, IS_IPHONE_X, wp, hp, isTab} from '../../../constants';

interface ProfileInfo {
  icon?: any;
  info?: string;
  category?: string;
  largeIcon?: boolean;
}

const ProfileInfo: FC<ProfileInfo> = (props: ProfileInfo) => {
  const {icon, info, category, largeIcon} = props;

  return (
    <>
      <View
        style={
          largeIcon
            ? [styles.container, {width: wp(92), alignSelf: 'center'}]
            : styles.container
        }
      >
        <Image style={styles.icon} source={icon} />
        <Text style={styles.infoText}>{info}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLUE.withOpacity,
    width: wp(45),
    height: isTab ? hp(16) : hp(12),
    borderRadius: wp(2),
  },
  icon: {
    resizeMode: 'contain',
    width: wp(7),
    height: wp(7),
  },
  infoText: {
    marginTop: IS_IPHONE_X ? hp(1) : hp(0.5),
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: '500',
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 16 : 14,
    color: Colors.GREY.darkWithOpacity,
  },
  category: {
    marginTop: IS_IPHONE_X ? hp(0.5) : hp(0.2),
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 14 : 12,
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: '500',
    color: Colors.GREY.default,
  },
});

export default ProfileInfo;
