import React, { FC } from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface Button {
  title?: string;
  btCustomStyle?: any;
  textCustomStyle?: any;
  onPress?: any;
  icon?: boolean;
  large?: boolean;
  extraLarge?: boolean;
  matrix?: boolean;
  wrap?: boolean;
  disabled?: boolean;
  onIconPress?: any;
}

const Button: FC<Button> = (props: Button) => {
  const {
    large,
    extraLarge,
    btCustomStyle,
    title,
    textCustomStyle,
    icon,
    onPress,
    matrix,
    wrap,
    disabled,
    onIconPress,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        large && styles.customBT,
        extraLarge && styles.extraLarge,
        matrix && styles.btMatrix,
        wrap && styles.btWrap,
        btCustomStyle && btCustomStyle,
      ]}
    >
      {disabled ? (
        <ActivityIndicator color={"#fff"} size={"small"} />
      ) : (
        <Text
          style={[styles.btText, matrix && styles.matrixText, textCustomStyle]}
        >
          {title}
        </Text>
      )}
      {icon && (
        <TouchableOpacity style={styles.iconCon} onPress={onIconPress}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/ic_setting.png")}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default Button;
