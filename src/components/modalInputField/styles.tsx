import { Platform, StyleSheet } from "react-native";
import { IS_IPHONE_X, Fonts, wp, hp, Colors, isTab } from "../../constants";
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    flex: 1,
  },
  inputField: {
    padding: 0,
    // marginBottom: hp(3.1),
    // paddingBottom: hp(3.1),
    paddingHorizontal: wp(2),
    paddingVertical: Platform.OS === "ios" ? hp(1.3) : hp(0.7),
    borderRadius: wp(2),
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    fontFamily: Fonts.SFPROTEXT.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 16 : 14,
    fontWeight: "400",
  },
});

export default styles;
