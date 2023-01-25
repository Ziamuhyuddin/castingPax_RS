import React, {FC, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  BackHandler,
  LayoutAnimation,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Colors, Strings, todayShows} from '../../constants';
import AppNameLogo from '../appNameLogo';
import IconTitle from '../iconTitle';
import {DrawerActions, CommonActions} from '@react-navigation/native';
import {logoutRequest} from '../../store/actions';
import {useDispatch} from 'react-redux';
import {recentShows} from '../../constants/Strings';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {EventRegister} from 'react-native-event-listeners';
import {customDrawerInProgress} from '../../store/actions/customDrawer';
interface CustomDrawer {
  navigation?: any;
}

const CustomDrawer: FC<CustomDrawer> = (props: CustomDrawer) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [progress, setProgress] = useState<boolean>(false);
  const [recent, setRecent] = useState<boolean>(false);
  const [offline, setOffline] = useState<boolean>(false);
  const userData = useSelector(
    (state: any) => state?.reducer?.profile?.userData?.data
  );
  const customDrawer = useSelector(
    (state: any) => state?.reducer?.customDrawer
  );
  const onProfilePress = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('HomeNav', {
      screen: 'Profile',
    });
  };
  const logOut = () => {
    dispatch(logoutRequest(() => {}));
    // navigation.navigate('AuthNav',{screen:'LogIn'})
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'AuthNav',
          },
          {
            name: 'AuthNav',
            params: {screen: 'LogIn'},
          },
        ],
      })
    );
  };
  const onRecentPress = () => {
    const params = {
      id: '61a079df718f641623d5c043',
    };
    if (!recent) {
      dispatch(
        customDrawerInProgress(params, (res: any) => {
          if (res.status === -1) {
            //Alert.alert(res.error);
            console.log('error in CUSTOM_DRAWER_INPROGREE ');
          } else {
            console.log('SUCCESS CALLBACK CUSTOM_DRAWER_INPROGRESS');
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut
            );
            setRecent(!recent);
          }
        })
      );
    } else {
      setRecent(!recent);
    }
  };
  const onProgressPress = () => {
    const params = {
      id: '61a079df718f641623d5c043',
    };
    if (!progress) {
      dispatch(
        customDrawerInProgress(params, (res: any) => {
          if (res.status === -1) {
            //Alert.alert(res.error);
            console.log('error in CUSTOM_DRAWER_INPROGREE ');
          } else {
            console.log('SUCCESS CALLBACK CUSTOM_DRAWER_INPROGRESS');
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut
            );
            setProgress(!progress);
          }
        })
      );
    } else {
      setProgress(!progress);
    }
  };

  const onOfflinePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOffline(!offline);
  };
  const _renderRecentDropDown = () => {
    return (
      <View style={styles.menuDropDownCon}>
        {recentShows.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                console.log('here');
                //navigation.navigate('HomeNav');
              }}
            >
              <Text style={styles.menuItemsText} numberOfLines={1}>
                {item.showInfo}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const _renderProgressDropDown = () => {
    return (
      <View style={styles.menuDropDownCon}>
        {todayShows.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log('here');
                //navigation.navigate('HomeNav');
              }}
              key={index}
            >
              <Text style={styles.menuItemsText} numberOfLines={1}>
                {item.showInfo}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const _renderOfflineDropDown = () => {
    return (
      <View style={styles.menuDropDownCon}>
        <Text style={styles.menuItemsText}>{Strings.offline}</Text>
      </View>
    );
  };
  const getname = () => {
    if (userData) {
      let firstname = userData?.firstName ? userData.firstName : ' ';
      let secondname =
        userData?.firstName + userData?.lastName ? userData.lastName : ' ';

      return firstname + ' ' + secondname;
    } else {
      return ' ';
    }
  };
  return (
    <>
      <View style={styles.transparentView} />
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.drawerHeaderCon}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={onProfilePress}>
              {userData?.profilePicUrl ? (
                <Image
                  style={styles.drawerImage}
                  source={{
                    uri: userData.profilePicUrl.replace('http', 'https'),
                  }}
                />
              ) : (
                <Image
                  style={styles.drawerImage}
                  source={require('../../assets/images/profile_img.png')}
                />
              )}
            </TouchableOpacity>
            <View style={styles.userInfoText}>
              <Text style={styles.userName}>{getname()}</Text>
              <Text style={styles.userEmail}>
                {userData?.email ? userData?.email : ''}
              </Text>
            </View>
          </View>
        </View>
        {customDrawer?.isLoading ? (
          <ActivityIndicator
            size='small'
            style={styles.activityCon}
            color={Colors.GREEN.default}
          ></ActivityIndicator>
        ) : (
          <ScrollView style={styles.drawerItemsCon}>
            <IconTitle
              rightIcon
              drawer={true}
              open={recent}
              onPress={() => onRecentPress()}
              icon={require('../../assets/icons/ic_recent.png')}
              title={Strings.Recent}
              bottomLine={true}
            />
            {recent && _renderRecentDropDown()}
            <IconTitle
              rightIcon
              open={progress}
              drawer={true}
              onPress={() => onProgressPress()}
              icon={require('../../assets/icons/ic_calender.png')}
              title={Strings.In_Progress_Today}
              bottomLine={true}
            />
            {progress && _renderProgressDropDown()}

            <IconTitle
              rightIcon
              open={offline}
              onPress={() => onOfflinePress()}
              drawer={true}
              icon={require('../../assets/icons/ic_recent.png')}
              title={Strings.Offline}
              bottomLine={true}
            />

            {offline && _renderOfflineDropDown()}
            <IconTitle
              drawer={true}
              icon={require('../../assets/icons/ic_bin.png')}
              title={Strings.Trash}
              bottomLine={true}
            />
            <IconTitle
              drawer={true}
              icon={require('../../assets/icons/ic_settings.png')}
              title={Strings.Settings}
              bottomLine={true}
            />
            <IconTitle
              onPress={() => {
                Alert.alert('Logout', 'Are you sure you want to Logout ?', [
                  {
                    text: 'Cancel',
                    onPress: () => null,
                    // style: 'cancel',
                  },
                  {text: 'YES', onPress: () => logOut()},
                ]);
                return true;
              }}
              drawer={true}
              icon={require('../../assets/icons/ic_logout.png')}
              title={Strings.Logout}
              bottomLine={true}
            />
          </ScrollView>
        )}
        <View style={styles.applyFlex} />
        <View style={styles.logoCon}>
          <AppNameLogo
            customLogo={styles.customLogo}
            bgCustom={styles.bgText}
            paxCustom={styles.paxText}
          />
        </View>
      </View>
    </>
  );
};

export default CustomDrawer;
