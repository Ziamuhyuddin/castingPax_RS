import React, {FC} from 'react';
import {
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import styles from './styles';
import {Colors, hp, Strings} from '../../constants';

interface IconTitleColumn {
  onPress?: any;
  title?: string;
  isSelected?: boolean;
}

const IconTitleColumn: FC<IconTitleColumn> = (props: IconTitleColumn) => {
  const {onPress, title, isSelected} = props;
  const selectIcon = (iconTitle: any) => {
    if (iconTitle === Strings.NDB) {
      return require('../../assets/icons/ic_ndb.png');
    } else if (iconTitle === Strings.Travel_Time) {
      return require('../../assets/icons/ic_travel.png');
    } else if (iconTitle === Strings.Rental) {
      return require('../../assets/icons/ic_home.png');
    } else if (iconTitle === Strings.Lunch) {
      return require('../../assets/icons/ic_lunch.png');
    } else if (iconTitle === Strings.Costume) {
      return require('../../assets/icons/ic_costume.png');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={[styles.icon, isSelected && styles.iconSelected]}
          source={selectIcon(title)}
        />
        <Text style={[styles.text, isSelected && styles.textSelected]}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default IconTitleColumn;
