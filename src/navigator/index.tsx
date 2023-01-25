import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './authNavigator';
import DrawerNavigator from './drawerNavigator';
import HomeNavigator from './homeNavigator';
const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name='AuthNav' component={AuthNavigator} />
        <Stack.Screen name='DrawerNav' component={DrawerNavigator} />
        <Stack.Screen name='HomeNav' component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
