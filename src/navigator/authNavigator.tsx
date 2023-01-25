import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnBoarding,
  SignUp,
  Login,
  ForgotPassword,
  PhoneVerification,
  CodeVerification,
} from '../screens';
// import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'OnBoarding'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
          animation: "slide_from_right",
      }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
      <Stack.Screen name="CodeVerification" component={CodeVerification} />
      {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
