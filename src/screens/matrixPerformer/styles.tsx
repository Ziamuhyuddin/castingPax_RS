import { Platform, StyleSheet } from "react-native";
import { IS_IPHONE_X, Fonts, wp, hp, Colors, isTab } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE.default,
    flex: 1,
  },
  screenPadding: {
    backgroundColor: Colors.WHITE.default,
    flex: 1,
    // paddingHorizontal: wp(6),
  },
  topMargin: {
    marginTop: hp(0.1),
  },
  buttonCon: {
    paddingHorizontal: wp(2),
    marginTop: hp(1.3),
    marginBottom: hp(1.3),
    flexDirection: "row",
    justifyContent: "space-around",
  },

  subHeading: {
    marginStart: wp(2),
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    fontWeight: "500",
    fontFamily: Fonts.ROBOTO.Medium,
    color: Colors.BLACK.Opacity_8,
  },

  btSignIn: {
    width: wp(43),
    height: Platform.OS === "ios" ? hp(4.5) : hp(5),
  },
  btLunch: {
    width: wp(43),
    height: Platform.OS === "ios" ? hp(4.5) : hp(5),
  },
  statusText: {
    marginEnd: wp(7),
    fontWeight: "500",
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    color: Colors.GREEN.primary,
  },
  chevronDown: {
    resizeMode: "contain",
    width: wp(3),
    height: hp(1),
  },
  chevronUp: {
    tintColor: Colors.GREEN.default,
    transform: [{ scaleY: -1 }],
    resizeMode: "contain",
    width: wp(3),
    height: hp(1),
  },
  squareGrey: {
    tintColor: Colors.GREY.default,
    resizeMode: "contain",
    width: isTab ? wp(2.2) : wp(3),
    height: isTab ? hp(2.2) : hp(3),
  },
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  performerList: {
    padding: 0,
    borderColor: Colors.GREY.default,
    paddingVertical: hp(1.8),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingEnd: wp(4),
    paddingStart: wp(7),
  },
  performerImage: {
    borderRadius: wp(1.5),
    marginStart: wp(2.5),
    width: isTab ? wp(9) : wp(11),
    height: isTab ? wp(8.5) : wp(10.5),
  },
});

export default styles;
