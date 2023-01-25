import {Dimensions, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info'

export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;
export const IS_IPHONE_X = !!(
  Platform.OS === 'ios' &&
  (height > 800 || width > 800)
);

export const IS_IPHONE = !!(Platform.OS === 'ios');

export const isTab = isTablet()
