import React, {FC} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Strings} from '../../constants';
import {Button, Header} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface codeVerification {
  navigation?: any;
}

const CodeVerification: FC<codeVerification> = (props: codeVerification) => {
  const {navigation} = props;

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          extraHeight={-90}>
          <Header
            leftIcon={require('../../assets/icons/ic_arrow_left.png')}
            leftIconPress={() => navigation.pop()}
          />
          <View style={styles.headerPadding}>
            <Text style={styles.codeText}>{Strings.Code}</Text>
            <Text style={styles.instructionText}>
              {Strings.Code_Screen_instruction}
            </Text>
          </View>
          <View style={styles.screenPadding}>
            <View style={styles.btCon}>
              <Button
                title={Strings.Request}
                large
              />
            </View>
            <TouchableOpacity style={styles.sendTextCon}>
              <Text style={styles.sendText}>{Strings.Send_Again}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default CodeVerification;
