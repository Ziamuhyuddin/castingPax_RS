import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Colors } from "../../constants";

interface TravelTimeButton {
  title?: string;
  onPress?: any;
}

const TravelTimeButton: FC<TravelTimeButton> = (props: TravelTimeButton) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonCon,
        {
          backgroundColor:
            title == "Save"
              ? Colors.GREEN.primary
              : Colors.GREY.darkWithOpacity,
        },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TravelTimeButton;
