import React, {FC} from 'react';
import {
  Image,
  Modal,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Share,
  Alert,
} from 'react-native';

import {IconTitle} from '../../../components';
import {isTab, Strings} from '../../../constants';
import {Colors, Fonts, hp, IS_IPHONE_X, wp} from '../../../constants';

interface MatrixHeader {
  navigation?: any;
  onArrowPress?: any;
  dotIconPress?: any;
  visible?: boolean;
  onSidePress?: any;
  value?: string;
  onChangeText?: any;
  onSearchPress?: any;
}

const MatrixHeader: FC<MatrixHeader> = (props: MatrixHeader) => {
  const {
    visible,
    onSidePress,
    onArrowPress,
    dotIconPress,
    value,
    onChangeText,
    onSearchPress,
  } = props;

  const onSharePress = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert('', error.message);
    }
  };
  return (
    <>
      <View style={[styles.headerCon, styles.shading]}>
        <View style={styles.headerContent}>
          <View style={styles.searchCon}>
            <TouchableOpacity style={styles.leftIconCon} onPress={onArrowPress}>
              <Image
                style={styles.leftIcon}
                source={require('../../../assets/icons/ic_arrow_left.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onSearchPress}
              style={styles.titleIconCon}
            >
              {/*<TextInput*/}
              {/*  autoFocus={false}*/}
              {/*  style={styles.inputField}*/}
              {/*  value={value}*/}
              {/*  editable={false}*/}
              {/*  onChangeText={onChangeText}*/}
              {/*  placeholderTextColor={Colors.GREY.darkWithOpacity}*/}
              {/*  placeholder={Strings.Search}*/}
              {/*/>*/}
              <Text style={styles.inputField}>
                {Strings.Search_coordinator_by_name}
              </Text>
              <Image
                style={styles.rightIcon}
                source={require('../../../assets/icons/ic_search.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={dotIconPress} style={styles.dotIconCon}>
            <Image
              style={styles.dotIcon}
              source={require('../../../assets/icons/ic_dot_menu.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {visible && (
        <>
          <Modal animationType='fade' transparent={true} visible={visible}>
            <TouchableWithoutFeedback onPress={onSidePress}>
              <View style={styles.transparentView} />
            </TouchableWithoutFeedback>
            <View style={styles.modalCon}>
              <SafeAreaView />
              <IconTitle
                icon={require('../../../assets/icons/ic_add_BG.png')}
                title={Strings.Add_BG_Coordinator}
              />
              <IconTitle
                title={Strings.BG_Coordinators}
                icon={require('../../../assets/icons/ic_coordinators.png')}
              />
              {/* <IconTitle
                onPress={onSharePress}
                title={Strings.Share}
                icon={require('../../../assets/icons/ic_share.png')}
              />
              <IconTitle
                title={Strings.Print}
                icon={require('../../../assets/icons/ic_printer.png')}
              /> */}
              <IconTitle
                title={Strings.Finalize}
                icon={require('../../../assets/icons/ic_finalize.png')}
                bottomLine={true}
              />
            </View>
          </Modal>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  shading: {
    backgroundColor: Colors.WHITE.default,
    shadowOffset: {
      width: wp(0),
      height: hp(0.2),
    },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    elevation: 3,
  },
  customShading: {
    backgroundColor: Colors.WHITE.default,
    shadowOffset: {
      width: wp(0),
      height: hp(0.1),
    },
    shadowRadius: 0,
    shadowOpacity: 0.1,
    elevation: 1.2,
  },
  headerCon: {
    backgroundColor: Colors.WHITE.default,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
    height: isTab ? hp(9.5) : hp(8.2),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchCon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: Colors.GREY.default,
    borderRadius: wp(10),
    paddingVertical: hp(0.6),
    width: wp(85),
    height: isTab ? hp(7) : hp(6),
    paddingHorizontal: wp(5),
  },
  leftIconCon: {
    // padding: wp(3),
  },
  inputField: {
    flex: 1,
    marginLeft: wp(4),
    padding: 0,
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(3.3) : IS_IPHONE_X ? 16 : 14,
    color: Colors.GREY.darkWithOpacity,
    fontWeight: '500',
  },
  leftIcon: {
    resizeMode: 'contain',
    width: isTab ? wp(3.5) : wp(4.5),
    height: isTab ? hp(3.5) : hp(4.5),
  },
  titleIconCon: {
    // backgroundColor:'red',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dotIconCon: {
    marginStart: wp(2.5),
    padding: wp(1),
  },
  dotIcon: {
    resizeMode: 'contain',
    width: isTab ? wp(3.7) : wp(3.2),
    height: isTab ? hp(3.7) : hp(3.2),
  },
  rightIcon: {
    resizeMode: 'contain',
    width: isTab ? wp(3.7) : wp(5),
    height: isTab ? wp(3.7) : hp(5),
  },

  headerText: {
    alignSelf: 'center',
    marginLeft: wp(5),
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: IS_IPHONE_X ? 20 : 18,
    fontWeight: '500',
    color: Colors.GREY.darkWithOpacity,
  },
  transparentView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.54)',
    flex: 1,
  },
  modalCon: {
    backgroundColor: Colors.WHITE.default,
    marginStart: wp(27),
    flex: 1,
  },
  btCustomStyle: {
    width: wp(25),
    height: Platform.OS === 'ios' ? hp(4) : hp(5),
  },
  textCustomStyle: {
    fontFamily: Fonts.ROBOTO.Medium,
    fontSize: IS_IPHONE_X ? 15 : 14,
    fontWeight: '500',
  },
});

export default MatrixHeader;
