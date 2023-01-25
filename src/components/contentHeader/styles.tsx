import {Platform, StyleSheet} from "react-native";
import {Colors, Fonts, hp, IS_IPHONE_X, isTab, wp} from "../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BLUE.withOpacity,
        height: isTab?hp(19):IS_IPHONE_X ? hp(15) : hp(16),
    },
    headerCon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    thumbImageCon: {
        paddingTop: hp(1),
        paddingLeft: wp(6),
        // backgroundColor: 'red'
    },
    thumbImage: {
        borderRadius:wp(2),
        width: isTab?wp(12):wp(13),
        height: isTab?wp(12):wp(13),
    },
    weekDaysText: {
        flex: 1,
        marginStart: isTab?wp(3):wp(4),
        fontWeight: '400',
        alignSelf: 'center',
        fontFamily: Fonts.ROBOTO.Regular,
        fontSize: isTab?wp(3.2):IS_IPHONE_X ? 18 : 16,
        color: Colors.GREY.darkWithOpacity,
    },
    chevronRightCon: {
        padding: hp(0.4),
        marginRight: 3,
    },
    chevronRight: {
        transform: [{scaleX: -1}],
        resizeMode: 'contain',
        width: wp(2.5),
        height: hp(2),
    },
    barcodeCon: {
        marginEnd: wp(3),
        padding: wp(1.3),
    },
    icBarcode: {
        resizeMode: 'contain',
        width: isTab?wp(5):wp(6),
        height: isTab?wp(6):wp(7),
    },
    showInfoContainer: {
        // width: wp(20),
        // height: IS_IPHONE_X ? hp(7.5) : hp(8.5),
        // paddingHorizontal:wp(6),
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        fontFamily: Fonts.SFPROTEXT.Semibold,
        fontWeight: '600',
        fontSize: isTab?wp(3):IS_IPHONE_X ? 16 : 14,
        color: Colors.GREY.darkWithOpacity,
    },
    bottomText: {
        marginTop: Platform.OS === 'ios' ? hp(0.6) : 0,
        fontFamily: Fonts.ROBOTO.Medium,
        fontWeight: '500',
        fontSize: isTab?wp(2.8):IS_IPHONE_X ? 14 : 12,
        color: Colors.GREY.default,
    },
    infoContainer: {
        marginTop: hp(2),
        paddingHorizontal:wp(7),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    borderLine: {
        marginTop: hp(2.5),
        marginBottom: hp(2.5),
        borderWidth: Platform.OS === 'ios' ? 0.5 : 0.17,
        borderColor: Colors.GREY.default,
        opacity: 0.2,
    },
    lineVertical:{
        marginRight: isTab?wp(-9):wp(-4.5),
        marginLeft: isTab?wp(-7):wp(-1),
        height:isTab?hp(6):hp(5),
        borderWidth: isTab?1:0.5 ,
        borderColor: Colors.GREY.default,
        backgroundColor: Colors.GREY.default,
        opacity: 0.2,
    }
});

export default styles
