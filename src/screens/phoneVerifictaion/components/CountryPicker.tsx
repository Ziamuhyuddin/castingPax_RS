import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {hp, wp, Colors, Fonts, IS_IPHONE_X} from '../../../constants';

interface countryPicker {}

const CountryPicker: React.FC = (props: countryPicker) => {
  const {} = props;
  const [value, setValue] = useState<string>('');
  const [cc, setCc] = useState<string>('PK');
  const [callingCode, setCallingCode] = useState<string>('92');
  const [formattedValue, setFormattedValue] = useState<string>('');

  const phoneInput = useRef<PhoneInput>(null);
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.internalCon}>
          <View style={styles.countryTextCon}>
            <Text style={styles.countryText}>{cc}</Text>
          </View>
          <PhoneInput
            renderDropdownImage={
              <View style={styles.ic_dropDownCon}>
                <Image
                  style={styles.ic_dropDown}
                  source={require('../../../assets/icons/ic_drop_down.png')}
                />
              </View>
            }
            countryPickerButtonStyle={styles.countryPickerButtonStyle}
            textContainerStyle={styles.textContainerStyle}
            textInputStyle={styles.textInputStyle}
            codeTextStyle={styles.codeTextStyle}
            containerStyle={styles.containerStyle}
            ref={phoneInput}
            defaultValue={value}
            defaultCode="PK"
            layout="second"
            onChangeCountry={country => {
              console.log('THIS is country CONSOLE:', country);
              setCallingCode(country.callingCode[0]);
              setCc(country.cca2);
            }}
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            autoFocus
          />
          <View
            style={[
              styles.leftBorderLine,
              {
                width: callingCode.length > 2 ? wp(24) : wp(23),
              },
            ]}
          />
          <View style={styles.rightBorderLine} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE.default,
  },
  internalCon: {
    flexDirection: 'row',
  },
  countryTextCon: {
    alignSelf: 'center',
  },
  ic_dropDownCon: {
    marginTop: hp(0.3),
    alignSelf: 'center',
  },
  ic_dropDown: {
    width: wp(3),
    height: hp(0.8),
  },
  countryText: {
    fontSize: IS_IPHONE_X ? 18 : 16,
    color: Colors.GREY.darkWithOpacity,
    fontFamily: Fonts.ROBOTO.Regular,
    fontWeight: '400',
  },
  codeTextStyle: {
    color: Colors.GREY.darkWithOpacity,
    fontSize: IS_IPHONE_X ? 18 : 16,
    fontFamily: Fonts.ROBOTO.Regular,
    fontWeight: '400',
  },
  countryPickerButtonStyle: {
    width: wp(27),
    paddingRight: wp(8),
  },
  textContainerStyle: {
    marginLeft: wp(-8),
    backgroundColor: Colors.WHITE.default,
  },
  textInputStyle: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: IS_IPHONE_X ? 18 : 16,
    fontWeight: '400',
    color: Colors.GREY.darkWithOpacity,
    marginLeft: wp(-1),
    backgroundColor: Colors.WHITE.default,
    padding: 0,
  },
  containerStyle: {
    backgroundColor: Colors.WHITE.default,
    padding: 0,
  },
  leftBorderLine: {
    position: 'absolute',
    borderBottomWidth: 1,
    borderBottomColor: Colors.BLACK.withOpacity,
    left: 0,
    bottom: Platform.OS === 'ios' ? hp(1.2) : hp(1.5),
  },
  rightBorderLine: {
    position: 'absolute',
    borderBottomWidth: 1,
    borderBottomColor: Colors.BLACK.withOpacity,
    right: 0,
    bottom: Platform.OS === 'ios' ? hp(1.2) : hp(1.5),
    width: wp(58),
  },
});

export default CountryPicker;
