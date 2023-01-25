import React, {FC, useRef, useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Button, Header} from '../../components';
import ProfileAttributes from './components/profileAttribute';
import {Colors, Strings} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropdownPicker from '../../components/DropdownPicker';
import {
  profileGenderTypes,
  profileHeightFeet,
  profileHeightInches,
} from '../../constants/Strings';
import PhoneInputField from '../../components/PhoneInputField';
import {isValidPhoneNumber} from 'libphonenumber-js';
import {validateEmail} from '../../store/util';
import {useNetInfo} from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';
import {profileUpdateRequest} from '../../store/actions';
import {useSelector} from 'react-redux';
import moment from 'moment';
interface ProfileExpanded {
  navigation?: any;
  route?: any;
}
const PerformerProfileExpand: FC<ProfileExpanded> = (
  props: ProfileExpanded
) => {
  const {navigation, route} = props;
  console.log('00000000>', route?.params);
  const socialInfo = route?.params.performerData;
  const genralInfo = route?.params?.performerData?.bgPerformer;
  const profileData = route?.params?.userData;
  //route.params.userData?.performerId;
  console.log('profileData---->', genralInfo?.gender);

  const getAge = (dateString: string) => {
    console.log('dateString----->', dateString);
    return moment().diff(dateString, 'years').toString();
    // var ageInMilliseconds = new Date() - new Date(dateString);
    // return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
    // console.log('dateString----->', dateString);
  };
  const [profileDetails, setProfileDetails] = useState<{
    gender: string;
    age: string;
    weight: string;
    feet: string;
    inches: string;
    city: string;
    phone: string;
    email: string;
    profilePicUrl: string;
  }>({
    gender: genralInfo?.gender ? genralInfo.gender : '',
    age: genralInfo?.dateOfBirth ? getAge(genralInfo.dateOfBirth) : '',
    weight: genralInfo?.weight ? genralInfo.weight : '',
    feet: genralInfo?.height[0] ? genralInfo.height[0] : '',
    inches: genralInfo?.height.slice(1) ? genralInfo.height.slice(1) : '',
    city: socialInfo?.address ? socialInfo.address : '',
    phone: socialInfo?.phoneNo ? socialInfo.phoneNo : '',
    email: socialInfo?.email ? socialInfo.email : '',
    profilePicUrl: socialInfo?.profilePicUrl ? socialInfo.profilePicUrl : '',
  });
  const AdjustProfileDetails = (value: string, name: string) => {
    setProfileDetails({
      ...profileDetails,
      [name]: value,
    });
  };
  const [menu, setMenu] = useState<boolean>(false);
  const [phoneRef, setPhoneRef] = useState<any>(useRef(null));
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [phoneValid, setPhoneValid] = useState<boolean>(true);
  const [phonestring, setphonestring] = useState<string>(
    socialInfo?.phoneNo ? socialInfo?.phoneNo : ''
  );
  const netInfo = useNetInfo();
  const dispatch = useDispatch();
  useEffect(() => {
    if (phoneRef?.current) {
      phoneRef?.current?.setValue(phonestring);
    }
  }, [phoneRef?.current]);
  const {isLoading, userData} = useSelector(
    (state: any) => state.reducer.profile
  );
  console.log(isLoading, userData);
  const validatePhoneNumber = (num: any, countryCode: any) => {
    if (num) {
      return isValidPhoneNumber(num, countryCode);
    } else {
      return false;
    }
  };
  const validateNumber = (text: string) => {
    let num = phoneRef?.current?.getValue();
    let countryCode = phoneRef?.current?.getISOCode()?.toUpperCase();
    if (num != undefined || num != null) {
      AdjustProfileDetails(num, 'phone');
    } else {
      AdjustProfileDetails(text, 'phone');
    }
    console.log(
      '......',
      validatePhoneNumber(num, countryCode),
      num,
      countryCode
    );
    return validatePhoneNumber(num, countryCode);
  };
  const validateProfileData = () => {
    let error = '';
    console.log(profileDetails);
    if (profileDetails.gender === '') {
      error = 'Gender required';
    } else if (profileDetails.age.trim().length <= 0) {
      error = 'Age required';
    } else if (profileDetails.weight.trim().length <= 0) {
      error = 'weight required';
    } else if (profileDetails.feet === '') {
      error = 'height feet required';
    } else if (profileDetails.inches === '') {
      error = 'Height inches required';
    } else if (profileDetails.inches == '0' && profileDetails.feet === '0') {
      error = 'Height required';
    } else if (profileDetails.city.trim().length <= 0) {
      error = 'City Name required';
    } else if (!phoneValid) {
      error = 'Phone number formate is not valid';
    } else if (validateEmail(profileDetails.email) === null) {
      error = 'Please enter valid email';
    }
    if (error.length > 0) {
      return error;
    } else {
      setErrorMsg('');
      return true;
    }
  };
  const renderLoader = () => {
    if (isLoading) {
      return (
        <View style={styles.bottomIndicator}>
          <ActivityIndicator
            // style={styles.bottomIndicator}
            color={Colors.GREEN.default}
            size={'large'}
          />
        </View>
      );
    }
  };

  const checkNetConnection = () => {
    if (netInfo.isConnected) {
    } else {
      Alert.alert('', 'Check your network connectivity!');
    }
  };
  const getname = () => {
    if (socialInfo) {
      let firstname = socialInfo?.firstName ? socialInfo.firstName : ' ';
      let secondname =
        socialInfo?.firstName + socialInfo?.lastName
          ? socialInfo.lastName
          : ' ';

      return firstname + ' ' + secondname;
    } else {
      return ' ';
    }
  };
  const updateProfileRequest = () => {
    //  console.log('=======>profileData', profileData);
    checkNetConnection();
    Keyboard.dismiss();
    let dataCheck = validateProfileData();
    if (dataCheck !== true) {
      Alert.alert('', dataCheck);
      return;
    }
    Alert.alert('Under Development');
    // 1st Method
    // Object.keys(profileData).forEach((key) => {
    //   if (key == 'address') {
    //     profileData[key] = profileDetails.city;
    //   } else if (key == 'email') {
    //     profileData[key] = profileDetails.email;
    //   } else if (key == 'phoneNo') {
    //     profileData[key] = profileDetails.phone;
    //   }
    // });
    // console.log('..........', profileData);
    // //2nd Method
    // // const params = {
    // //   ...profileData,
    // //   address: profileDetails.city,
    // //   email: profileDetails.email,
    // //   phoneNo: profileDetails.phone,
    // // };
    // console.log('profileData', profileData);
    // dispatch(
    //   profileUpdateRequest(profileData, (res: any) => {
    //     if (res.status === -1) {
    //       // Alert.alert(res.error)
    //       console.log('error in profileUpdateRequest');
    //     } else {
    //       navigation.navigate('Profile');
    //     }
    //   })
    // );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        leftIconPress={() => navigation.pop()}
        leftIcon={require('../../assets/icons/ic_arrow_left.png')}
        title={getname()}
        // rightIcon={require('../../assets/icons/ic_dot_menu.png')}
        // rightIconPress={() => setMenu(true)}
        visible={menu}
        onSidePress={() => setMenu(false)}
      />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps='handled'
        extraHeight={-90}
      >
        <View style={styles.profileHeader}>
          <Text style={styles.profileName}>{getname()}</Text>
        </View>

        <View style={styles.imgAbsoluteCon}>
          <View style={styles.profileImageCon}>
            {profileDetails?.profilePicUrl ? (
              <Image
                style={styles.profileImage}
                source={{
                  uri: profileDetails.profilePicUrl.replace('http', 'https'),
                }}
              />
            ) : (
              <Image
                style={styles.profileImage}
                source={require('../../assets/images/profileScreen_img.png')}
              />
            )}
          </View>
        </View>
        <View style={styles.attributesCon}>
          <DropdownPicker
            value={profileDetails.gender}
            pickertitle={Strings.Gender}
            title='Select Gender'
            name='gender'
            onValueChange={(val: string) => {
              setProfileDetails({
                ...profileDetails,
                gender: val,
              });
            }}
            items={profileGenderTypes}
          ></DropdownPicker>
          <ProfileAttributes
            attributeName={Strings.Age}
            name='age'
            value={profileDetails.age}
            onChangeText={AdjustProfileDetails}
            keyboardType='numeric'
            maxLength={3}
          />

          <ProfileAttributes
            attributeName={Strings.Weight}
            value={profileDetails.weight}
            name='weight'
            onChangeText={AdjustProfileDetails}
            keyboardType='numeric'
            maxLength={3}
          />
          <View style={styles.dropDownCon}>
            <View style={{width: '48%'}}>
              <DropdownPicker
                value={profileDetails.feet}
                pickertitle={Strings.Height}
                title='Feet'
                name='feet'
                onValueChange={(val: string) => {
                  setProfileDetails({
                    ...profileDetails,
                    feet: val,
                  });
                }}
                items={profileHeightFeet}
              ></DropdownPicker>
            </View>

            <View style={{width: '48%'}}>
              <DropdownPicker
                value={profileDetails.inches}
                pickertitle=' '
                title='Inches'
                name='inches'
                onValueChange={(val: string) => {
                  setProfileDetails({
                    ...profileDetails,
                    inches: val,
                  });
                }}
                items={profileHeightInches}
              ></DropdownPicker>
            </View>
          </View>
          <ProfileAttributes
            attributeName={Strings.City}
            value={profileDetails.city}
            name='city'
            onChangeText={AdjustProfileDetails}
          />
          <PhoneInputField
            //   value={profileDetails.phone}
            attributeName={Strings.Phone}
            onRef={setPhoneRef}
            label={profileDetails.phone}
            returnKeyType={'next'}
            placeholder='Enter Text '
            onChangeText={(text: string) => {
              console.log(text);
              //for country specific phone number validation
              if (validateNumber(text)) {
                setPhoneValid(true);
              } else {
                setPhoneValid(false);
              }
              setphonestring(text);
            }}
          />
          <ProfileAttributes
            attributeName={Strings.Email}
            value={profileDetails.email}
            name='email'
            onChangeText={AdjustProfileDetails}
          />
        </View>
        <View style={styles.buttonCon}>
          <Button
            title={Strings.Update}
            extraLarge
            onPress={updateProfileRequest}
          />
        </View>
      </KeyboardAwareScrollView>

      <SafeAreaView />
      {renderLoader()}
    </View>
  );
};

export default PerformerProfileExpand;
