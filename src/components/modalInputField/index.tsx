import React, { FC } from "react";
import { TextInput } from "react-native";
import styles from "./styles";
import { Colors } from "../../constants";

interface CustomInputField {
  placeHolder?: string;
  value?: string;
  onChangeText?: any;
  keyboardType?: any;
  flex?: any;
}

const CustomInputField: FC<CustomInputField> = (props: CustomInputField) => {
  const { placeHolder, value, onChangeText, keyboardType, flex } = props;
  return (
    <>
      <TextInput
        placeholderTextColor={Colors.GREY.opacity_40}
        style={[styles.inputField, flex && styles.flex]}
        keyboardType={keyboardType}
        placeholder={placeHolder}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default CustomInputField;
