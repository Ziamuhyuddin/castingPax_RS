import React, {useEffect, FC, useRef} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import styles from './styles';
interface props {
  attributeName: string;
  placeholder: string;
  // value: string;
  onChangeText(text: string): void;
  onRef: any;
  inputContainerStyle?: ViewStyle;
  returnKeyType?: string;
  blurOnSubmit?: boolean;
  initialValue?: string;
  label?: string;
}
const PhoneInputField: FC<props> = (props: props) => {
  const {placeholder, onChangeText, onRef, initialValue, attributeName} = props;
  const reference = useRef(null);

  useEffect(() => {
    if (reference && onRef) {
      onRef(reference);
    }
  }, [reference]);

  const onChangeTextHandler = (text: string) => {
    onChangeText && onChangeText(text);
  };

  return (
    <View>
      <Text style={styles.attributeText}>{attributeName}</Text>
      <View style={styles.container}>
        <PhoneInput
          onPressFlag={() => {
            return;
          }}
          ref={reference}
          initialCountry={'us'}
          {...props}
          disabled={false}
          initialValue={initialValue}
          autoFormat={true}
          textProps={{
            placeholder: placeholder,
          }}
          textStyle={styles.inputStyle}
          onChangePhoneNumber={onChangeTextHandler}
          allowZeroAfterCountryCode={false}
          offset={20}
        />
      </View>
    </View>
  );
};

export default PhoneInputField;
