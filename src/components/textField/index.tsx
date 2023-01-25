import React, {FC, forwardRef} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import {Colors} from '../../constants';
import CustomIcon from '../CustomIcon';
import {Appicons} from '../../constants/IconImages';

interface textField {
  placeHolder: string;
  customInputField?: any;
  value?: string;
  onChangeText?: any;
  QrScreen?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: any;
  autoFocus?: boolean;
  inputRef?: any;
  withIcon?: boolean;
  iconPress?(): void;
  iconPath?: any;
}

const TextField: FC<textField> = (props: textField) => {
  const {
    placeHolder,
    customInputField,
    value,
    onChangeText,
    QrScreen,
    secureTextEntry,
    keyboardType,
    autoFocus,
    inputRef,
    withIcon,
    iconPress,
    iconPath,
  } = props;

  return (
    <>
      {withIcon ? (
        <View style={styles.iconParentCon}>
          <TextInput
            autoFocus={autoFocus}
            ref={inputRef}
            placeholderTextColor={Colors.GREY.opacity_40}
            style={[styles.iconinputFieldCon, customInputField]}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeHolder}
            value={value}
            onChangeText={onChangeText}
          ></TextInput>
          <CustomIcon
            iconsource={iconPath}
            iconstyle={styles.iconStyle}
            ConStyle={styles.iconContainer}
            onPress={iconPress}
          ></CustomIcon>
        </View>
      ) : (
        <>
          <TextInput
            autoFocus={autoFocus}
            ref={inputRef}
            placeholderTextColor={Colors.GREY.opacity_40}
            style={[
              QrScreen ? styles.customField : styles.inputField,
              customInputField,
            ]}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeHolder}
            value={value}
            onChangeText={onChangeText}
          ></TextInput>
        </>
      )}
    </>
  );
};

export default TextField;
