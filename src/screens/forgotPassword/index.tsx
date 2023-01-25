import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert, Keyboard,
} from 'react-native';
import styles from './styles';
import {Strings} from '../../constants';
import {AppNameLogo, TextField, Button, Header} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch,useSelector} from 'react-redux'
import {resetPasswordRequest} from '../../store/actions'
import {validateEmail} from '../../store/util'
import {useNetInfo} from "@react-native-community/netinfo";

interface forgotPassword {
  navigation?: any;
}

const ForgotPassword: FC<forgotPassword> = (props: forgotPassword) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const {isLoading} = useSelector(
      (state:any) => state.reducer.auth,
      );
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(true);
  const [emailAddress, setEmailAddress] = useState<string>('');

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //       'keyboardDidShow',
  //       () => {
  //         setKeyboardVisible(false);
  //       },
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //       'keyboardDidHide',
  //       () => {
  //         setKeyboardVisible(true);
  //       },
  //   );
  //
  //   return () => {
  //     keyboardDidHideListener.remove();
  //     keyboardDidShowListener.remove();
  //   };
  // }, [isKeyboardVisible]);

  const checkNetConnection = ()=>{
    if(netInfo.isConnected){

    }else
    {
      Alert.alert('','Check your network connectivity!')
    }
  }

  const onSendEmailPress = () => {
    checkNetConnection()
    Keyboard.dismiss();
    if (emailAddress === '') {
      Alert.alert('','Email is required');

      return;
    } else if (validateEmail(emailAddress) === null) {
      Alert.alert('','Please enter valid email');

      return;
    }

    let params = {
      email: emailAddress,
    };

    dispatch(
        resetPasswordRequest(params, (res:any) => {
          console.log('THIS is RESET resposne',JSON.stringify(res))
          if (res.status === -1) {

          } else {
            Alert.alert('',res.email);
            setEmailAddress('')

          }
        }),
    );
  };


  return (
    <>
      <View style={styles.container}>
        <SafeAreaView />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          extraHeight={-90}
        >
          <TouchableOpacity
            style={styles.leftCon}
            onPress={() => navigation.pop()}>
            <Image
              style={styles.leftIcon}
              source={require('../../assets/icons/ic_chevron_left.png')}
            />
          </TouchableOpacity>

          {/*<>*/}
          {/*  <Header*/}
          {/*    leftIcon={require('../../assets/icons/ic_arrow_left.png')}*/}
          {/*    leftIconPress={() => navigation.pop()}*/}
          {/*  />*/}
          {/*  <View style={styles.headerPadding}>*/}
          {/*    <Text style={styles.forgotText}>{Strings.Forgot_Password}</Text>*/}
          {/*    <Text style={styles.instructionText}>*/}
          {/*      {Strings.Forgot_Screen_Instruction}*/}
          {/*    </Text>*/}
          {/*  </View>*/}
          {/*</>*/}

          <View style={styles.screenPadding}>
            <>
              <AppNameLogo
                customLogo={styles.customLogo}
                bgCustom={styles.bgText}
                paxCustom={styles.paxText}
              />
              <Text style={styles.resetPassText}>{Strings.Reset_Password}</Text>

              <Text style={styles.resetInstructionText}>
                {Strings.Reset_Instructions}
              </Text>
            </>
            <View style={styles.textFieldCon}>
              <TextField
                  keyboardType='email-address'
                customInputField={styles.customInputField}
                placeHolder={Strings.Email_Address}
                value={emailAddress}
                onChangeText={(t: any) => setEmailAddress(t)}
              />
            </View>

            <View style={styles.btCon}>
              <Button
                  onPress={() => onSendEmailPress()}
                  title={Strings.Send_Email}
                  large
                  disabled={isLoading}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>

      </View>
    </>
  );
};

export default ForgotPassword;
