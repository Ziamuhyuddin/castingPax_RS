import React, {FC} from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
interface props {
  iconsource?: any;
  disabled?: boolean;
  onPress?(): void;
  iconstyle?: ImageStyle;
  tintColor?: string;
  ConStyle?: ViewStyle;
}
const CustomIcon: FC<props> = (props: props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled ? props.disabled : false}
      style={props.ConStyle}
      onPress={props.onPress}
    >
      <Image
        source={props.iconsource}
        style={[
          styles.ICON_STYLE,
          props.iconstyle,
          {tintColor: props.tintColor},
        ]}
      ></Image>
    </TouchableOpacity>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  ICON_STYLE: {
    height: '100%',
    width: '100%',
  },
});
