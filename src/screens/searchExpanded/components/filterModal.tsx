import React, {FC} from 'react';
import {
  Modal,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  Strings,
  wp,
  Fonts,
  isTab,
  IS_IPHONE_X,
} from '../../../constants';

interface ProfileMenu {
  visible?: boolean;
  onSidePress?(): void;
  onAZPress?(): void;
  onZAPress?(): void;
}

const FilterModal: FC<ProfileMenu> = (props: ProfileMenu) => {
  const {visible, onSidePress, onAZPress, onZAPress} = props;

  return (
    <>
      <Modal animationType='fade' transparent={true} visible={visible}>
        <TouchableWithoutFeedback onPress={onSidePress}>
          <View style={styles.transparentView} />
        </TouchableWithoutFeedback>
        <View style={styles.modalCon}>
          <SafeAreaView />
          <TouchableOpacity
            style={[styles.filterModalTextCon]}
            onPress={onAZPress}
          >
            <Text style={styles.filterModalText}>Z-A</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterModalTextCon]}
            onPress={onZAPress}
          >
            <Text style={styles.filterModalText}>A-Z</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filterModalTextCon]}>
            <Text style={styles.filterModalText}>Hide Wrapped BG</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
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
  filterModalTextCon: {
    // backgroundColor: "red",
    paddingHorizontal: isTab ? wp(1.5) : wp(3),
    paddingVertical: isTab ? wp(4) : wp(6),
    // alignItems: "center",
    // flexDirection: "row",
    borderBottomColor: Colors.GREY.default,
    borderBottomWidth: 0.3,
  },
  filterModalText: {
    // flex: 1,
    // backgroundColor: 'orange',
    fontWeight: '400',
    marginStart: wp(5),
    fontFamily: Fonts.ROBOTO.Regular,
    fontSize: isTab ? wp(3) : IS_IPHONE_X ? 16 : 14,
    color: Colors.GREY.darkWithOpacity,
  },
});

export default FilterModal;
