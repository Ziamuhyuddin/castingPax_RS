import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';

interface HomeScreenProps {
  name: string;
  id: number;
}

const HomeScreen: FC<HomeScreenProps> = HomeScreenProps => {
  const {message} = useSelector<any, any>(state => state.reducer.auth);
  const {name = 'Mola Hassan '} = HomeScreenProps;
  const [pName, setPName] = useState<string>(name);
  console.log('These are the homeScreen props:====>', HomeScreenProps);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.circle} />
        <Text style={styles.fontL}>{message}</Text>
        <Text style={styles.fontL}>{pName}</Text>
        <Text onPress={() => setPName('Mola Ali')} style={styles.fontL}>
          Press
        </Text>
        <Text onPress={() => setPName('Mola Hussain')} style={styles.fontL}>
          Press
        </Text>
        <Text onPress={() => setPName('Mola Hassan')} style={styles.fontL}>
          Reset
        </Text>
      </View>
    </>
  );
};

export default HomeScreen;
