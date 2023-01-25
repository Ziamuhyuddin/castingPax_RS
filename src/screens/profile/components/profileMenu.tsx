import React, {FC} from 'react';
import {
  Modal,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Colors, isTab, Strings, wp} from '../../../constants';
import {IconTitle} from '../../../components';

interface ProfileMenu {
  visible?: boolean;
  onSidePress?: any;
  onSharePress?: any;
  isloading?: boolean;
  onPrintPress?(): void;
}

const ProfileMenu: FC<ProfileMenu> = (props: ProfileMenu) => {
  const {visible, onSidePress, onSharePress, isloading, onPrintPress} = props;

  return (
    <>
      <Modal animationType='fade' transparent={true} visible={visible}>
        <TouchableWithoutFeedback onPress={onSidePress}>
          <View style={styles.transparentView} />
        </TouchableWithoutFeedback>
        <View style={styles.modalCon}>
          <SafeAreaView />
          {isloading ? (
            <ActivityIndicator
              size='small'
              style={styles.activityCon}
              color={Colors.GREEN.default}
            ></ActivityIndicator>
          ) : (
            <>
              <IconTitle
                onPress={onSharePress}
                icon={require('../../../assets/icons/ic_share.png')}
                title={Strings.Share}
              />
              <IconTitle
                onPress={onPrintPress}
                icon={require('../../../assets/icons/ic_printer.png')}
                title={Strings.Print}
              />
              {/* <IconTitle
                icon={require('../../../assets/icons/ic_save.png')}
                title={Strings.Save}
              />
              <IconTitle
                icon={require('../../../assets/icons/ic_trash.png')}
                title={Strings.Remove}
              />
              <IconTitle
                icon={require('../../../assets/icons/ic_report.png')}
                title={Strings.Report}
                bottomLine={true}
              /> */}
            </>
          )}
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
  activityCon: {
    alignItems: 'center',
    borderBottomColor: Colors.GREY.default,
    justifyContent: 'center',
    flex: 0.3,
  },
});

export default ProfileMenu;
