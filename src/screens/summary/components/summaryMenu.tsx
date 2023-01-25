import React, {FC} from 'react';
import {
  Modal,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {Colors, Strings, wp} from '../../../constants';
import {IconTitle} from '../../../components';

interface SummaryMenu {
  visible?: boolean;
  onSidePress?: any;
}

const SummaryMenu: FC<SummaryMenu> = (props: SummaryMenu) => {
  const {visible, onSidePress} = props;

  return (
    <>
      <Modal animationType="fade" transparent={true} visible={visible}>
        <TouchableWithoutFeedback onPress={onSidePress}>
          <View style={styles.transparentView} />
        </TouchableWithoutFeedback>
        <View style={styles.modalCon}>
          <SafeAreaView />
          <IconTitle
            icon={require('../../../assets/icons/ic_share.png')}
            title={Strings.Share}
          />
          <IconTitle
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
          />
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
});

export default SummaryMenu;
