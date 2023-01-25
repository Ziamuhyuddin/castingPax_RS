import React, {FC, useState, useEffect, useCallback, useMemo} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  BackHandler,
  Platform,
  ToastAndroid,
  Alert,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Header} from '../../components';
import {Colors, Strings, summaryData} from '../../constants';
import SummaryList from './components/summaryList';
import SummaryMenu from './components/summaryMenu';
import {
  DrawerActions,
  useNavigation,
  useNavigationState,
  useFocusEffect,
  useIsFocused,
} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getUserProfile,
  matrixListingRequest,
  updateUser,
} from '../../store/actions';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserData} from '../../store/util';
import {EventRegister} from 'react-native-event-listeners';
import NetInfo from '@react-native-community/netinfo';
import {put} from 'redux-saga/effects';
import {MATRIX_LISTING_FAILURE} from '../../store/actions/types';
interface summaryScreen {
  navigation?: any;
}

const SummaryScreen: FC<summaryScreen> = (props: summaryScreen) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const {isLoading, matrixList, paginationData} = useSelector(
    (state: any) => state.reducer.matrix
  );
  console.log('paginationData', isLoading);
  // console.log("THIS IS SUMMARY DATA MATRIX",JSON.stringify(matrixList))
  const [isMainMenu, setIsMainMenu] = useState<boolean>(false);
  const [isSummaryMenu, setIsSummaryMenu] = useState<boolean>(false);
  const [mainLoader, setMainLoader] = useState<boolean>(false);
  const [miniLoader, setMiniLoader] = useState<boolean>(false);
  const [exitApp, setExitApp] = useState(0);
  // const netInfo = useNetInfo();
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    if (exitApp === 0) {
      setExitApp(exitApp + 1);

      ToastAndroid.show('Double tap to exit', ToastAndroid.SHORT);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();
  });
  const data = useSelector((state: any) => state.reducer.profile);

  const getStoreData = async () => {
    var data = await getUserData();
    if (data) {
      if (data?.data?.id) {
        getUserRequest(data?.data?.id);
      } else {
        console.log('error in fetching user profile');
      }
    } else {
      setMainLoader(false);
      Alert.alert('Error in getting persist user id ');
    }
  };

  // useEffect(() => {
  //   console.log('useEffect');
  //   getStoreData();
  // }, []);

  const getUserRequest = (id: string) => {
    let params = {
      userId: id,
    };
    // console.log('----> userData in functoin', userData.data.id);
    dispatch(
      getUserProfile(params, (res: any) => {
        setMainLoader(false);
        if (res.status === -1) {
          // Alert.alert(res.error)
          console.log('error in getUser Data');
        } else {
          console.log('in back Call');
        }
      })
    );
  };
  function* removeList() {
    yield put({
      type: MATRIX_LISTING_FAILURE,
      error: 'Network not reachable',
    });
  }
  const checkNetConnection = async () => {
    const state = await NetInfo.fetch();
    console.log('state======>', state);
    if (state.isConnected) {
      setMainLoader(true);
      let params = {
        token: '',
        page: 1,
      };
      dispatch(
        matrixListingRequest(params, () => {
          console.log('in dispatch');
          getStoreData();
        })
      );
    } else {
      removeList();
      Alert.alert('No network available');
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      checkNetConnection();
    }, [NetInfo])
  );

  const renderFooter = () => {
    if (miniLoader) {
      return (
        <ActivityIndicator
          style={[styles.bottomIndicator]}
          color={Colors.GREEN.default}
          size={'small'}
        />
      );
    }
  };
  // var load = true;
  const renderProfileLoader = () => {
    if (mainLoader) {
      return (
        <ActivityIndicator
          style={[styles.profileLoader]}
          color={Colors.GREEN.default}
          size={'large'}
        />
      );
    }
  };
  const onEndReached = () => {
    if (!isLoading && paginationData && paginationData?.nextPage !== 0) {
      setMiniLoader(true);
      let params = {
        token: '',
        page: paginationData?.nextPage,
      };
      console.log('params: ', params);
      dispatch(
        matrixListingRequest(params, () => {
          setMiniLoader(false);
        })
      );
    }
  };

  return (
    <>
      {/*{isLoading && (*/}
      {/*    <View*/}
      {/*        style={styles.indicatorCon}>*/}
      {/*        <ActivityIndicator color={Colors.GREEN.default} size={'large'} />*/}
      {/*    </View>*/}
      {/*)}*/}
      <View style={styles.container}>
        <SafeAreaView />

        <Header
          leftIconPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
          leftIcon={require('../../assets/icons/ic_menu.png')}
          touchableTitle={Strings.Search}
          onTitlePress={() => {
            navigation.navigate('HomeNav', {screen: 'SearchExpanded'});
          }}
          visible={isMainMenu}
          hideShareAndPDF
          onSidePress={() => setIsMainMenu(false)}
        />

        <>
          <View style={styles.topMargin} />
          <View style={styles.screenPadding}>
            <FlatList
              ListFooterComponent={renderFooter()}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.3}
              onEndReached={onEndReached}
              data={matrixList}
              // data={summaryData}
              renderItem={({item}) => {
                // console.log('THE MATRIX ITEM==>',item.id)
                let date = moment(item.date).format('DD/MM');

                return (
                  <>
                    <SummaryList
                      onPress={() => {
                        navigation.navigate('HomeNav', {
                          screen: 'MatrixAtom',
                          params: {
                            thumbImage: item.showId.showImage,
                            dayTitle: item.showId.title,
                            episode: date,
                            day: item.title,
                            coordinator: item.bgCoordinator.length,
                            BG: item.bg,
                            id: item.id,
                            matrixItem: item,

                            // thumbImage: item.thumb_image,
                            // dayTitle: item.day_title,
                            // episode: item.date,
                            // day: item.day,
                            // coordinator: item.coordinator,
                            // BG: item.bg,
                          },
                        });
                      }}
                      onDotMenuPress={() => setIsMainMenu(true)}
                      // showThumbnail={item.thumb_image}
                      // dayName={item.day_title}
                      // date={item.date}
                      // day={item.day}
                      // coordinator={item.coordinator}
                      // BG={item.bg}
                      showThumbnail={item.showId.showImage}
                      dayName={item.showId.title}
                      date={date}
                      day={item.title}
                      coordinator={item.bgCoordinator.length}
                      BG={item.bgPerformerCount}
                    />
                  </>
                );
              }}
            />
          </View>
          {/* <SummaryMenu
            visible={isSummaryMenu}
            onSidePress={() => setIsSummaryMenu(false)}
          /> */}
        </>
        {renderProfileLoader()}
      </View>
    </>
  );
};

export default SummaryScreen;
