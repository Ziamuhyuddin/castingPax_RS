import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../../constants';

interface swiperContent {
  headerTitle?: string;
  content?: string;
}

const SwiperContent: FC<swiperContent> = props => {
  const {headerTitle, content} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{headerTitle}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    marginTop: hp(7),
    width: wp(100),
    paddingHorizontal: wp(8),
  },
  headerText: {
    alignSelf: 'center',
    fontFamily: Fonts.ROBOTO.Medium,
    color: Colors.WHITE.default,
    fontSize: isTab ? wp(4.5) :IS_IPHONE_X ? 22 : 20,
    fontWeight: '500',
  },
  contentText: {
    marginTop: hp(3.5),
    lineHeight: isTab?hp(4):26,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: Fonts.ROBOTO.Regular,
    color: Colors.WHITE.default,
    fontSize: isTab ? wp(3.3) : IS_IPHONE_X ? 18 : 16,
    fontWeight: '400',
  },
});

export default SwiperContent;
