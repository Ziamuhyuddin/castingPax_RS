import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {wp} from '../constants';

import {


  SummaryScreen,


} from '../screens';
import {CustomDrawer} from '../components';

const Drawer = createDrawerNavigator();

interface DrawerNavigator {
  navigation?: any;
}
const DrawerNavigator = (props: DrawerNavigator) => {
  console.log('Drawer props: ', props);
  const {navigation} = props;

  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName={'HomeNav'}
      screenOptions={{
        // drawerHideStatusBarOnOpen: true,
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: wp(80),
          flex: 1,
        },
      }}
      drawerContent={(dProps: any) => (
        <CustomDrawer navigation={navigation} {...dProps} />
      )}>

      <Drawer.Screen name="Summary" component={SummaryScreen} />

      {/*<Drawer.Screen*/}
      {/*  options={{swipeEnabled: false}}*/}
      {/*  name="MatrixAtom"*/}
      {/*  component={MatrixExpandedAtom}*/}
      {/*/>*/}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
