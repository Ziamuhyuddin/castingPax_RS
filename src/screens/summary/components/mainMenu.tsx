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

interface MainMenu {
  visible?: boolean;
  onSidePress?: any;
}

const MainMenu: FC<MainMenu> = (props: MainMenu) => {
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
            icon={require('../../../assets/icons/ic_add_BG.png')}
            title={Strings.Add_BG_Coordinator}
          />
          <IconTitle
            title={Strings.BG_Coordinators}
            icon={require('../../../assets/icons/ic_coordinators.png')}
          />
          <IconTitle
            title={Strings.Share}
            icon={require('../../../assets/icons/ic_share.png')}
          />
          <IconTitle
            title={Strings.Print}
            icon={require('../../../assets/icons/ic_printer.png')}
          />
          <IconTitle
            title={Strings.Finalize}
            icon={require('../../../assets/icons/ic_finalize.png')}
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

export default MainMenu;
