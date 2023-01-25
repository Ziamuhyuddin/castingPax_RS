import React, {FC, useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Strings} from '../../constants';
import {Button, Header} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CountryPicker from './components/CountryPicker';

interface codeVerification {
  navigation?: any;
}

const PhoneVerification: FC<codeVerification> = (props: codeVerification) => {
  const {navigation} = props;

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          extraHeight={-90}>
          <Header
            leftIcon={require('../../assets/icons/ic_arrow_left.png')}
            leftIconPress={() => navigation.pop()}
          />
          <View style={styles.headerPadding}>
            <Text style={styles.phoneText}>{Strings.Phone}</Text>
            <Text style={styles.instructionText}>
              {Strings.Phone_Screen_instruction}
            </Text>
          </View>
          <View style={styles.screenPadding}>
            <CountryPicker />
            <View style={styles.btCon}>
              <Button
                title={Strings.Request}
                large
                onPress={() => navigation.navigate('CodeVerification')}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default PhoneVerification;
