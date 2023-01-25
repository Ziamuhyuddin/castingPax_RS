import React, {FC, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Keyboard,
  Modal,
  ScrollView,
  Switch,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Colors, Strings, sectionData, hp, wp} from '../../constants';
import MatrixHeader from './components/matrixHeader';
import {
  BottomTab,
  Button,
  ContentHeader,
  TravelTimeButton,
  CustomInputField,
} from '../../components';
import SectionHeader from './components/sectionHeader';
import {useDispatch, useSelector} from 'react-redux';

import {
  matrixUpdateTime,
  matrixPerformerUpdate,
  matrixPerformerDataUpdate,
} from '../../store/actions/matrix';
import {validateLunchField, validateTravelTab} from '../../store/util';

interface MatrixExpandedAtom {
  navigation?: any;
  route?: any;
}

const MatrixExpandedAtom: FC<MatrixExpandedAtom> = (
  props: MatrixExpandedAtom
) => {
  const {navigation, route} = props;
  const dispatch = useDispatch();

  const {isLoading, matrixPerformer} = useSelector(
    (state: any) => state.reducer.matrix
  );

  const {id, thumbImage, dayTitle, episode, day, coordinator, BG, matrixItem} =
    route.params;

  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(true);
  const [isMainMenu, setIsMainMenu] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string>('');
  const [isTabVisible, setIsTabVisible] = useState<boolean>(false);
  const [showTabModal, setShowTabModal] = useState<boolean>(false);
  const [ndbSwitch, setNdbSwitch] = useState<boolean>(false);
  const [rentalSwitch, setRentalSwitch] = useState<boolean>(false);
  const [travellingSwitch, setTravellingSwitch] = useState<number>(1);
  const [timeValue, setTimeVlaue] = useState<any>('');
  const [distanceValue, setDistanceValue] = useState<any>('');
  const [lunchValue, setlunchValue] = useState<any>('');
  const [atmosSelected, setAtmosSelected] = useState<any>([]);
  const atmos = matrixItem?.atoms;

  // console.log('This is the Matrix-Atmos as params ==>:', matrixItem);

  const onNDBSwitchPress = () => {
    let atmoses = atmosSelected.map((atom: any) => atom.id);
    console.log(
      '🚀 ~ file: index.tsx ~ line 107 ~ onNDBSwitchPress ~ atmoses',
      atmoses
    );

    let payload: any = {
      workingDayId: matrixItem?.id,
      atomsId: atmoses,
      obj: {
        NDB: !ndbSwitch,
      },
    };

    dispatch(matrixPerformerDataUpdate(payload));

    setNdbSwitch(!ndbSwitch);
  };

  const onRentalSwitchPress = () => {
    let atmoses = atmosSelected.map((atom: any) => atom.id);
    console.log(
      '🚀 ~ file: index.tsx ~ line 108 ~ onRentalSwitchPress ~ atmoses',
      atmoses
    );

    let payload: any = {
      workingDayId: matrixItem?.id,
      atomsId: atmoses,
      obj: {
        isRental: !rentalSwitch,
      },
    };

    dispatch(matrixPerformerDataUpdate(payload));

    setRentalSwitch(!rentalSwitch);
  };

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

  const atmosPress = (item: any) => {
    navigation.navigate('MatrixPerformerExpanded', {
      matrixItem: matrixItem,
      atmosId: item.id,
    });
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

  const validateLunch = () => {
    if (lunchValue == '') {
      Alert.alert('', 'Lunch field is empty');
      return false;
    } else if (validateLunchField(lunchValue) === null) {
      Alert.alert('', 'Enter valid type');
      return false;
    } else {
      return true;
    }
  };

  const validateTravellingTab = () => {
    if (validateTIme()) {
      let atmoses = atmosSelected.map((atom: any) => atom.id);
      console.log(
        '🚀 ~ file: index.tsx ~ line 168 ~ validateTravellingTab ~ atmoses',
        atmoses
      );

      let payload: any = {
        workingDayId: matrixItem?.id,
        atomsId: atmoses,
        obj: {
          mileage: timeValue,
          mileageType: distanceValue,
        },
      };

      dispatch(matrixPerformerDataUpdate(payload));

      // setShowTabModal(false);
    }
  };

  const validateLunchTab = () => {
    if (validateLunch()) {
      let atmoses = atmosSelected.map((atom: any) => atom.id);
      console.log(
        '🚀 ~ file: index.tsx ~ line 183 ~ validateLunchTab ~ atmoses',
        atmoses
      );

      let payload: any = {
        workingDayId: matrixItem?.id,
        atomsId: atmoses,
        obj: {
          lunch: lunchValue,
        },
      };

      dispatch(matrixPerformerDataUpdate(payload));

      // setShowTabModal(false);
    }
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

  const atmosCheckBoxPressed = (item: any) => {
    let temp: any = atmosSelected;
    let ind = temp.findIndex((i: any) => {
      return i.id == item.id;
    });
    if (ind !== -1) {
      temp.splice(ind, 1);
    } else {
      temp.push(item);
    }
    console.log(
      '🚀 ~ file: sectionHeader.tsx ~ line 200 ~ atmosCheckBoxPressed ~ temp',
      temp
    );

    console.log('bottom render => ', temp.length);
    setIsTabVisible(temp.length > 0);
    setAtmosSelected(temp);
  };

  const onQrIconPress = () => {
    let atmoses = atmosSelected.map((atom: any) => atom.id);

    if (atmosSelected.length > 0) {
      navigation.navigate('QR', {
        atmosesIds: atmoses,
        matrixId: matrixItem?.id,
      });
    } else {
      Alert.alert('', 'Please Select Atmos');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView />

        <MatrixHeader
          visible={isMainMenu}
          onArrowPress={() => navigation.goBack()}
          onSearchPress={() => navigation.navigate('SearchExpanded')}
          dotIconPress={() => setIsMainMenu(true)}
          onSidePress={() => setIsMainMenu(false)}
        />
        <View style={styles.topMargin} />

        <ContentHeader
          showThumbnail={thumbImage}
          dayName={dayTitle}
          onBarcodePress={onQrIconPress}
          invited={`${matrixItem?.bgPerformerCount}/${
            matrixItem?.totalBgPerformers < 1 || 'undefined' || null
              ? '0'
              : matrixItem?.totalBgPerformers
          }`}
          matrixItem={matrixItem}
          day={day}
          coordinator={coordinator}
          BG={matrixItem?.bgPerformerCount}
        />

        <View style={styles.screenPadding}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {atmos.map((item: any, index: number) => {
              return (
                <View key={item.id}>
                  <SectionHeader
                    atmosPress={() => atmosPress(item)}
                    item={item}
                    atmosCheckBoxPress={() => atmosCheckBoxPressed(item)}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.buttonCon}>
          <Button title={Strings.SIGN_IN} matrix />
          <Button title={Strings.Send_To_Lunch} matrix />
          {/* <Button title={Strings.WRAP} wrap matrix /> */}
        </View>

        {isTabVisible && (
          <BottomTab
            isLunch
            isSelected={isSelected}
            onPress={(res: any) => onTabPress(res)}
          />
        )}

        <Modal animationType='fade' transparent={true} visible={showTabModal}>
          {/* <TouchableWithoutFeedback onPress={() => setShowTabModal(false)}>
            <View style={styles.transparentView} />
          </TouchableWithoutFeedback> */}
          <View style={styles.transparentView}>
            {isSelected === Strings.NDB && (
              <View style={styles.switchMainCon}>
                <SafeAreaView />
                <View style={styles.travellingHeaderCon}>
                  <Text style={styles.travellingText}>{Strings.NDB}</Text>
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
                <View style={styles.switchTextCon}>
                  <Switch
                    style={styles.switchCon}
                    trackColor={{
                      false: Colors.GREY.opacity26,
                      true: Colors.GREEN.default,
                    }}
                    thumbColor={ndbSwitch ? '#fff' : '#fff'}
                    ios_backgroundColor={Colors.GREY.opacity26}
                    onValueChange={onNDBSwitchPress}
                    value={ndbSwitch}
                  />
                  {/* <Text style={styles.tabButtonsText}>{Strings.NDB}</Text> */}
                </View>
              </View>
            )}
            {isSelected === Strings.Rental && (
              <View style={styles.switchMainCon}>
                <SafeAreaView />
                <View style={styles.travellingHeaderCon}>
                  <Text style={styles.travellingText}>{Strings.Rental}</Text>
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
                <View style={styles.switchTextCon}>
                  <Switch
                    style={styles.switchCon}
                    trackColor={{
                      false: Colors.GREY.opacity26,
                      true: Colors.GREEN.default,
                    }}
                    thumbColor={rentalSwitch ? '#fff' : '#fff'}
                    ios_backgroundColor={Colors.GREY.opacity26}
                    onValueChange={onRentalSwitchPress}
                    value={rentalSwitch}
                  />
                  {/* <Text style={styles.tabButtonsText}>
                    {isSelected === Strings.NDB ? Strings.NDB : Strings.Rental}
                  </Text> */}
                </View>
              </View>
            )}

            {isSelected === Strings.Travel_Time && (
              <>
                <SafeAreaView />
                <KeyboardAvoidingView
                  keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -5}
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={[styles.travelTimeCon]}
                >
                  <View style={styles.travellingHeaderCon}>
                    <Text style={styles.travellingText}>
                      {Strings.Travelling}
                    </Text>
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

                  {/* <View style={styles.switchButtonsCon}>
                    <TouchableOpacity
                      onPress={() => setTravellingSwitch(1)}
                      style={[
                        styles.timeButton,
                        {
                          backgroundColor:
                            travellingSwitch === 1
                              ? Colors.GREEN.primary
                              : "white",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.timeText,
                          {
                            color:
                              travellingSwitch === 1
                                ? Colors.WHITE.default
                                : Colors.GREEN.primary,
                          },
                        ]}
                      >
                        {Strings.Time}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setTravellingSwitch(2)}
                      style={[
                        styles.distanceButton,
                        {
                          backgroundColor:
                            travellingSwitch === 2
                              ? Colors.GREEN.primary
                              : "white",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.timeText,
                          {
                            color:
                              travellingSwitch === 2
                                ? Colors.WHITE.default
                                : Colors.GREEN.primary,
                          },
                        ]}
                      >
                        {Strings.Distance}
                      </Text>
                    </TouchableOpacity>
                  </View> */}

                  {/* {travellingSwitch === 1 ? ( */}
                  <View style={styles.textFieldCon}>
                    <Text style={styles.bulletText}>{`${Strings.Time}:`}</Text>
                    <CustomInputField
                      keyboardType='numeric'
                      flex
                      placeHolder='Enter Time'
                      value={timeValue}
                      onChangeText={(t: any) => setTimeVlaue(t)}
                    />
                  </View>
                  {/* ) : ( */}
                  <View style={styles.textFieldCon}>
                    <Text style={styles.bulletText}>{Strings.Distance_KM}</Text>
                    <CustomInputField
                      keyboardType='numeric'
                      flex
                      placeHolder='Enter Distance'
                      value={distanceValue}
                      onChangeText={(d: string) => setDistanceValue(d)}
                    />
                  </View>
                  {/* )} */}
                  <View style={styles.travellingButtonCon}>
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

            {isSelected === Strings.Lunch && (
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
            )}
          </View>
          {isLoading && (
            <View style={styles.loadingView}>
              <ActivityIndicator color={Colors.GREEN.default} size={'large'} />
            </View>
          )}
        </Modal>

        <SafeAreaView />
      </View>
    </>
  );
};

export default MatrixExpandedAtom;
