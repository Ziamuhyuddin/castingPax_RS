import React, { FC, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import {
  Colors,
  Fonts,
  hp,
  IS_IPHONE_X,
  isTab,
  Strings,
  wp,
} from "../../../constants";

interface PerformorStatus {
  rateText?: string;
  costumeQuantity?: any;
  onPress?: any;
  showMore?: boolean;
  rentalSwitch?: any;
  onRentalSwitchPress?: any;
}

const PerformorStatus: FC<PerformorStatus> = (props: PerformorStatus) => {
  const {
    rateText,
    costumeQuantity,
    onPress,
    showMore,
    rentalSwitch,
    onRentalSwitchPress,
  } = props;

  const _renderShowInfo = (topText: string) => {
    const onBlogPress = (header: string) => {
      onPress(header);
    };
    const checkBgColor = () => {
      if (topText === "Rate") {
        return Colors.GREEN.withOpacity;
      } else if (topText === "Costume") {
        return Colors.BLUE.withOpacity;
      } else if (topText === "Rental") {
        return Colors.YELLOW.withOpacity;
      } else if (topText === "More") {
        return Colors.PURPLE.withOpacity;
      }
    };
    const checkTextColor = () => {
      if (topText === "Rate") {
        return Colors.GREEN.primary;
      } else if (topText === "Costume") {
        return Colors.BLUE.default;
      } else if (topText === "Rental") {
        return Colors.YELLOW.default;
      } else if (topText === "More") {
        return Colors.PURPLE.default;
      }
    };
    return (
      <TouchableOpacity
        onPress={() => onBlogPress(topText)}
        style={[styles.showInfoContainer, { backgroundColor: checkBgColor() }]}
      >
        <Text style={[styles.topText, { color: checkTextColor() }]}>
          {topText}
        </Text>
        {topText === "Rate" && (
          <View style={styles.rateCon}>
            <Text style={styles.bottomText}>{rateText}</Text>
            <Image
              style={styles.chevronDown}
              source={require("../../../assets/icons/ic_greyDown.png")}
            />
          </View>
        )}
        {topText === "Costume" && (
          <View style={styles.costumeCon}>
            <Text style={styles.bottomText}>{costumeQuantity}</Text>
          </View>
        )}
        {topText === "Rental" && (
          // <View style={styles.RentalCon}>
          <Switch
            style={styles.switchCon}
            trackColor={{
              false: Colors.GREY.off_Grey,
              true: Colors.GREEN.default,
            }}
            thumbColor={rentalSwitch ? "#fff" : "#fff"}
            ios_backgroundColor={Colors.GREY.off_Grey}
            onValueChange={onRentalSwitchPress}
            value={rentalSwitch}
          />
          // </View>
        )}
        {topText === "More" && (
          <View style={styles.moreCon}>
            <Image
              style={[showMore ? styles.chevronDrop : styles.chevronRight]}
              source={
                showMore
                  ? require("../../../assets/icons/ic_greyDown.png")
                  : require("../../../assets/icons/ic_greyRight.png")
              }
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          {_renderShowInfo(Strings.Rate)}
          {_renderShowInfo(Strings.Costume)}
          {_renderShowInfo(Strings.Rental)}
          {_renderShowInfo(Strings.More)}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: Colors.BLUE.withOpacity,
    paddingStart: wp(6),
    paddingEnd: wp(3),
    height: isTab ? hp(15) : IS_IPHONE_X ? hp(11) : hp(12),
  },
  headerCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  chevronDown: {
    marginStart: wp(1),
    tintColor: Colors.GREY.default,
    resizeMode: "contain",
    width: wp(2.5),
    height: hp(1.5),
  },
  summaryImage: {
    width: wp(13),
    height: wp(13),
  },
  rateCon: {
    marginTop: Platform.OS === "ios" ? hp(0.5) : 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  switchCon: {
    marginTop: isTab ? hp(0.5) : Platform.OS === "ios" ? hp(-0.5) : hp(-0.6),
    transform: [
      { scaleX: isTab ? 0.9 : Platform.OS === "ios" ? 0.6 : 0.8 },
      { scaleY: isTab ? 0.9 : Platform.OS === "ios" ? 0.6 : 0.8 },
    ],
  },
  RentalCon: {
    // marginTop: isTab ? hp(0.5) : Platform.OS === "ios" ? hp(-0.5) : hp(-1),
    padding: 0,
    borderWidth: 1,
  },
  costumeCon: {
    marginTop: Platform.OS === "ios" ? hp(0.5) : 0,
  },
  moreCon: {
    marginTop: Platform.OS === "ios" ? hp(1) : hp(0.3),
  },
  weekDaysText: {
    flex: 1,
    marginStart: wp(4),
    alignSelf: "center",
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: IS_IPHONE_X ? 20 : 18,
    color: Colors.GREY.darkWithOpacity,
  },
  chevronRightCon: {
    padding: hp(0.4),
    marginRight: 3,
  },
  chevronDrop: {
    resizeMode: "contain",
    width: isTab ? wp(2.2) : wp(2.5),
    height: isTab ? hp(1.3) : hp(1.3),
    tintColor: Colors.GREY.default,
  },
  chevronRight: {
    resizeMode: "contain",
    width: isTab ? wp(2.8) : wp(2),
    height: isTab ? hp(1.8) : hp(1.3),
    tintColor: Colors.GREY.default,
  },
  dontMenuCon: {
    marginEnd: wp(3),
    padding: wp(1.3),
  },
  dontMenu: {
    resizeMode: "contain",
    width: wp(2),
    height: hp(2),
  },
  showInfoContainer: {
    width: wp(22),
    height: isTab ? hp(10.5) : IS_IPHONE_X ? hp(7.5) : hp(8.5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(2),
  },
  topText: {
    fontFamily: Fonts.SFPROTEXT.Semibold,
    fontWeight: "600",
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
  },
  bottomText: {
    fontFamily: Fonts.ROBOTO.Medium,
    fontWeight: "500",
    fontSize: isTab ? wp(2.5) : IS_IPHONE_X ? 13 : 11,
    color: Colors.GREY.default,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  borderLine: {
    marginTop: hp(2.5),
    marginBottom: hp(2.5),
    borderWidth: Platform.OS === "ios" ? 0.5 : 0.17,
    borderColor: Colors.GREY.default,
    opacity: 0.2,
  },
});

export default PerformorStatus;
