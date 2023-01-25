import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Strings, Fonts, IS_IPHONE_X, hp, wp, isTab} from '../../../constants';

interface PopUP {
  onContinuePress?: any;
  onOneByOnePress?: any;
}

const PopUP: FC<PopUP> = (props: PopUP) => {
  const {onContinuePress, onOneByOnePress} = props;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onContinuePress}>
          <Text style={styles.popUpText}>{Strings.Continues_Scanning}</Text>
        </TouchableOpacity>
        <View style={styles.underLine} />
        <TouchableOpacity onPress={onOneByOnePress}>
          <Text style={styles.popUpText}>{Strings.One_by_One}</Text>
        </TouchableOpacity>
        <View style={[styles.triangle, styles.arrowDown]} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2.2),
    backgroundColor: Colors.WHITE.offWhite,
    borderRadius: wp(2.5),
    justifyContent: 'center',
    width:isTab?wp(28): wp(37),
    height:isTab?hp(10): hp(8.5),
  },
  underLine: {
    borderWidth: isTab?1:0.5,
    marginTop:hp(0.6),
    marginBottom:hp(0.5),
    borderColor: Colors.GREY.off_Grey,
  },
  popUpText: {
    fontFamily: Fonts.ROBOTO.Regular,
    color: Colors.GREY.darkWithOpacity,
    fontSize: isTab?wp(2.4):IS_IPHONE_X ? 14 : 12,
    fontWeight: '400',
  },
  triangle: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
    bottom:hp(-1),
    right: wp(3),
    alignSelf: 'flex-end',
  },
  arrowDown: {
    borderTopWidth: 15,
    borderRightWidth: 12,
    borderLeftWidth: 12,
    borderTopColor: Colors.WHITE.offWhite,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRadius: 5,
  },
});

export default PopUP;
