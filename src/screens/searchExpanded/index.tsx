import React, { FC, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  SectionList,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  FlatList,
} from "react-native";
import styles from "./styles";
import { Header } from "../../components";
import { Colors, sectionData, Strings } from "../../constants";
import SectionHeader from "./components/sectionHeader";
import FilterModal from "./components/filterModal";
import { useDispatch } from "react-redux";
import { savePerformerProfileRequest } from "../../store/actions";
import { useSelector } from "react-redux";

interface SearchExpanded {
  navigation?: any;
}

const SearchExpanded: FC<SearchExpanded> = (SearchExpanded) => {
  const { navigation } = SearchExpanded;
  const [isMainMenu, setIsMainMenu] = useState<boolean>(false);
  const [modalFilter, setModalFilter] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<any>(sectionData);
  const [imgError, setimgError] = useState<boolean>(false);

  const performerData = useSelector(
    (state: any) => state?.reducer?.performerProfile?.searchPerformerArr
  );

  // console.log('performerData*********', performerData);
  const dispatch = useDispatch();
  const _renderComp = (item: any, index: number, section: any) => {
    return (
      <>
        <TouchableOpacity style={styles.searchExpanded}>
          <View style={styles.flexBox}>
            <Image style={styles.searchImage} source={item.img} />
            <Text style={styles.subHeading}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  const _renderPerformer = (item: any) => {
    return (
      <>
        <TouchableOpacity
          style={styles.searchExpanded}
          onPress={() => {
            navigation.navigate("PerformerProfile", {
              perforMerItem: item?.item,
              fromSearch: true,
            });
          }}
        >
          <View style={styles.flexBox}>
            <Image
              //   onError={() => {
              //  setimgError(!imgError)
              //   }}

              style={styles.searchImage}
              source={{
                uri: item.item?.profilePicUrl.replace("http", "https"),
              }}
            />
            <Text style={styles.subHeading}>
              {item?.item?.firstName + " " + item?.item?.lastName}
            </Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  const onChangeText = (t: string) => {
    console.log("=====>", t);
    setValue(t);
    console.log("------>> value", value);
    let params = { searchText: t, type: "short", page: 1 };
    dispatch(
      savePerformerProfileRequest(params, (res: any) => {
        if (res.status === -1) {
          //Alert.alert(res.error);
          console.log("error in GET USER PDF ");
        } else {
          console.log("in PDF back Call");
        }
      })
    );
  };
  const onAZPress = () => {
    // console.log('in az press');
    // console.log('performer data------>', performerData);

    // const aftersort =
    performerData?.sort((a: any, b: any) => {
      // console.log('0000000> a', a);
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
      // return a.firstName - b.firstName;
    });
    //  console.log('after sort ', aftersort);
  };
  const onZAPress = () => {
    // console.log('in az press');
    // console.log('performer data------>', performerData);

    // const aftersort =
    performerData?.sort((a: any, b: any) => {
      // console.log('0000000> a', a);
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
      // return a.firstName - b.firstName;
    });
    // console.log('after sort ', aftersort);
  };
  return (
    <>
      <SafeAreaView style={styles.safeAreaStyle} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 25}
      >
        {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
        <View style={styles.container}>
          <Header
            leftIconPress={() => navigation.pop()}
            leftIcon={require("../../assets/icons/ic_arrow_left.png")}
            inputField
            value={value}
            onChangeText={onChangeText}
            // rightIcon={require('../../assets/icons/ic_dot_menu.png')}
            // rightIconPress={() => setIsMainMenu(true)}
            visible={isMainMenu}
            onSidePress={() => setIsMainMenu(false)}
            onFilterPress={() => setModalFilter(true)}
          />

          <View style={{ marginTop: 3 }} />
          <View style={styles.screenPadding}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={performerData}
              renderItem={(item) => _renderPerformer(item)}
            />

            {/* <SectionList
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
                sections={data}
                keyExtractor={(item, index) => JSON.stringify(item) + index}
                renderItem={({item, index, section}) =>
                  _renderComp(item, index, section)
                }
                renderSectionHeader={({section: {title, isOpen}}) => (
                  <SectionHeader title={title} isOpen={isOpen} />
                )}
              /> */}
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </KeyboardAvoidingView>
      <FilterModal
        onAZPress={onAZPress}
        onZAPress={onZAPress}
        visible={modalFilter}
        onSidePress={() => setModalFilter(false)}
      />
    </>
  );
};

export default SearchExpanded;
