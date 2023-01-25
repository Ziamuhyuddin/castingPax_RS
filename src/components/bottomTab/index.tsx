import React, {FC} from 'react';
import {Platform, View} from 'react-native';
import IconTitleColumn from '../iconTitleColumn';
import styles from './styles';
import {hp, Strings} from '../../constants';

interface BottomTab {
  isLunch?: boolean;
  onFirstTabPress?: any;
  onSecondTabPress?: any;
  onThirdTabPress?: any;
  onFourthTabPress?: any;
  isSelected?: any;
  onPress?: any;
  shading?:boolean;
  showModal?:boolean
}

const BottomTab: FC<BottomTab> = (props: BottomTab) => {
  const {isLunch, isSelected, onPress,showModal} = props;

  const onPressHandler = (title: any) => {
    console.log('THIS IS TITLE:==>', title);
    onPress(title);
  };
  const firsTabTitle = Strings.NDB;
  const secondTabTitle = Strings.Travel_Time;
  const thirdTabTitle = Strings.Rental;
  const fourthTabTitle = isLunch ? Strings.Lunch : Strings.Costume;

  return (
    <>
      {isLunch && Platform.OS !== 'ios' && (
        <View style={[styles.shadowCoverage,{
          marginBottom: showModal?0:hp(0.5),}]} />
      )}
      <View style={[styles.container, isLunch && styles.shading,
        {shadowOpacity:showModal?0: 0.3,}]}>
        <IconTitleColumn
          isSelected={isSelected === firsTabTitle}
          title={firsTabTitle}
          onPress={() => onPressHandler(firsTabTitle)}
        />
        <IconTitleColumn
          isSelected={isSelected === secondTabTitle}
          title={secondTabTitle}
          onPress={() => onPressHandler(secondTabTitle)}
        />
        <IconTitleColumn
          isSelected={isSelected === thirdTabTitle}
          title={thirdTabTitle}
          onPress={() => onPressHandler(thirdTabTitle)}
        />
        <IconTitleColumn
          isSelected={isSelected === fourthTabTitle}
          title={fourthTabTitle}
          onPress={() => onPressHandler(fourthTabTitle)}
        />
      </View>
    </>
  );
};

export default BottomTab;
