import React, {FC} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

interface IconTitle {
  icon?: any;
  title?: string;
  bottomLine?: boolean;
  drawer?: boolean;
  onPress?: any;
  open?: boolean;
  rightIcon?: boolean;
}

const IconTitle: FC<IconTitle> = (props: IconTitle) => {
  const {icon, title, bottomLine, drawer, onPress, open, rightIcon} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.menuListContainer,
        {borderBottomWidth: !bottomLine ? 0.3 : 0},
        drawer && styles.customContainer,
      ]}>
      <Image style={styles.menuListImage} source={icon} />
      <Text
        style={[
          styles.menuText,
          title === 'Finalize' && styles.finalizeText,
          drawer && styles.customText,
        ]}>
        {title}
      </Text>
      {rightIcon && (
        <Image
          style={styles.dropDownIcon}
          source={
            open
              ? require('../../assets/icons/ic_dropDown.png')
              : require('../../assets/icons/ic_dropRight.png')
          }
        />
      )}
    </TouchableOpacity>
  );
};

export default IconTitle;
