import { StyleSheet } from "react-native";
import { IS_IPHONE_X, Fonts, wp, hp, Colors, isTab } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREY.bg,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
  },
  contentCon: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    paddingHorizontal: hp(2),
    // paddingVertical: hp(5),
    top: isTab ? hp(25) : hp(30),
    left: isTab ? wp(10) : wp(10),
    width: wp(80),
    height: isTab ? hp(50) : hp(40),
    backgroundColor: Colors.WHITE.default,
    borderRadius: wp(4),
  },
  iconTitleCon: {
    paddingVertical: isTab ? hp(1.5) : hp(1.2),
    flexDirection: "row",
    alignItems: "center",

    borderBottomColor: Colors.GREY.default,
  },
  ratingText: {
    marginStart: isTab ? wp(4.5) : wp(5.5),
    fontFamily: Fonts.ROBOTO.Regular,
    fontWeight: "400",
    color: Colors.GREY.darkWithOpacity,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
  },
  icRating: {
    marginStart: isTab ? wp(4) : wp(5.5),
    resizeMode: "contain",
    width: isTab ? wp(4) : wp(5),
    height: isTab ? wp(4) : wp(5),
  },
  buttons: {
    marginBottom: hp(2),
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default styles;
