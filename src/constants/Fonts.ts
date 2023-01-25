import {Platform} from 'react-native';

export default {
  POPPINS: {
    Black: 'Poppins-Black',
    BlackItalic: 'Poppins-BlackItalic',
    Bold: 'Poppins-Bold',
    BoldItalic: 'Poppins-BoldItalic',
    ExtraBold: 'Poppins-ExtraBold',
    ExtraBoldItalic: 'Poppins-ExtraBoldItalic',
    ExtraLight: 'Poppins-ExtraLight',
    ExtraLightItalic: 'Poppins-ExtraLightItalic',
    Italic: 'Poppins-Italic',
    Light: 'Poppins-Light',
    LightItalic: 'Poppins-LightItalic',
    Medium: 'Poppins-Medium',
    MediumItalic: 'Poppins-MediumItalic',
    Regular: 'Poppins-Regular',
    SemiBold: 'Poppins-SemiBold',
    SemiBoldItalic: 'Poppins-SemiBoldItalic',
    Thin: 'Poppins-Thin',
    ThinItalic: 'Poppins-ThinItalic',
  },
  ROBOTO: {
    Black: 'Roboto-Black',
    BlackItalic: 'Roboto-BlackItalic',
    Bold: 'Roboto-Bold',
    BoldItalic: 'Roboto-BoldItalic',
    Italic: 'Roboto-Italic',
    Light: 'Roboto-Light',
    LightItalic: 'Roboto-LightItalic',
    Medium: 'Roboto-Medium',
    MediumItalic: 'Roboto-MediumItalic',
    Regular: 'Roboto-Regular',
    Thin: 'Roboto-Thin',
    ThinItalic: 'Roboto-ThinItalic',
  },
  SFPROTEXT: {
    Black: Platform.OS === 'ios' ? 'SFProText-Black' : 'SF-Pro-Text-Black',
    BlackItalic:
      Platform.OS === 'ios'
        ? 'SFProText-BlackItalic'
        : 'SF-Pro-Text-BlackItalic',
    Bold: Platform.OS === 'ios' ? 'SFProText-Bold' : 'SF-Pro-Text-Bold',
    BoldItalic:
      Platform.OS === 'ios' ? 'SFProText-BoldItalic' : 'SF-Pro-Text-BoldItalic',
    Heavy: Platform.OS === 'ios' ? 'SFProText-Heavy' : 'SF-Pro-Text-Heavy',
    HeavyItalic:
      Platform.OS === 'ios'
        ? 'SFProText-HeavyItalic'
        : 'SF-Pro-Text-HeavyItalic',
    Light: Platform.OS === 'ios' ? 'SFProText-Light' : 'SF-Pro-Text-Light',
    LightItalic:
      Platform.OS === 'ios'
        ? 'SFProText-LightItalic'
        : 'SF-Pro-Text-LightItalic',
    Medium: Platform.OS === 'ios' ? 'SFProText-Medium' : 'SF-Pro-Text-Medium',
    MediumItalic:
      Platform.OS === 'ios'
        ? 'SFProText-MediumItalic'
        : 'SF-Pro-Text-MediumItalic',
    Regular:
      Platform.OS === 'ios' ? 'SFProText-Regular' : 'SF-Pro-Text-Regular',
    RegularItalic:
      Platform.OS === 'ios'
        ? 'SFProText-RegularItalic'
        : 'SF-Pro-Text-RegularItalic',
    Semibold:
      Platform.OS === 'ios' ? 'SFProText-Semibold' : 'SF-Pro-Text-Semibold',
    SemiboldItalic:
      Platform.OS === 'ios'
        ? 'SFProText-SemiboldItalic'
        : 'SF-Pro-Text-SemiboldItalic',
    Thin: Platform.OS === 'ios' ? 'SFProText-Thin' : 'SF-Pro-Text-Thin',
    ThinItalic:
      Platform.OS === 'ios' ? 'SFProText-ThinItalic' : 'SF-Pro-Text-ThinItalic',
    Ultralight:
      Platform.OS === 'ios' ? 'SFProText-Ultralight' : 'SF-Pro-Text-Ultralight',
    UltralightItalic:
      Platform.OS === 'ios'
        ? 'SFProText-UltralightItalic'
        : 'SF-Pro-Text-UltralightItalic',
  },
  SFPRODISPLAY: {
    Black:
      Platform.OS === 'ios' ? 'SFProDisplay-Black' : 'SF-Pro-Display-Black',
    BlackItalic:
      Platform.OS === 'ios'
        ? 'SFProDisplay-BlackItalic'
        : 'SF-Pro-Display-BlackItalic',
    Bold: Platform.OS === 'ios' ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
    BoldItalic:
      Platform.OS === 'ios'
        ? 'SFProDisplay-BoldItalic'
        : 'SF-Pro-Display-BoldItalic',
    Heavy:
      Platform.OS === 'ios' ? 'SFProDisplay-Heavy' : 'SF-Pro-Display-Heavy',
    HeavyItalic:
      Platform.OS === 'ios'
        ? 'SFProDisplay-HeavyItalic'
        : 'SF-Pro-Display-HeavyItalic',
    Light:
      Platform.OS === 'ios' ? 'SFProDisplay-Light' : 'SF-Pro-Display-Light',
    LightItalic:
      Platform.OS === 'ios'
        ? 'SFProDisplay-LightItalic'
        : 'SF-Pro-Display-LightItalic',
    Medium:
      Platform.OS === 'ios' ? 'SFProDisplay-Medium' : 'SF-Pro-Display-Medium',
    MediumItalic:
      Platform.OS === 'ios'
        ? 'SFProDisplay-MediumItalic'
        : 'SF-Pro-Display-MediumItalic',
    Regular:
      Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'SF-Pro-Display-Regular',
    RegularItalic:
      Platform.OS === 'ios'
        ? 'SFProDisplay-RegularItalic'
        : 'SF-Pro-Display-RegularItalic',
    Semibold:
      Platform.OS === 'ios'
        ? 'SFProDisplay-Semibold'
        : 'SF-Pro-Display-Semibold',
    SemiboldItalic:
      Platform.OS === 'ios'
        ? 'SFProDisplay-SemiboldItalic'
        : 'SF-Pro-Display-SemiboldItalic',
    Thin: Platform.OS === 'ios' ? 'SFProDisplay-Thin' : 'SF-Pro-Display-Thin',
    ThinItalic:
      Platform.OS === 'ios'
        ? 'SFProDisplay-ThinItalic'
        : 'SF-Pro-Display-ThinItalic',
    Ultralight:
      Platform.OS === 'ios'
        ? 'SFProDisplay-Ultralight'
        : 'SF-Pro-Display-Ultralight',
    UltralightItalic:
      Platform.OS === 'ios'
        ? 'SFProDisplay-UltralightItalic'
        : 'SF-Pro-Display-UltralightItalic',
  },
};
