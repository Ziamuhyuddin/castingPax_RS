import 'react-native-gesture-handler';
import React, {FC,useEffect,useRef} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import AppNavigator from './src/navigator';

import { useNetInfo } from '@react-native-community/netinfo'
import DropdownAlert from 'react-native-dropdownalert';



const App: FC = () => {
    const netInfo = useNetInfo()
    let dropDownAlertRef = useRef();

    useEffect(() => {
        console.log('net info changed, new state: ', netInfo)
            if(netInfo.isConnected){
                dropDownAlertRef.alertWithType('success', 'Success','Connection Established...');

            }else if(netInfo.isConnected === null){
return
            }else {
                dropDownAlertRef.alertWithType('warn', 'Warning', 'Connection Lost...!');

        }

    }, [netInfo.isConnected])

  return (
    <Provider store={store}>
      <AppNavigator />
        <DropdownAlert
            ref={(ref) => {
                if (ref) {
                    dropDownAlertRef = ref;
                }
            }}
        />
    </Provider>
  );
};

export default App;
