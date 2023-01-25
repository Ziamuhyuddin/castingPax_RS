import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Keyboard,
  Alert,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {Appicons, Strings} from '../../constants';
import {AppNameLogo, Button, TextField} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {makeSplash, signUpRequest} from '../../store/actions';
import {
  emailValidation,
  validateEmail,
  validatePassword,
} from '../../store/util';
import {useNetInfo} from '@react-native-community/netinfo';

interface signUp {
  navigation?: any;
}

const SignUp: FC<signUp> = (props: signUp) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const {userData, isLoading, errorMessage} = useSelector(
    (state: any) => state.reducer.auth
  );
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [aboutUs, setAboutUs] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [visPassword, setVisPassword] = useState<boolean>(true);
  const [visConfPass, setVisConfPass] = useState<boolean>(true);
  const fadeAnimation = () => {
    Platform.OS === 'ios' &&
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(false);
        fadeAnimation();
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(true);
        fadeAnimation();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [isKeyboardVisible]);

  const checkNetConnection = () => {
    if (netInfo.isConnected) {
    } else {
      Alert.alert('', 'Check your network connectivity!');
    }
  };

  const validateSignUpData = () => {
    let error = '';
    if (name.length < 2) {
      error = 'Valid name is required';
    } else if (email === '') {
      error = 'Email is required';
    } else if (validateEmail(email) === null) {
      error = 'Please enter valid email';
    } else if (validatePassword(password) === false) {
      error = 'Password should be more than 6 characters';
    } else if (confirmPass !== password) {
      error = `Password doesn't match`;
    } else if (aboutUs.length === 0) {
      error = 'Give reason for access!';
    }

    if (error.length > 0) {
      return error;
    } else {
      setErrorMsg('');
      return true;
    }
  };

  const onSignUpPress = () => {
    checkNetConnection();
    Keyboard.dismiss();
    let dataCheck = validateSignUpData();

    if (dataCheck !== true) {
      Alert.alert('', dataCheck);
      return;
    }
    let params = {
      firstName: name,
      lastName: ' ',
      email: email,
      password: password,
      aboutUs: aboutUs,
      role: Strings.Role,
    };

    dispatch(
      signUpRequest(params, (res: any) => {
        console.log('THIS IS RES:===>', JSON.stringify(res));
        if (res.status === -1) {
          //Alert.alert(res.error);
        } else {
          Alert.alert(
            'Thank you for Registration.',
            'We will be in contact with you soon after verification.',
            [
              {
                text: 'Ok',
                style: 'default',
                onPress: () => {
                  navigation.navigate('LogIn');
                },
              },
            ]
          );

          setName('');
          setEmail('');
          setPassword('');
          setConfirmPass('');
          setAboutUs('');
        }
      })
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps='handled'
        extraHeight={-90}
      >
        <TouchableOpacity
          style={styles.leftCon}
          onPress={() => navigation.pop()}
        >
          <Image
            style={styles.leftIcon}
            source={require('../../assets/icons/ic_chevron_left.png')}
          />
        </TouchableOpacity>
        <View style={styles.screenPadding}>
          {isKeyboardVisible && (
            <>
              <AppNameLogo
                customLogo={styles.customLogo}
                bgCustom={styles.bgText}
                paxCustom={styles.paxText}
              />
              <Text style={styles.signUpText}>{Strings.Create_Account}</Text>
            </>
          )}
          <View
            style={[
              isKeyboardVisible ? styles.textFieldCon : styles.withKeyBoard,
            ]}
          >
            <TextField
              placeHolder={Strings.Name}
              value={name}
              onChangeText={(n: any) => setName(n)}
            />
            <TextField
              placeHolder={Strings.Email}
              keyboardType={'email-address'}
              value={email}
              onChangeText={(e: any) => setEmail(e)}
            />
            <TextField
              placeHolder={Strings.Password}
              secureTextEntry={visPassword}
              value={password}
              onChangeText={(p: any) => setPassword(p)}
              withIcon
              iconPath={visPassword ? Appicons.DisVis : Appicons.EnaVis}
              iconPress={() => {
                setVisPassword(!visPassword);
              }}
            />
            <TextField
              placeHolder={Strings.Confirm_Password}
              secureTextEntry={visConfPass}
              value={confirmPass}
              onChangeText={(c: any) => setConfirmPass(c)}
              withIcon
              iconPath={visConfPass ? Appicons.DisVis : Appicons.EnaVis}
              iconPress={() => {
                setVisConfPass(!visConfPass);
              }}
            />
            <TextField
              placeHolder={Strings.Why_you_want_access}
              value={aboutUs}
              onChangeText={(a: any) => setAboutUs(a)}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={styles.forgotCon}
          >
            <Text style={styles.forgotText}>{Strings.Forgot_Password}</Text>
          </TouchableOpacity>
          <View style={styles.btCon}>
            <Button
              disabled={isLoading}
              onPress={() => onSignUpPress()}
              title={Strings.Sign_Up}
              large
            />
          </View>
          <View style={styles.footerCon}>
            <Text style={styles.memberText}>
              {Strings.Already_a_member}
              {'  '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
              <Text style={styles.loginText}>{Strings.Login}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomMargin} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;
