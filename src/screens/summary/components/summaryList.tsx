import React, {FC} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Colors,
  Fonts,
  hp,
  IS_IPHONE_X,
  Strings,
  wp,
  isTab,
} from '../../../constants';
import FastImage from 'react-native-fast-image';

interface summaryList {
  showThumbnail?: any;
  dayName?: string;
  date?: string;
  day?: string;
  coordinator?: string;
  BG?: string;
  onDotMenuPress?: any;
  onPress?: any;
}

const SummaryList: FC<summaryList> = (props: summaryList) => {
  const {
    dayName,
    onDotMenuPress,
    showThumbnail,
    date,
    day,
    coordinator,
    BG,
    onPress,
  } = props;

  const _renderShowInfo = (topText: any, bottomText: string) => {
    const checkBgColor = () => {
      if (bottomText === 'Date') {
        return Colors.GREEN.withOpacity;
      } else if (bottomText === 'Day') {
        return Colors.BLUE.withOpacity;
      } else if (bottomText === 'Coordinator') {
        return Colors.YELLOW.withOpacity;
      } else if (bottomText === 'BG') {
        return Colors.PURPLE.withOpacity;
      }
    };
    const checkTextColor = () => {
      if (bottomText === 'Date') {
        return Colors.GREEN.primary;
      } else if (bottomText === 'Day') {
        return Colors.BLUE.default;
      } else if (bottomText === 'Coordinator') {
        return Colors.YELLOW.default;
      } else if (bottomText === 'BG') {
        return Colors.PURPLE.default;
      }
    };
    return (
      <View
        style={[styles.showInfoContainer, {backgroundColor: checkBgColor()}]}
      >
        <Text style={[styles.topText, {color: checkTextColor()}]}>
          {topText}
        </Text>
        <Text style={styles.bottomText}>{bottomText}</Text>
      </View>
    );
  };

  let pictureUri = '';
  if (showThumbnail) {
    // console.log('image===>',showThumbnail)
    if (showThumbnail.includes('http')) {
      pictureUri = showThumbnail.replace('http', 'https');
      // console.log('image again ===>',pictureUri)
    }
  }
  if (pictureUri) {
    // console.log('image===>',pictureUri)
    if (pictureUri.includes('staging')) {
      pictureUri = pictureUri.replace('staging', 'www');
      // console.log('image again with www ===>',pictureUri)
    }
  }

  // console.log('image again with www ===>',pictureUri)

  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.headerCon}>
          <Image
            resizeMode={'contain'}
            style={styles.summaryImage}
            // source={showThumbnail}
            source={{uri: pictureUri}}
            // source={{uri:"https://www.castingpax.com/api/static/shows/profile.png"}}
            // source={require('../../../assets/images/summary1_img.png')}
          />
          <Text style={styles.weekDaysText}>{dayName}</Text>

          <TouchableOpacity onPress={onDotMenuPress} style={styles.dontMenuCon}>
            <Image
              style={styles.dontMenu}
              source={require('../../../assets/icons/ic_dot_menu.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.chevronRightCon}>
            <Image
              style={styles.chevronRight}
              source={require('../../../assets/icons/ic_chevron_left.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          {_renderShowInfo(date, Strings.Date)}
          {_renderShowInfo(day, Strings.Day)}
          {_renderShowInfo(coordinator, Strings.Coordinator)}
          {_renderShowInfo(BG, Strings.BG)}
        </View>
      </TouchableOpacity>
      <View style={styles.borderLine} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLUE.light_Blue,
    height: isTab ? hp(22.6) : IS_IPHONE_X ? hp(15.8) : hp(17.5),
  },
  headerCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryImage: {
    borderRadius: wp(2),
    width: wp(13),
    height: wp(13),
  },
  weekDaysText: {
    flex: 1,
    marginStart: wp(4),
    alignSelf: 'center',
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: isTab ? wp(3.5) : IS_IPHONE_X ? 20 : 18,
    color: Colors.GREY.darkWithOpacity,
  },
  chevronRightCon: {
    padding: hp(0.4),
    marginRight: wp(1),
  },
  chevronRight: {
    transform: [{scaleX: -1}],
    resizeMode: 'contain',
    width: isTab ? wp(3.5) : wp(2.5),
    height: isTab ? hp(2.5) : hp(2),
  },
  dontMenuCon: {
    marginEnd: isTab ? wp(1) : wp(3),
    padding: wp(1.3),
  },
  dontMenu: {
    resizeMode: 'contain',
    width: isTab ? wp(2.5) : wp(2),
    height: isTab ? hp(2.5) : hp(2),
  },
  showInfoContainer: {
    width: wp(21),
    height: isTab ? hp(10.5) : IS_IPHONE_X ? hp(7.5) : hp(8.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
  },
  topText: {
    fontFamily: Fonts.SFPROTEXT.Semibold,
    fontWeight: '600',
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
  },
  bottomText: {
    marginTop: Platform.OS === 'ios' ? hp(0.6) : 0,
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: '500',
    fontSize: isTab ? wp(2.3) : IS_IPHONE_X ? 13 : 11,
    color: Colors.GREY.default,
  },
  infoContainer: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderLine: {
    marginTop: hp(2.5),
    marginBottom: hp(2.5),
    borderWidth: Platform.OS === 'ios' ? 0.5 : 0.17,
    borderColor: Colors.GREY.default,
    opacity: 0.2,
  },
});

export default SummaryList;
