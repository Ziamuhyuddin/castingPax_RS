import React, {FC} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors, Fonts, hp, IS_IPHONE_X, isTab, wp} from '../../../constants';

interface ProfileAttribute {
  placeHolder?: string;
  value?: string;
  onChangeText(val: string, name: string): void;
  attributeName?: string;
  name: string;
  keyboardType?: any;
  maxLength?: number;
}

const ProfileAttribute: FC<ProfileAttribute> = (props: ProfileAttribute) => {
  const {
    attributeName,
    placeHolder,
    value,
    onChangeText,
    keyboardType,
    maxLength,
    name,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.attributeText}>{attributeName}</Text>
      <TextInput
        // placeholderTextColor={Colors.GREY.opacity_40}
        style={[styles.inputField]}
        placeholder={placeHolder}
        value={value}
        onChangeText={(val) => onChangeText(val, name)}
        keyboardType={keyboardType}
        maxLength={maxLength}
        //onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderBottomColor: Colors.WHITE.default,
    borderColor: 'red',
  },
  attributeText: {
    marginBottom: hp(2),
    fontFamily: Fonts.ROBOTO.Regular,
    fontWeight: '400',
    fontSize: isTab ? wp(3.2) : IS_IPHONE_X ? 18 : 16,
    color: Colors.GREY.default,
  },
  inputField: {
    padding: 0,
    marginBottom: hp(1),
    paddingBottom: hp(1),
    borderBottomColor: Colors.BLACK.withOpacity,
    borderBottomWidth: 1,
    fontFamily: Fonts.SFPROTEXT.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 17 : 15,
    fontWeight: '400',
  },
});

export default ProfileAttribute;
