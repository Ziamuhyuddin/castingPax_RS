import React, {FC,useEffect} from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Image, Platform,
} from 'react-native';
import styles from './styles';
import {Colors, Strings, swiperData} from '../../constants';
import {Button, AppNameLogo} from '../../components';
import SwiperContent from './components/swiperContent';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser,makeSplash} from '../../store/actions'
import useState from 'react-usestateref';

interface onBoarding {
  name: string;
  navigation: any;
}

const OnBoarding: FC<onBoarding> = (props: onBoarding) => {
  const {navigation} = props;
    const dispatch = useDispatch();
    const {splash} = useSelector(
        (state:any) => state.reducer.auth,
    );
  const [contentIndex, setContentIndex] = useState<number>(0);
  const [checkSplash, setCheckSplash, checkSplashRef] = useState<boolean>(true);
  const onViewRef = React.useRef((viewableItems: any) => {
    // console.log('Data OnVIewRef=====>', viewableItems);
    setContentIndex(viewableItems.changed[0].index);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});
  const swiperBalls = [0, 1, 2];


    useEffect(() => {
        if (Platform.OS === 'android') {
            checkLoginData();
        } else {
            setTimeout(() => {
                checkLoginData();
            }, 1000);
        }
    }, []);


    // useEffect(() => {
    //     console.log('THiS isss splash:',splash)
    //     setCheckSplash(splash)
    // }, [splash]);

    const checkLoginData = () => {




                AsyncStorage.getItem(Strings.USER_DATA).then(user => {
                    if (user) {
                        // console.log('user_data: ', JSON.parse(user));
                        dispatch(
                            updateUser({
                                user: JSON.parse(user),
                            }),
                        );
                        navigation.navigate('DrawerNav');
                    } else {
                        navigation.navigate('AuthNav');
                    }
                });


    };

  return (
    <View style={styles.container}>
      <Image
        resizeMode={'cover'}
        style={styles.bgImage}
        source={require('../../assets/images/onBoarding_bg.png')}
      />
      <SafeAreaView />
      <LinearGradient
        style={styles.overLay}
        colors={[Colors.GREY.onBoarding1, Colors.GREY.onBoarding2]}
        start={{x: 0.0, y: 1.0}}
        end={{x: 0.0, y: 0.0}}
        locations={[0.3, 1]}
      />
      {/*<View style={styles.overLay} />*/}
      <View style={styles.appNameLogoCon}>
        <AppNameLogo />
      </View>



         <View>
        <FlatList
          style={styles.flatListCon}
          data={swiperData}
          renderItem={({item}) => {
            return (
              <SwiperContent headerTitle={item.header} content={item.content} />
            );
          }}
          keyExtractor={item => item.header}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
        />
      </View>

      <View style={styles.dotsContainer}>
        {swiperBalls.map((item, index) => {
          return (
            <View
              key={index}
              style={contentIndex === index ? styles.dot : styles.greyDot}
            />
          );
        })}
      </View>
      <View style={{flex: 1}} />
      <View style={styles.footerHandle}>
        <View style={styles.termsPolicyCon}>
          <Text style={styles.signingText}>
            {Strings.By_signing_in_you_agree_to}{' '}
          </Text>
          <TouchableOpacity style={styles.privacyCon}>
            <Text style={styles.privacyText}>{Strings.Terms_and_Privacy}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonCon}>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            title={Strings.Sign_Up_With_Email}
          />
        </View>
        <View style={styles.footerCon}>
          <Text style={styles.memberText}>{Strings.Already_a_member}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.loginText}>{Strings.Login}</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
};

export default OnBoarding;
