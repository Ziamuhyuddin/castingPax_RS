import React from "react";
import {Colors, Fonts, IS_IPHONE_X, hp, wp, isTab} from "../../../constants";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface SectionHeader {
    title?:string;
    onPress?:any;
    isOpen?:boolean;
}

const SectionHeader = (props:SectionHeader) => {
    const {title,onPress,isOpen} = props
    return(
        <>
            <View style={styles.container}>

                <View
                    style={styles.titleDropDown}>
                    <Text style={styles.mainHeading}>{title}</Text>

                </View>
            </View>
        </>
    )

}

const styles=  StyleSheet.create({
    container:{
        backgroundColor: Colors.GREY.gray6,
        paddingVertical: hp(1),
        paddingHorizontal:wp(5),

        flexDirection: 'row',
        alignItems: 'center',
    },
    icSquare:{
        resizeMode:'contain',
        width: 12,
        height: 12
    },
    mainHeading: {
        alignSelf: 'center',
        color: Colors.GREY.default,
        fontFamily: Fonts.ROBOTO.Bold,
        fontSize: isTab?wp(2.5):IS_IPHONE_X ? 14 : 12,
        fontWeight: '600',
    },
    titleDropDown:{
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
    },
    dropDownIcon: {
        alignSelf: 'flex-end',
        resizeMode: 'contain',
        width: wp(4),
        height: wp(4),
    },
    arrowUpIcon:{
        transform: [{scaleY: -1}],
        alignSelf: 'flex-end',
        resizeMode: 'contain',
        width: wp(4),
        height: wp(4),
    },
})

export default SectionHeader
