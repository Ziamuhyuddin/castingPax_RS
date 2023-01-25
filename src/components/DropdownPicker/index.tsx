import React, {FC, useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Text, View} from 'react-native';

import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import {Colors, Fonts, hp, isTab, IS_IPHONE_X, wp} from '../../constants';
import CustomIcon from '../CustomIcon';
import {styles} from './styles';
interface props {
  value: string;
  pickertitle?: string;
  onPress?(): void;
  onValueChange(val: string): void;
  title?: string;
  tintColor?: string;
  items: {label: string; value: string}[];
  name: string;
  double?: boolean;
}
const DropdownPicker: FC<props> = (props: props) => {
  const [previousState, setPreviousState] = useState<string>('');
  var pickerRef: any;
  const InputAccessoryView = () => {
    return (
      <View style={defaultStyles.modalViewMiddle}>
        <TouchableWithoutFeedback
          onPress={() => {
            pickerRef.togglePicker(true);
            props.onValueChange(previousState);
          }}
          hitSlop={{top: 4, right: 4, bottom: 4, left: 4}}
        >
          <View testID='needed_for_touchable'>
            <Text style={styles.CancelTextStyle}>Cancel</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            pickerRef.togglePicker(true);
          }}
          hitSlop={{top: 4, right: 4, bottom: 4, left: 4}}
        >
          <View testID='needed_for_touchable'>
            <Text style={styles.DoneTextStyle}>Done</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {props.pickertitle && (
        <Text style={styles.titleStyle}>{props.pickertitle}</Text>
      )}
      <RNPickerSelect
        value={props.value}
        placeholder={{
          label: props.title,
          value: '',
          color: Colors.GREY.default,

          fontFamily: Fonts.ROBOTO.Bold,
        }}
        onOpen={() => {
          setPreviousState(props.value);
        }}
        onValueChange={(val: string) => {
          props.onValueChange(val);
        }}
        ref={(ref) => {
          pickerRef = ref;
        }}
        items={props.items}
        useNativeAndroidPickerStyle={false}
        InputAccessoryView={InputAccessoryView}
        style={{
          inputAndroid: styles.selectinputAndroid,
          inputIOS: styles.selectinputAndroid,
          iconContainer: {
            top: 0,
            bottom: 0,
            right: 10,
            justifyContent: 'center',
          },
          placeholder: {
            color: Colors.GREY.default,
            //  marginBottom: hp(2),
            fontFamily: Fonts.ROBOTO.Regular,
            fontWeight: '400',
            fontSize: isTab ? wp(3.2) : IS_IPHONE_X ? 18 : 16,
            //color: Colors.GREY.default,
            //    fontSize: 14,
            //fontFamily: Fonts.SFPROTEXT.Regular,
          },
        }}
        Icon={() => {
          return (
            <></>
            // <CustomIcon
            //   disabled
            //   iconsource={require('../../assets/icons/ic_chevronDown.png')}
            //   // imgstyle={{
            //   //   tintColor:
            //   //     props.value == '' ||
            //   //     props.value == null ||
            //   //     // props.value.length <= 0
            //   //     //   ? Appcolors.TEXT_MID
            //   //     //   : Appcolors.PRIMARY,
            //   // }}
            //   ConStyle={styles.chevronContainer}
            // ></CustomIcon>
          );
        }}
      ></RNPickerSelect>
    </View>
  );
};

export default DropdownPicker;
