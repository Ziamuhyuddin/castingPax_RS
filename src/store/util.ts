import AsyncStorage from '@react-native-async-storage/async-storage';
export const googleMapAPIKey = 'AIzaSyBTfypSbx_zNMhWSBXMTA2BJBMQO7_9_T8';
import {Strings} from '../constants';

export const saveUserData = (data: any) => {
  console.log('data is: ', data);
  AsyncStorage.setItem(Strings.USER_DATA, JSON.stringify(data))
    .then(() => {
      console.log('user data stored in Async successfully');
    })
    .catch((e) => console.log('Got error while storing user data to Async', e));
};

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(Strings.USER_DATA);
    let data = jsonValue != null ? JSON.parse(jsonValue) : null;
    return data
  } catch (e) {
    console.log('asyncstorage error');
    return false;
  }
};
export const saveToken = (token: any) => {
  console.log('token is: ', token);
  AsyncStorage.setItem(Strings.USER_TOKEN, JSON.stringify(token))
    .then(() => {
      console.log('token stored in Async successfully');
    })
    .catch((e) => console.log('Got error while storing token to Async', e));
};

export const clearUserData = () => {
  AsyncStorage.removeItem(Strings.USER_DATA).catch((e) => console.log(e));
  AsyncStorage.removeItem(Strings.USER_TOKEN).catch((e) => console.log(e));
};

// function validate(s) {
//   var rgx = /^[0-9]*\.?[0-9]*$/;
//   return s.match(rgx);
// }

export const validateTravelTab = (s: string) => {
  var rgx = /^[0-9]*\.?[0-9]*$/;
  return String(s).match(rgx);
};
export const validateLunchField = (s: string) => {
  return String(s).match('^[0-9-:]+$');
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
      // '^([1-zA-Z0-1@.\\s]{1,255})$'
      // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const emailValidation = (email: string) => {
  // var emailString = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.+[A-Za-z]{2,64}';
  // var emailString = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  var emailString = '^([1-zA-Z0-1@.\\s]{1,255})$';
  return email.match(emailString) ? true : false;
};

export const validatePassword = (pass: any) => {
  if (pass.length < 6) {
    return false;
  } else {
    return true;
  }

  // Minimum eight characters, at least one letter and one number:
  // return String(pass)
  //   .toLowerCase()
  //   .match('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$');
};

const passwordValidation = (password: any) => {
  var passwordString =
    '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})';

  return password.match(passwordString);
};

export const parseError = (error: any) => {
  let message = '';
  // console.log('error: ', error)
  if (error.response) {
    // console.log('error response: ', error.response)
    message = error.response.data.message;
  } else if (error.request) {
    message = 'Network Error!';
  } else {
    message = error.message;
  }

  console.log('error msg: ', message);

  if (message === undefined) {
    message = 'Service Unavailable';
  }
  return message;
};
