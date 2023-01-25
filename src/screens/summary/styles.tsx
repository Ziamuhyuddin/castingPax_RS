import {Platform, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE.default,
    flex: 1,
  },
  screenPadding: {
    backgroundColor: Colors.WHITE.default,
    flex: 1,
    paddingHorizontal: wp(5),
  },
  topMargin: {
    marginTop: hp(3),
  },
  indicatorCon: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomIndicator: {
    paddingBottom: hp(2),
  },
  profileLoader: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default styles;
