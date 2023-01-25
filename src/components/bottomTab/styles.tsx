import { StyleSheet } from "react-native";
import { IS_IPHONE_X, Fonts, wp, hp, Colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE.default,
    // backgroundColor: 'red',
    paddingVertical: hp(1),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  shading: {
    paddingTop: hp(1),
    shadowColor: Colors.GREY.default,
    shadowOffset: {
      width: wp(0),
      height: hp(-0.5),
    },
    shadowRadius: 1,
  },
  shadowCoverage: {
    backgroundColor: Colors.WHITE.default,
    height: hp(0.1),
    elevation: 2,
  },
});

export default styles;
