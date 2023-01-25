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
  Platform,
  UIManager,
} from 'react-native';
import styles from './styles';
import {Appicons, Strings} from '../../constants';
import {AppNameLogo, TextField, Button, Header} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {validateEmail, validatePassword} from '../../store/util';
import {loginRequest, makeSplash} from '../../store/actions';
import {useNetInfo} from '@react-native-community/netinfo';

interface logIn {
  navigation?: any;
}

const Login: FC<logIn> = (props: logIn) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const {userData, isLoading, errorMessage} = useSelector(
    (state: any) => state.reducer.auth
  );
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passVis, setPassVis] = useState<boolean>(true);

  const fadeAnimation = () => {
    Platform.OS === 'ios' &&
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        fadeAnimation();
        setKeyboardVisible(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        fadeAnimation();
        setKeyboardVisible(true);
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [isKeyboardVisible]);

  const checkNetConnection = () => {
    if (netInfo.isConnected) {
    } else {
      Alert.alert('', 'Check your network connectivity!');
    }
  };

  const onLoginPress = () => {
    checkNetConnection();
    Keyboard.dismiss();
    if (email === '') {
      Alert.alert('', 'Email is required');
      return;
    } else if (validateEmail(email) === null) {
      Alert.alert('', 'Please enter valid email');
      return;
    } else if (password.trim().length < 1) {
      Alert.alert('', 'Password is Required');
      return;
    } else if (validatePassword(password) === false) {
      Alert.alert('', 'Enter valid password');
      return;
    }

    let params = {email: email, password: password};

    dispatch(
      loginRequest(params, (res: any) => {
        if (res.status === -1) {
          // Alert.alert(res.error)
        } else {
          navigation.navigate('DrawerNav');
          setEmail(''), setPassword('');
        }
      })
    );
    // dispatch(makeSplash(false))
  };

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps='handled'
          extraHeight={-90}
        >
          {!isKeyboardVisible && (
            <Header
              title={Strings.Login}
              leftIcon={require('../../assets/icons/ic_arrow_left.png')}
              leftIconPress={() => navigation.pop()}
            />
          )}
          {isKeyboardVisible && (
            <>
              <TouchableOpacity
                style={styles.leftCon}
                onPress={() => navigation.pop()}
              >
                <Image
                  style={styles.leftIcon}
                  source={require('../../assets/icons/ic_chevron_left.png')}
                />
              </TouchableOpacity>
            </>
          )}
          <View style={styles.screenPadding}>
            {isKeyboardVisible && (
              <>
                <AppNameLogo
                  customLogo={styles.customLogo}
                  bgCustom={styles.bgText}
                  paxCustom={styles.paxText}
                />
                <Text style={styles.logInText}>{Strings.Login}</Text>
              </>
            )}
            <View style={styles.textFieldCon}>
              <TextField
                keyboardType={'email-address'}
                placeHolder={Strings.Email}
                value={email}
                onChangeText={(e: string) => setEmail(e)}
              />
              <TextField
                placeHolder={Strings.Password}
                secureTextEntry={passVis}
                value={password}
                onChangeText={(p: string) => setPassword(p)}
                withIcon
                iconPath={passVis ? Appicons.DisVis : Appicons.EnaVis}
                iconPress={() => {
                  setPassVis(!passVis);
                }}
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
                title={Strings.Login}
                large
                disabled={isLoading}
                onPress={() => onLoginPress()}
              />
            </View>
            <View style={styles.footerCon}>
              <Text style={styles.memberText}>
                {Strings.Not_yet_a_member}
                {'  '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>{Strings.Sign_Up}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomMargin} />
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default Login;
