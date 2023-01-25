// axios

import axios from "axios";
import Env from "./env";
// import constants from '../const';
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Strings } from "../constants";

const baseURL = Env.baseURL;

axios.defaults.timeout = 30 * 1000;

const axiosInstance: any = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
  async (config: any) => {
    await AsyncStorage.getItem(Strings.USER_DATA).then((user) => {
      if (user) {
        let token = JSON.parse(user);
        config.headers["X-Auth-Token"] = token.data.token;
      } else {
      }
    });
    return config;
  },
  (error: any) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    console.log("🚀 ~ file: index.ts ~ line 33 ~ error", error);
    if (error.response) {
      console.log(error.response);
      if (error.response.data.message) {
      }

      if (error.response.status > 200) {
        // console.log('error ===> ', error.response.data);
        if (error.response.data.message) {
          Alert.alert("", error.response.data.message);
        } else {
          Alert.alert("", error.response.data.msg);
        }
      }

      if (error.response.status === 401) {
        //  TODO: navigate back to login screen
        // constants.DropDownAlert.showDropdownAlert(
        //   'error',
        //   '',
        //   error.response.data.message.toString(),
        // );
        // Alert.alert('error', error.response.data.message.toString());
      } else if (error.response.status === 403) {
        //logout the ap here
      } else if (error.response.status === 404) {
      } else if (error.response.status === 405) {
      } else if (error.response.status === 422) {
      } else if (error.response.status >= 500) {
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
