import React, {FC, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import {Header} from '../../components';
import Socials from './components/socials';
import ProfileInfo from './components/profileInfo';
import ProfileMenu from './components/profileMenu';
import {useSelector} from 'react-redux';
import Share from 'react-native-share';
import {getProfilePDF} from '../../store/actions/profile';
import {useDispatch} from 'react-redux';
import RNPrint from 'react-native-print';
import {IS_IPHONE} from '../../constants';
interface Profile {
  navigation?: any;
  route?: any;
}

const Profile: FC<Profile> = (props: Profile) => {
  const {navigation, route} = props;
  const [isProfileMenu, setIsProfileMenu] = useState<boolean>(false);
  const userData = useSelector(
    (state: any) => state?.reducer?.profile?.userData?.data
  );
  console.log('userData =======>', userData);
  const dispatch = useDispatch();
  const {pdfLoader} = useSelector((state: any) => state?.reducer?.profile);

  const onSharePress = async () => {
    // const params = {
    //   type: 'downloads',
    //   ids: [userData?.id],
    //   email: userData?.email,
    // };
    const params = {
      type: 'downloads',
      ids: ['61a079df718f641623d5c043'],
      email: 'performer1@yopmail.com',
    };
    const shareOptions = {
      message: 'CastingPAX',
      url: 'data:application/pdf;base64,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YmVnaW5jbWFwCi9DSURTeXN0ZW1JbmZvIDw8IC9SZWdpc3RyeSAoQWRvYmUpIC9PcmRlcmluZyAoVUNTKSAvU3VwcGxlbWVudCAwID4+IGRlZgovQ01hcE5hbWUgL0Fkb2JlLUlkZW50aXR5LVVDUyBkZWYKL0NNYXBUeXBlIDIgZGVmCjEgYmVnaW5jb2Rlc3BhY2VyYW5nZQo8MDAwMD4gPEZGRkY+CmVuZGNvZGVzcGFjZXJhbmdlCjIgYmVnaW5iZnJhbmdlCjwwMDAwPiA8MDAwMD4gPDAwMDA+CjwwMDAxPiA8MDAyQz4gWzwwMDQzPiA8MDA2MT4gPDAwNzM+IDwwMDc0PiA8MDA2OT4gPDAwNkU+IDwwMDY3PiA8MDA1MD4gPDAwNDE+IDwwMDU4PiA8MDA3MD4gPDAwNjU+IDwwMDcyPiA8MDA2Nj4gPDAwNkY+IDwwMDZEPiA8MDAyMD4gPDAwNDQ+IDwwMDZDPiA8MDA2ND4gPDAwMzE+IDwwMDY4PiA8MDA3Qj4gPDAwMzY+IDwwMDMwPiA8MDAzND4gPDAwN0Q+IDwwMDM4PiA8MDAzNT4gPDAwMkQ+IDwwMDMzPiA8MDAzMj4gPDAwNDY+IDwwMDc4PiA8MDA1Mz4gPDAwNjM+IDwwMDZCPiA8MDA1NT4gPDAwNzU+IDwwMDRDPiA8MDA1Nz4gPDAwNjI+IDwwMDUyPiA8MDA3Nj4gXQplbmRiZnJhbmdlCmVuZGNtYXAKQ01hcE5hbWUgY3VycmVudGRpY3QgL0NNYXAgZGVmaW5lcmVzb3VyY2UgcG9wCmVuZAplbmQKZW5kc3RyZWFtCmVuZG9iago3IDAgb2JqCjw8IC9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0hlbHZldGljYQovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbMzEgMCBSXQovVG9Vbmljb2RlIDMyIDAgUj4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyAKWwo2IDAgUgoxNCAwIFIKMTkgMCBSCjI0IDAgUgpdCi9Db3VudCA0Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQ10KPj4KZW5kb2JqCnhyZWYKMCAzNAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDEyMCAwMDAwMCBuIAowMDAwMDE0MjczIDAwMDAwIG4gCjAwMDAwMDAxNjkgMDAwMDAgbiAKMDAwMDAwMDI2NCAwMDAwMCBuIAowMDAwMDAxMzY5IDAwMDAwIG4gCjAwMDAwMTQxMzggMDAwMDAgbiAKMDAwMDAwMDMwMSAwMDAwMCBuIAowMDAwMDAxMzUwIDAwMDAwIG4gCjAwMDAwMDE2ODcgMDAwMDAgbiAKMDAwMDAwMzIzMCAwMDAwMCBuIAowMDAwMDAxNDkwIDAwMDAwIG4gCjAwMDAwMDE2NjcgMDAwMDAgbiAKMDAwMDAwMzI1MSAwMDAwMCBuIAowMDAwMDAzNTU5IDAwMDAwIG4gCjAwMDAwMDQ5NDEgMDAwMDAgbiAKMDAwMDAwMzM3MyAwMDAwMCBuIAowMDAwMDAzNTM5IDAwMDAwIG4gCjAwMDAwMDQ5NjIgMDAwMDAgbiAKMDAwMDAwNTI3MCAwMDAwMCBuIAowMDAwMDA2NzA0IDAwMDAwIG4gCjAwMDAwMDUwODQgMDAwMDAgbiAKMDAwMDAwNTI1MCAwMDAwMCBuIAowMDAwMDA2NzI1IDAwMDAwIG4gCjAwMDAwMDcwMzMgMDAwMDAgbiAKMDAwMDAwNzc1MCAwMDAwMCBuIAowMDAwMDA2ODQ3IDAwMDAwIG4gCjAwMDAwMDcwMTMgMDAwMDAgbiAKMDAwMDAwNzc3MCAwMDAwMCBuIAowMDAwMDA4MDI5IDAwMDAwIG4gCjAwMDAwMTMwMjYgMDAwMDAgbiAKMDAwMDAxMzQxNSAwMDAwMCBuIAowMDAwMDEzMDA1IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgMzQKL0luZm8gMSAwIFIKL1Jvb3QgMiAwIFIKPj4Kc3RhcnR4cmVmCjE0MzkyCiUlRU9GCg==',
    };
    dispatch(
      getProfilePDF(params, async (res: any) => {
        if (res.status === -1) {
          //Alert.alert(res.error);
          console.log('error in GET USER PDF ');
        } else {
          console.log('in PDF back Call');
          try {
            const shareResponse = await Share.open(shareOptions);
            console.log('shareResponse--->', shareResponse);
          } catch (error: any) {
            // Alert.alert(error?.message);
            console.log('reject', error.message);
          }
        }
        // if (res.status === -1) {
        //   //Alert.alert(res.error);
        //   console.log('error in GET USER PDF ', res);
        // } else {
        //   // setIsProfileMenu(false);
        //   if (res?.result[0]?.content) {
        //     const options = {
        //       message: res?.result[0]?.filename
        //         ? res?.result[0]?.filename
        //         : 'CastingPAX',
        //       url: `data:application/pdf;base64,${res?.result[0]?.content}`,
        //     };
        //     console.log('in PDF performer back Call', res?.result[0]);
        //     try {
        //       const shareResponse = await Share.open(options);
        //       console.log('shareResponse--->', shareResponse);
        //     } catch (error: any) {
        //       // Alert.alert(error?.message);
        //       console.log('rejection in share pdf', error.message);
        //     }
        //   } else {
        //     Alert.alert('No pdf found against user');
        //   }
        // }
      })
    );
  };
  const getname = () => {
    if (userData) {
      // console.log(userData?.firstName, userData.lastName);
      let firstname = userData?.firstName ? userData.firstName : ' ';
      let secondname =
        userData?.firstName + userData?.lastName ? userData.lastName : ' ';
      return firstname + ' ' + secondname;
    } else {
      return ' ';
    }
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
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView />
        <Header
          titleCenter={IS_IPHONE}
          leftIconPress={() => navigation.pop()}
          leftIcon={require('../../assets/icons/ic_arrow_left.png')}
          title={getname()}
          // rightIcon={require('../../assets/icons/ic_dot_menu.png')}
          // rightIconPress={() => setIsProfileMenu(true)}
        />
        <View style={styles.profileHeader}>
          <Text style={styles.profileName}>{getname()}</Text>
          {userData && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProfileExpanded', {
                  userData,
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
            {userData?.profilePicUrl ? (
              <Image
                style={styles.profileImage}
                source={{uri: userData.profilePicUrl.replace('http', 'https')}}
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
            title={userData?.email}
          />
          <Socials
            icon={require('../../assets/icons/ic_phone.png')}
            title={userData?.phoneNo}
          />
        </View>
        <View style={styles.attributeParentCon}>
          <View style={styles.attributesCon}>
            <ProfileInfo
              icon={require('../../assets/icons/ic_gender.png')}
              info={'Gender'}
              category={''}
            />
            <ProfileInfo
              icon={require('../../assets/icons/ic_role.png')}
              info={'Age'}
              category={''}
            />
          </View>
          <View style={styles.attributesCon}>
            <ProfileInfo
              icon={require('../../assets/icons/ic_weight.png')}
              info={'Weight'}
              category={''}
            />
            <ProfileInfo
              icon={require('../../assets/icons/ic_height.png')}
              info={'Height'}
              category={''}
            />
          </View>

          <ProfileInfo
            largeIcon
            icon={require('../../assets/icons/ic_city.png')}
            info={'City'}
            category={userData?.address}
            //category={'Toronto'}
          />
        </View>
        <ProfileMenu
          onSharePress={onSharePress}
          onPrintPress={onPrintPress}
          visible={isProfileMenu}
          onSidePress={() => setIsProfileMenu(false)}
          isloading={pdfLoader}
        />
      </View>
    </>
  );
};

export default Profile;
