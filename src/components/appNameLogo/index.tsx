import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Strings} from '../../constants';

interface AppNameLogo {
  bgCustom?: any;
  paxCustom?: any;
  customLogo?: any;
}

const AppNameLogo: FC<AppNameLogo> = (props: AppNameLogo) => {
  const {bgCustom, paxCustom, customLogo} = props;
  return (
    <>
      <View style={[styles.container, customLogo]}>
        <Text style={styles.castingText}>
          {Strings.Casting}
          <Text style={[styles.paxText, paxCustom]}>{Strings.PAX}</Text>
        </Text>
        <Text style={[styles.bgText, bgCustom]}>{Strings.BG_Cordinator}</Text>
      </View>
    </>
  );
};

export default AppNameLogo;
