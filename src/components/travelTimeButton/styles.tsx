import { Platform, StyleSheet } from "react-native";
import { IS_IPHONE_X, Fonts, wp, hp, Colors, isTab } from "../../constants";
const styles = StyleSheet.create({
  buttonCon: {
    width: wp(20),
    height: hp(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(3),
  },
  text: {
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    color: Colors.WHITE.default,
  },
});

export default styles;
