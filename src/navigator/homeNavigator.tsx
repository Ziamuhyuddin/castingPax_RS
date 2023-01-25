import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  QrCOde,
  MatrixExpandedAtom,
  Profile,
  ProfileExpanded,
  MatrixPerformer,
  MatrixPerformerExpanded,
  SearchExpanded,
} from '../screens';
import PerformerProfile from '../screens/performerProfile';
import PerformerProfileExpand from '../screens/performerProfileExpand';

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name='MatrixAtom' component={MatrixExpandedAtom} />
      <Stack.Screen name='MatrixPerformer' component={MatrixPerformer} />
      <Stack.Screen
        name='MatrixPerformerExpanded'
        component={MatrixPerformerExpanded}
      />
      <Stack.Screen name='PerformerProfile' component={PerformerProfile} />
      <Stack.Screen
        name='PerformerProfileExpand'
        component={PerformerProfileExpand}
      />
      <Stack.Screen name='QR' component={QrCOde} />
      <Stack.Screen name='Profile' component={Profile} />

      <Stack.Screen name='ProfileExpanded' component={ProfileExpanded} />
      <Stack.Screen name='SearchExpanded' component={SearchExpanded} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
