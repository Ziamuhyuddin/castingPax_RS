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
interface ProfileExpanded {
  navigation?: any;
  route?: any;
}
const ProfileExpanded: FC<ProfileExpanded> = (props: ProfileExpanded) => {
  const {navigation, route} = props;
  const profileData = useSelector(
    (state: any) => state?.reducer?.profile?.userData?.data
  );

  const [profileDetails, setProfileDetails] = useState<{
    gender: string;
    age: string;
    weight: string;
    feet: string;
    inches: string;
    city: string;
    phone: string;
    email: string;
  }>({
    gender: '',
    age: '',
    weight: '',
    feet: '',
    inches: '',
    city: profileData?.address,
    phone: profileData?.phoneNo,
    email: profileData?.email,
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
  const [phonestring, setphonestring] = useState<string>(profileData?.phoneNo);
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
      error = 'Valid Phone number required';
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
  const renderFooter = () => {
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
    if (profileData) {
      console.log(profileData?.firstName, profileData.lastName);
      let firstname = profileData?.firstName ? profileData.firstName : ' ';
      let secondname =
        userData?.firstName + profileData?.lastName
          ? profileData.lastName
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

    // 1st Method
    if (profileData) {
      Object.keys(profileData).forEach((key) => {
        if (key == 'address') {
          profileData[key] = profileDetails.city;
        } else if (key == 'email') {
          profileData[key] = profileDetails.email;
        } else if (key == 'phoneNo') {
          profileData[key] = profileDetails.phone;
        }
      });
      console.log('..........', profileData);
    }

    //2nd Method
    // const params = {
    //   ...profileData,
    //   address: profileDetails.city,
    //   email: profileDetails.email,
    //   phoneNo: profileDetails.phone,
    // };
    console.log('profileData', profileData);
    dispatch(
      profileUpdateRequest(profileData, (res: any) => {
        if (res.status === -1) {
          // Alert.alert(res.error)
          Alert.alert('Not able to update profile');
          console.log('error in profileUpdateRequest');
        } else {
          navigation.navigate('Profile');
        }
      })
    );
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
            {profileData?.profilePicUrl ? (
              <Image
                style={styles.profileImage}
                source={{
                  uri: profileData.profilePicUrl.replace('http', 'https'),
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
      {renderFooter()}
    </View>
  );
};

export default ProfileExpanded;
