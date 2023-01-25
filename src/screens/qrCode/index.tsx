import React, {FC, useEffect, useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  Alert,
  TouchableOpacity,
  AppState,
  Image,
  Modal,
  Switch,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import mStyles from './mStyles';
import {
  Button,
  Header,
  BottomTab,
  TextField,
  TravelTimeButton,
  CustomInputField,
} from '../../components';
import PopUP from './Components/popUp';
import {Colors, Strings, height} from '../../constants';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {
  check,
  request,
  PERMISSIONS,
  openSettings,
  RESULTS,
} from 'react-native-permissions';
import {hp} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {matrixPerformerSignInUpdateRequest} from '../../store/actions/matrix';
import moment from 'moment';
import {validateTravelTab} from '../../store/util';

interface QrCOde {
  navigation?: any;
  route?: any;
}

const QrCOde: FC<QrCOde> = (props: QrCOde) => {
  const {navigation, route} = props;
  const {atmosesIds, matrixId} = route.params;
  let time = moment().format('hh:mm A');
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: any) => state.reducer.matrix);
  const appState = useRef(AppState.currentState);
  const [popUp, setPopUp] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(true);
  const [isSelected, setIsSelected] = useState<string>('');
  const [camStatus, setCamStatus] = useState<number>(0);
  const [boxColor, setBoxColor] = useState<boolean>(false);
  const [showTabModal, setShowTabModal] = useState<boolean>(false);
  const [ndbSwitch, setNdbSwitch] = useState<boolean>(false);
  const [rentalSwitch, setRentalSwitch] = useState<boolean>(false);
  const [timeValue, setTimeVlaue] = useState<any>('');
  const [distanceValue, setDistanceValue] = useState<any>('');
  const [qrValue, setQrValue] = useState<string>('');
  const [performerScannedObj, setPerformerScannedObj] = useState<any>(null);
  const [appStateVisible, setAppStateVisible] = useState<string>(
    appState.current
  );

  useEffect(() => {
    requestPermission();
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('🚀 App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('🚀 AppState', appState.current);
      if (appState.current === 'active') {
        checkPermission();
      }
    });

    return () => {
      subscription.remove();
      setCamStatus(0);
    };
  }, []);

  const requestPermission = () => {
    request(PERMISSIONS.IOS.CAMERA || PERMISSIONS.ANDROID.CAMERA).finally(
      () => {
        checkPermission();
      }
    );
  };

  const checkPermission = () => {
    check(PERMISSIONS.IOS.CAMERA || PERMISSIONS.ANDROID.CAMERA)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)'
            );
            setCamStatus(1);
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable'
            );
            setCamStatus(1);
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            setCamStatus(1);
            break;
          case RESULTS.GRANTED:
            console.log('🚀 The permission is granted');
            setCamStatus(2);
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            setCamStatus(1);
            break;
        }
      })
      .catch((error) => {
        setCamStatus(1);
      });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(true);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [isKeyboardVisible]);

  const onTabPress = (res: any) => {
    console.log('RES===>', res);
    setIsSelected(res);

    if (res === Strings.NDB) {
      setShowTabModal(true);
    } else if (res === Strings.Travel_Time) {
      setShowTabModal(true);
    } else if (res === Strings.Rental) {
      setShowTabModal(true);
    } else if (res === Strings.Costume) {
    } else if (res === Strings.Lunch) {
      setShowTabModal(true);
    }
  };

  const _renderNonPermission = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert('', 'Go in device settings', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'SETTINGS',
              onPress: () =>
                openSettings().catch(() =>
                  console.warn('cannot open settings')
                ),
            },
          ]);
          return true;
        }}
      >
        <Text style={styles.permissionText}>{Strings.cameraPermissions}</Text>
      </TouchableOpacity>
    );
  };

  const onRead = (res: any) => {
    // console.log('🚀 ~ file: index.tsx ~ line 202 ~ onRead ~ obj', res?.data);
    let data = JSON.parse(res?.data);

    // console.log(' id ===> ', data.id);
    // console.log(' name ===> ', data.performerName);

    setPerformerScannedObj(data);
    if (res) {
      setBoxColor(true);
      setTimeout(() => {
        setBoxColor(false);
      }, 2000);
    }
  };

  const onManualBtPress = () => {
    // Alert.alert(time);
    setShowSearch(!showSearch);
  };

  const onNDBSwitchPress = () => {
    let payload = {
      workingDayId: matrixId,
      atomsId: atmosesIds,
      performerId: performerScannedObj?.id,
      obj: {
        NDB: !ndbSwitch,
      },
    };
    dispatch(matrixPerformerSignInUpdateRequest(payload));

    setNdbSwitch(!ndbSwitch);
  };

  const onRentalSwitchPress = () => {
    let payload = {
      workingDayId: matrixId,
      atomsId: atmosesIds,
      performerId: performerScannedObj?.id,
      obj: {
        isRental: !rentalSwitch,
      },
    };
    dispatch(matrixPerformerSignInUpdateRequest(payload));

    setRentalSwitch(!rentalSwitch);
  };

  const validateTIme = () => {
    if (validateTravelTab(timeValue) === null) {
      Alert.alert('', 'Enter valid time');
      return false;
    } else if (validateTravelTab(distanceValue) === null) {
      Alert.alert('', 'Enter valid distance');
      return false;
    } else if ((timeValue || distanceValue) == '') {
      Alert.alert('', 'Enter time or distance');
      return false;
    } else {
      return true;
    }
  };

  const validateTravellingTab = () => {
    if (validateTIme()) {
      let payload = {
        workingDayId: matrixId,
        atomsId: atmosesIds,
        performerId: performerScannedObj?.id,
        obj: {
          mileage: timeValue,
          mileageType: distanceValue,
        },
      };
      dispatch(matrixPerformerSignInUpdateRequest(payload));

      // setShowTabModal(false);
    }
  };

  const onSignInPress = () => {
    let payload = {
      workingDayId: matrixId,
      atomsId: atmosesIds,
      performerId: performerScannedObj?.id,
      obj: {
        signInTime: time,
      },
    };
    dispatch(matrixPerformerSignInUpdateRequest(payload));
  };

  const onSendTolunchPress = () => {
    let payload = {
      workingDayId: matrixId,
      atomsId: atmosesIds,
      performerId: performerScannedObj?.id,
      obj: {
        // lunchTime: time,
      },
    };
    dispatch(matrixPerformerSignInUpdateRequest(payload));
  };

  const onWrapPress = () => {
    let payload = {
      workingDayId: matrixId,
      atomsId: atmosesIds,
      performerId: performerScannedObj?.id,
      obj: {
        wrapTime: time,
      },
    };
    dispatch(matrixPerformerSignInUpdateRequest(payload));
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <SafeAreaView />

          <Header
            leftIconPress={() => navigation.pop()}
            leftIcon={require('../../assets/icons/ic_arrow_left.png')}
            title={
              performerScannedObj?.performerName
                ? performerScannedObj?.performerName.length < 19
                  ? `${performerScannedObj?.performerName}`
                  : `${performerScannedObj?.performerName.substring(0, 18)}...`
                : '- - -'
            }
            buttonTitle={Strings.MANUALLY}
            btPress={() => onManualBtPress()}
          />

          {showSearch && (
            <TextField
              keyboardType={'numeric'}
              autoFocus={true}
              QrScreen={true}
              placeHolder={Strings.Enter_QR_Number}
              value={qrValue}
              onChangeText={(q: string) => setQrValue(q)}
            />
          )}
          <View style={styles.qrLayout}>
            {camStatus === 2 ? (
              <QRCodeScanner
                // flashMode={RNCamera.Constants.FlashMode.torch}
                cameraStyle={styles.cameraStyle}
                // cameraContainerStyle=
                //     {!isKeyboardVisible?styles.scannerOnKeyboard: styles.cameraContainerStyle}
                onRead={onRead}
              />
            ) : (
              _renderNonPermission()
            )}
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            {performerScannedObj && (
              <>
                <View style={styles.buttonCon}>
                  <View style={styles.popUpCon}>
                    {popUp && (
                      <PopUP
                        onContinuePress={() => setPopUp(false)}
                        onOneByOnePress={() => setPopUp(false)}
                      />
                    )}
                  </View>
                  <Button
                    icon
                    matrix
                    title={Strings.SIGN_IN}
                    onPress={onSignInPress}
                    onIconPress={() => setPopUp(!popUp)}
                  />
                  {/* <Button
                    icon
                    title={Strings.Send_To_Lunch}
                    matrix
                    onIconPress={() => setPopUp(!popUp)}
                  /> */}
                  <Button
                    onPress={onWrapPress}
                    icon
                    title={Strings.WRAP}
                    matrix
                    wrap
                    onIconPress={() => setPopUp(!popUp)}
                  />
                </View>

                <BottomTab
                  showModal
                  isSelected={isSelected}
                  onPress={(res: any) => onTabPress(res)}
                />
              </>
            )}

            {camStatus === 2 && isKeyboardVisible && (
              <>
                <View
                  style={[
                    styles.scanner,
                    {
                      borderColor: boxColor
                        ? Colors.GREEN.default
                        : Colors.RED.default,
                      bottom: isKeyboardVisible
                        ? hp(33.5)
                        : Platform.OS === 'ios'
                        ? height > 667
                          ? hp(43.5)
                          : hp(48.5)
                        : hp(11.5),
                    },
                  ]}
                />
              </>
            )}
          </KeyboardAvoidingView>

          <SafeAreaView />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType='fade' transparent={true} visible={showTabModal}>
        <View style={mStyles.transparentView}>
          {isSelected === Strings.NDB && (
            <View style={mStyles.switchMainCon}>
              <SafeAreaView />
              <View style={mStyles.travellingHeaderCon}>
                <Text style={mStyles.travellingText}>{Strings.NDB}</Text>
                <TouchableOpacity
                  onPress={() => setShowTabModal(false)}
                  style={mStyles.icCrossCon}
                >
                  <Image
                    style={mStyles.icCross}
                    resizeMode={'contain'}
                    source={require('../../assets/icons/ic_cross.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={mStyles.switchTextCon}>
                <Switch
                  style={mStyles.switchCon}
                  trackColor={{
                    false: Colors.GREY.opacity26,
                    true: Colors.GREEN.default,
                  }}
                  thumbColor={ndbSwitch ? '#fff' : '#fff'}
                  ios_backgroundColor={Colors.GREY.opacity26}
                  onValueChange={onNDBSwitchPress}
                  value={ndbSwitch}
                />
              </View>
            </View>
          )}
          {isSelected === Strings.Rental && (
            <View style={mStyles.switchMainCon}>
              <SafeAreaView />
              <View style={mStyles.travellingHeaderCon}>
                <Text style={mStyles.travellingText}>{Strings.Rental}</Text>
                <TouchableOpacity
                  onPress={() => setShowTabModal(false)}
                  style={mStyles.icCrossCon}
                >
                  <Image
                    style={mStyles.icCross}
                    resizeMode={'contain'}
                    source={require('../../assets/icons/ic_cross.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={mStyles.switchTextCon}>
                <Switch
                  style={mStyles.switchCon}
                  trackColor={{
                    false: Colors.GREY.opacity26,
                    true: Colors.GREEN.default,
                  }}
                  thumbColor={rentalSwitch ? '#fff' : '#fff'}
                  ios_backgroundColor={Colors.GREY.opacity26}
                  onValueChange={onRentalSwitchPress}
                  value={rentalSwitch}
                />
              </View>
            </View>
          )}

          {isSelected === Strings.Travel_Time && (
            <>
              <SafeAreaView />
              <KeyboardAvoidingView
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -5}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={[mStyles.travelTimeCon]}
              >
                <View style={mStyles.travellingHeaderCon}>
                  <Text style={mStyles.travellingText}>
                    {Strings.Travelling}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setShowTabModal(false)}
                    style={mStyles.icCrossCon}
                  >
                    <Image
                      style={mStyles.icCross}
                      resizeMode={'contain'}
                      source={require('../../assets/icons/ic_cross.png')}
                    />
                  </TouchableOpacity>
                </View>

                <View style={mStyles.textFieldCon}>
                  <Text style={mStyles.bulletText}>{`${Strings.Time}:`}</Text>
                  <CustomInputField
                    keyboardType='numeric'
                    flex
                    placeHolder='Enter Time'
                    value={timeValue}
                    onChangeText={(t: any) => setTimeVlaue(t)}
                  />
                </View>

                <View style={mStyles.textFieldCon}>
                  <Text style={mStyles.bulletText}>{Strings.Distance_KM}</Text>
                  <CustomInputField
                    keyboardType='numeric'
                    flex
                    placeHolder='Enter Distance'
                    value={distanceValue}
                    onChangeText={(d: string) => setDistanceValue(d)}
                  />
                </View>

                <View style={mStyles.travellingButtonCon}>
                  <TravelTimeButton
                    onPress={validateTravellingTab}
                    title='Save'
                  />
                  <TravelTimeButton
                    onPress={() => setShowTabModal(false)}
                    title='Cancel'
                  />
                </View>
              </KeyboardAvoidingView>
            </>
          )}

          {/* {isSelected === Strings.Lunch && (
            <>
              <SafeAreaView />
              <KeyboardAvoidingView
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -5}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={[styles.lunchCon]}
              >
                <View style={styles.travellingHeaderCon}>
                  <Text style={styles.travellingText}>{Strings.Lunch}</Text>
                  <TouchableOpacity
                    onPress={() => setShowTabModal(false)}
                    style={styles.icCrossCon}
                  >
                    <Image
                      style={styles.icCross}
                      resizeMode={'contain'}
                      source={require('../../assets/icons/ic_cross.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginTop: hp(2),
                    flex: 1,
                    marginHorizontal: wp(4),
                    justifyContent: 'center',
                  }}
                >
                  <CustomInputField
                    placeHolder='Lunch'
                    value={lunchValue}
                    onChangeText={(l: string) => setlunchValue(l)}
                  />
                </View>
                <View style={styles.travellingButtonCon}>
                  <TravelTimeButton onPress={validateLunchTab} title='Save' />
                  <TravelTimeButton
                    onPress={() => setShowTabModal(false)}
                    title='Cancel'
                  />
                </View>
              </KeyboardAvoidingView>
            </>
          )} */}
        </View>
        {isLoading && (
          <View style={styles.loadingView}>
            <ActivityIndicator color={Colors.GREEN.default} size={'large'} />
          </View>
        )}
      </Modal>
      {isLoading && (
        <View style={styles.loadingView}>
          <ActivityIndicator color={Colors.GREEN.default} size={'large'} />
        </View>
      )}
    </>
  );
};

export default QrCOde;
