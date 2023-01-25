import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Fonts, IS_IPHONE_X, wp, hp, isTab} from '../../../constants';

interface Socials {
  icon?: any;
  title?: string;
}

const Socials: FC<Socials> = (props: Socials) => {
  const {icon, title} = props;

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.icPhone} source={icon} />
        <Text style={styles.socialText}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: isTab?wp(70):IS_IPHONE_X ? wp(65) : wp(64),
    marginTop: hp(1),
    flexDirection: 'row',
  },
  icPhone: {
    resizeMode: 'contain',
    width: isTab?wp(5):wp(6),
    height: isTab?wp(5):wp(6),
  },
  socialText: {
    alignSelf: 'center',
    marginHorizontal: wp(3),
    marginEnd: IS_IPHONE_X ? wp(7) : wp(10),
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: '500',
    color: Colors.GREY.default,
    fontSize: isTab?wp(2.8):IS_IPHONE_X ? 14 : 12,
  },
});

export default Socials;
