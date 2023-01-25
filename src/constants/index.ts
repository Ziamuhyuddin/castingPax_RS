import {Platform} from 'react-native';
import {height, width, IS_IPHONE_X, IS_IPHONE,isTab} from './Dimentions';
import Colors from './Colors';
import Fonts from './Fonts';
import {wp, hp} from './Responsiveness';
import {Strings, swiperData, summaryData, todayShows,sectionData} from './Strings';
import {Appicons,Appimages} from './IconImages'
const Constants = {
  CONTACT_SUPPORT: '',
  PRIVACY_POLICY: '',
  TERMS_CONDITIONS: '',

  CONST_CAMERA_OPTIONS: {
    width: 300,
    height: 400,
    cropping: true,
  },
  CONST_KEYBOARD_VERTICAL_OFFSET: Platform.OS === 'ios' ? 0 : -300,
};

export {
  sectionData,
  todayShows,
  summaryData,
  swiperData,
  Strings,
  height,
  width,
  Colors,
  IS_IPHONE_X,
  Constants,
  Fonts,
  IS_IPHONE,
  wp,
  hp,
  isTab,
  Appicons,
  Appimages
};
