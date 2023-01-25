import React, { useRef, FC } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Share,
  Alert,
} from "react-native";
import styles from "./styles";
import { IconTitle } from "../index";
import Button from "../button";
import { Colors, Strings } from "../../constants";

interface header {
  title?: string;
  navigation?: any;
  leftIcon?: any;
  rightIcon?: any;
  leftIconPress?: any;
  rightIconPress?: any;
  visible?: boolean;
  onSidePress?: any;
  buttonTitle?: string;
  btPress?: any;
  customHeaderText?: any;
  value?: string;
  onChangeText?: any;
  inputField?: boolean;
  touchableTitle?: string;
  onFilterPress?(): void;
  onTitlePress?(): void;
  disable?: boolean;
  hideShareAndPDF?: boolean;
  rightIconHorizental?: boolean;
  titleCenter?: boolean;
}

const Header: FC<header> = (props: header) => {
  const {
    visible,
    onSidePress,
    title,
    leftIcon,
    rightIcon,
    leftIconPress,
    rightIconPress,
    buttonTitle,
    btPress,
    customHeaderText,
    value,
    onChangeText,
    inputField,
    touchableTitle,
    onFilterPress,
    disable,
    onTitlePress,
    hideShareAndPDF,
    rightIconHorizental,
    titleCenter,
  } = props;

  const inputRef = useRef();
  const onSharePress = async () => {
    return;
    // try {
    //   const result = await Share.share({
    //     message:
    //       'React Native | A framework for building native apps using React',
    //   });
    //   if (result.action === Share.sharedAction) {
    //     if (result.activityType) {
    //       // shared with activity type of result.activityType
    //     } else {
    //       // shared
    //     }
    //   } else if (result.action === Share.dismissedAction) {
    //     // dismissed
    //   }
    // } catch (error: any) {
    //   Alert.alert('', error.message);
    // }
  };
  return (
    <>
      <View
        style={[
          styles.headerCon,
          buttonTitle ? styles.customShading : styles.shading,
        ]}
      >
        {leftIcon && (
          <TouchableOpacity style={styles.leftIconCon} onPress={leftIconPress}>
            <Image style={styles.leftIcon} source={leftIcon} />
          </TouchableOpacity>
        )}
        <View style={styles.titleIconCon}>
          {title && (
            <TouchableOpacity
              style={titleCenter ? styles.centerTextCon : styles.headerTextCon}
              onPress={onTitlePress}
              disabled={!disable}
            >
              <Text
                numberOfLines={1}
                style={[
                  styles.headerText,
                  customHeaderText && styles.customHeaderText,
                ]}
              >
                {title}
              </Text>
            </TouchableOpacity>
          )}

          {touchableTitle && (
            <>
              <TouchableOpacity
                onPress={onTitlePress}
                style={{ marginStart: 15 }}
              >
                <Text
                  style={[
                    styles.headerText,
                    {
                      paddingEnd: 40,
                      paddingVertical: 5,
                    },
                    customHeaderText && styles.customHeaderText,
                  ]}
                >
                  {touchableTitle}
                </Text>
              </TouchableOpacity>
            </>
          )}
          {inputField && (
            <TextInput
              // autoFocus={true}
              //   ref={inputRef}
              // onLayout={()=> inputRef.current.focus()}
              style={styles.inputField}
              value={value}
              onChangeText={onChangeText}
              placeholderTextColor={Colors.GREY.darkWithOpacity}
              placeholder={Strings.Search_BY_Name}
            />
          )}
          {onFilterPress && (
            <>
              <TouchableOpacity
                style={styles.filterIconCon}
                onPress={onFilterPress}
              >
                <Image
                  style={styles.filterIcon}
                  resizeMode="contain"
                  source={require("../../assets/icons/ic_filter.png")}
                />
              </TouchableOpacity>
            </>
          )}
          {rightIcon && (
            <TouchableOpacity
              style={styles.rightIconCon}
              onPress={rightIconPress}
            >
              <Image
                style={
                  rightIconHorizental
                    ? styles.horizentalRighticon
                    : styles.rightIcon
                }
                source={rightIcon}
              />
            </TouchableOpacity>
          )}
          {buttonTitle && (
            <Button
              onPress={btPress}
              title={buttonTitle}
              btCustomStyle={styles.btCustomStyle}
              textCustomStyle={styles.textCustomStyle}
            />
          )}
        </View>
      </View>
      {visible && (
        <>
          <Modal animationType="fade" transparent={true} visible={visible}>
            <TouchableWithoutFeedback onPress={onSidePress}>
              <View style={styles.transparentView} />
            </TouchableWithoutFeedback>
            <View style={styles.modalCon}>
              <SafeAreaView />
              <IconTitle
                icon={require("../../assets/icons/ic_add_BG.png")}
                title={Strings.Add_BG_Coordinator}
              />
              <IconTitle
                title={Strings.BG_Coordinators}
                icon={require("../../assets/icons/ic_coordinators.png")}
              />
              {hideShareAndPDF ? (
                <></>
              ) : (
                <>
                  <IconTitle
                    onPress={onSharePress}
                    title={Strings.Share}
                    icon={require("../../assets/icons/ic_share.png")}
                  />
                  <IconTitle
                    title={Strings.Print}
                    icon={require("../../assets/icons/ic_printer.png")}
                  />
                </>
              )}
              <IconTitle
                title={Strings.Finalize}
                icon={require("../../assets/icons/ic_finalize.png")}
                bottomLine={true}
              />
            </View>
          </Modal>
        </>
      )}
    </>
  );
};

export default Header;
