import { StyleSheet } from "react-native";
import { IS_IPHONE_X, Fonts, wp, hp, Colors, isTab } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE.default,
  },
  safeAreaStyle: {
    backgroundColor: Colors.WHITE.default,
  },
  screenPadding: {
    backgroundColor: Colors.WHITE.default,
    flex: 1,
    // paddingHorizontal: wp(6),
  },
  subHeading: {
    marginStart: wp(4.5),
    fontSize: isTab ? wp(2.8) : IS_IPHONE_X ? 16 : 14,
    fontWeight: "500",
    fontFamily: Fonts.ROBOTO.Medium,
    color: Colors.BLACK.Opacity_8,
  },
  flexBox: { flexDirection: "row", alignItems: "center" },
  searchExpanded: {
    padding: 0,
    borderColor: Colors.GREY.default,
    // paddingVertical: 16,
    paddingVertical: hp(1.8),
    borderWidth: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 18,
  },
  searchImage: {
    borderRadius: wp(1.5),
    marginStart: wp(2.5),
    width: isTab ? wp(9) : wp(11),
    height: isTab ? wp(8.5) : wp(10.5),
  },
});

export default styles;
