import React, { FC, useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Switch,
  Platform,
} from "react-native";
import { Colors, Fonts, hp, IS_IPHONE_X, isTab, wp } from "../../../constants";

interface ShowMore {
  startingText?: string;
  endingText?: string;
  btSwitch?: boolean;
  edit?: boolean;
  onMileagePress?: any;
  onNdbSwitchPress?: any;
  ndbSwitch?: any;
}

const ShowMore: FC<ShowMore> = (props: ShowMore) => {
  const {
    startingText,
    endingText,
    btSwitch,
    edit,
    onMileagePress,
    onNdbSwitchPress,
    ndbSwitch,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.startingText}>{startingText}</Text>
      <Text style={styles.endingText}>{endingText}</Text>
      {btSwitch && (
        <Switch
          style={styles.switchCon}
          trackColor={{
            false: Colors.GREY.off_Grey,
            true: Colors.GREEN.default,
          }}
          thumbColor={ndbSwitch ? "#fff" : "#fff"}
          ios_backgroundColor={Colors.GREY.off_Grey}
          onValueChange={onNdbSwitchPress}
          value={ndbSwitch}
        />
      )}
      {edit && (
        <TouchableOpacity onPress={onMileagePress}>
          <Image
            style={styles.icEdit}
            source={require("../../../assets/icons/ic_pencilEdit.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(7),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
  },
  startingText: {
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: "500",
    color: Colors.GREY.darkWithOpacity,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
  },
  endingText: {
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: "500",
    color: Colors.GREY.default,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
  },
  icEdit: {
    resizeMode: "contain",
    // width:16,
    // height:18
    width: isTab ? wp(6) : wp(5),
    height: isTab ? hp(2.3) : hp(1.8),
  },
  switchCon: {
    // borderWidth: 1,
    transform: [
      { scaleX: isTab ? 1 : Platform.OS === "ios" ? 0.9 : 0.9 },
      { scaleY: isTab ? 1 : Platform.OS === "ios" ? 0.9 : 0.9 },
    ],
  },
});

export default ShowMore;
