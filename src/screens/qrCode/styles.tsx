import {Platform, StyleSheet} from 'react-native';
import {IS_IPHONE_X, Fonts, wp, hp, Colors, isTab} from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE.default,
    flex: 1,
  },
  screenPadding: {
    backgroundColor: Colors.WHITE.default,
    flex: 1,
    paddingHorizontal: wp(6),
  },
  margin: {
    marginTop: hp(2),
  },
  permissionText: {
    fontWeight: '400',
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 18 : 16,
    color: Colors.WHITE.default,
    textAlign: 'center',
    lineHeight: hp(3),
    // padding:wp(4)
  },
  qrLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK.primaryBlack,
    flex: 1,
  },
  // cameraContainerStyle:{
  //   justifyContent:'center',
  //   alignItems:'center',
  //   // width:wp(80),
  //   // height:hp(90),
  //   borderRadius: wp(5),
  //   borderColor:Colors.RED.default,
  //   borderWidth:2,
  //   overflow:'hidden',
  //   alignSelf:'center'
  // },
  cameraStyle: {
    height: hp(100),
    // width:isTab?wp(60):wp(80),
    // height:isTab?hp(40):hp(40),
  },
  // scannerOnKeyboard:{
  //   marginTop:Platform.OS==='ios'?hp(20):hp(25),
  //   justifyContent:'center',
  //   alignItems:'center',
  //   borderRadius: wp(5),
  //   overflow:'hidden',
  //   alignSelf:'center',
  //   borderWidth:0,
  // },
  scanner: {
    alignSelf: 'center',
    position: 'absolute',
    borderWidth: 3,
    borderRadius: wp(5),
    width: wp(70),
    height: hp(30),
  },
  buttonCon: {
    paddingHorizontal: wp(2),
    marginTop: hp(1.3),
    marginBottom: hp(1.3),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shadow: {
    elevation: 6,
  },
  btSignIn: {
    width: wp(43),
    height: Platform.OS === 'ios' ? hp(4.5) : hp(5.5),
  },
  btWrap: {
    width: wp(43),
    height: Platform.OS === 'ios' ? hp(4.5) : hp(5.5),
    backgroundColor: Colors.RED.default,
  },
  popUpCon: {
    position: 'absolute',
    bottom: isTab ? hp(6.8) : Platform.OS === 'ios' ? hp(6) : hp(6.6),
    left: wp(8),
  },
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});

export default styles;
