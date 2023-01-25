import React, {FC, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Header} from '../../components';
import Socials from './components/socials';
import ProfileInfo from './components/profileInfo';
import ProfileMenu from './components/profileMenu';
import {useDispatch} from 'react-redux';
import {
  pdfPerformerProfileRequest,
  performerProfileRequest,
  savePerformerProfileRequest,
} from '../../store/actions';
import {useSelector} from 'react-redux';
import {Colors} from '../../constants';
import moment from 'moment';
import Share from 'react-native-share';
import RNPrint from 'react-native-print';
import {
  removePerformerProfileRequest,
  reportPerformerProfileRequest,
} from '../../store/actions/performerprofile';
interface Profile {
  navigation?: any;
  route?: any;
}

const PerformerProfile: FC<Profile> = (props: Profile) => {
  const {navigation, route} = props;
  const [isProfileMenu, setIsProfileMenu] = useState<boolean>(false);
  const userData = route.params.perforMerItem;
  const {isLoading, performerData} = useSelector(
    (state: any) => state.reducer.performerProfile
  );
  console.log('performerData?.data', performerData?.data?.id);
  const socialInfo = performerData?.data;
  const genralInfo = performerData?.data?.bgPerformer;
  const dispatch = useDispatch();
  const {pdfLoader} = useSelector((state: any) => state?.reducer?.profile);
  const performerProfile = useSelector(
    (state: any) => state?.reducer?.performerProfile
  );
  console.log('sideMenuLoader', performerProfile?.sideMenuLoader);
  useEffect(() => {
    if (userData?.performerId || route.params?.fromSearch) {
      let params = {
        userId: route.params?.fromSearch ? userData?.id : userData?.performerId,
      };
      dispatch(
        performerProfileRequest(params, (res: any) => {
          if (res.status === -1) {
            // Alert.alert(res.error)
            console.log('error in getUser Data');
          } else {
            console.log('in back Call');
          }
        })
      );
    } else {
      Alert.alert('Error');
    }
  }, []);
  const getname = () => {
    if (socialInfo) {
      // console.log(socialInfo?.firstName, socialInfo.lastName);
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
  const renderProfileLoader = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          style={[styles.profileLoader]}
          color={Colors.GREEN.default}
          size={'large'}
        />
      );
    }
  };
  const getheight = (currentheight: string) => {
    console.log(currentheight[0]);
    return currentheight[0] + "' " + currentheight.slice(1) + "''";
  };
  const getAge = (dateString: string) => {
    return moment().diff(dateString, 'years');
  };
  const onSharePress = () => {
    const params = {
      type: 'downloads',
      ids: [socialInfo?.id],
      email: socialInfo?.email,
    };
    dispatch(
      pdfPerformerProfileRequest(params, async (res: any) => {
        if (res.status === -1) {
          //Alert.alert(res.error);
          console.log('error in GET USER PDF ');
        } else {
          // setIsProfileMenu(false);
          if (res?.result[0]?.content) {
            const options = {
              message: res?.result[0]?.filename
                ? res?.result[0]?.filename
                : 'CastingPAX',
              url: `data:application/pdf;base64,${res?.result[0]?.content}`,
            };
            console.log('in PDF performer back Call', res?.result[0]);
            try {
              const shareResponse = await Share.open(options);
              console.log('shareResponse--->', shareResponse);
            } catch (error: any) {
              // Alert.alert(error?.message);
              console.log('rejection in share pdf', error.message);
            }
          } else {
            Alert.alert('No pdf found against user');
          }
        }
      })
    );
  };
  const onPrintPress = async () => {
    setIsProfileMenu(false);
    try {
      await RNPrint.print({
        filePath: 'https://graduateland.com/api/v2/users/jesper/cv',
      });
    } catch (error) {
      Alert.alert('Unable to print the file');
      console.log(error);
    }
  };
  const onSavePress = () => {
    // const params = {
    //   id: '61a079df718f641623d5c043',
    // };
    // dispatch(
    //   savePerformerProfileRequest(params, (res: any) => {
    //     if (res.status === -1) {
    //       //Alert.alert(res.error);
    //       console.log('error in GET save performer profile ');
    //     } else {
    //       console.log('in save performer back Call');
    //     }
    //   })
    // );
  };
  const onRemovePress = () => {
    const params = {
      id: '61a079df718f641623d5c043',
    };
    dispatch(
      removePerformerProfileRequest(params, (res: any) => {
        if (res.status === -1) {
          //Alert.alert(res.error);
          console.log('error in GET save performer profile ');
        } else {
          console.log('in save performer back Call');
        }
      })
    );
  };
  const onReportPress = () => {
    const params = {
      id: '61a079df718f641623d5c043',
    };
    dispatch(
      reportPerformerProfileRequest(params, (res: any) => {
        if (res.status === -1) {
          //Alert.alert(res.error);
          console.log('error in GET save performer profile ');
        } else {
          console.log('in save performer back Call');
        }
      })
    );
  };
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView />
        <Header
          leftIconPress={() => navigation.pop()}
          leftIcon={require('../../assets/icons/ic_arrow_left.png')}
          title={getname()}
          // rightIconVisibility={socialInfo?.id ? true : false}
          rightIcon={require('../../assets/icons/ic_dot_menu.png')}
          rightIconPress={() => setIsProfileMenu(true)}
          hideShareAndPDF
          rightIconHorizental
        />
        <View style={styles.profileHeader}>
          <Text style={styles.profileName} numberOfLines={2}>
            {getname()}
          </Text>
          {genralInfo && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PerformerProfileExpand', {
                  performerData: performerData?.data ? performerData?.data : {},
                })
              }
            >
              <Image
                style={styles.icEdit}
                source={require('../../assets/icons/ic_edit.png')}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.imgAbsoluteCon}>
          <View style={styles.profileImageCon}>
            {socialInfo?.profilePicUrl ? (
              <Image
                style={styles.profileImage}
                source={{
                  uri: socialInfo.profilePicUrl.replace('http', 'https'),
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
        <View style={styles.socialCon}>
          <Socials
            icon={require('../../assets/icons/ic_mail.png')}
            title={socialInfo?.email ? socialInfo?.email : ' '}
          />
          <Socials
            icon={require('../../assets/icons/ic_phone.png')}
            title={socialInfo?.phoneNo ? socialInfo?.phoneNo : ' '}
          />
        </View>
        <View style={styles.attributeParentCon}>
          <View style={styles.attributesCon}>
            <ProfileInfo
              icon={require('../../assets/icons/ic_gender.png')}
              info={'Gender'}
              category={genralInfo?.gender ? genralInfo.gender : ' '}
            />
            <ProfileInfo
              icon={require('../../assets/icons/ic_role.png')}
              info={'Age'}
              category={
                genralInfo?.dateOfBirth ? getAge(genralInfo?.dateOfBirth) : ' '
              }
            />
          </View>
          <View style={styles.attributesCon}>
            <ProfileInfo
              icon={require('../../assets/icons/ic_weight.png')}
              info={'Weight'}
              category={genralInfo?.weight ? genralInfo.weight : ' '}
            />
            <ProfileInfo
              icon={require('../../assets/icons/ic_height.png')}
              info={'Height'}
              category={genralInfo?.height ? getheight(genralInfo.height) : ' '}
            />
          </View>

          <ProfileInfo
            largeIcon
            icon={require('../../assets/icons/ic_city.png')}
            info={'City'}
            category={socialInfo?.address ? socialInfo.address : ' '}
            //category={'Toronto'}
          />
        </View>
        <ProfileMenu
          onSharePress={onSharePress}
          onPrintPress={onPrintPress}
          onSavePress={onSavePress}
          onRemovePress={onRemovePress}
          onReportPress={onReportPress}
          visible={isProfileMenu}
          onSidePress={() => setIsProfileMenu(false)}
          isloading={performerProfile?.sideMenuLoader} //sideMenuLoader
        />
      </View>
      {renderProfileLoader()}
    </>
  );
};

export default PerformerProfile;
