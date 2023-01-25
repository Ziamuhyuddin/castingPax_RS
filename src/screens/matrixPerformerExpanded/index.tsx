import React, { FC, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Modal,
  Text,
  TouchableOpacity,
  Keyboard,
  Switch,
  KeyboardAvoidingView,
  Platform,
  LayoutAnimation,
  ActivityIndicator,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import styles from "./styles";
import mStyles from "./mStyles";
import { Colors, hp, Strings, wp } from "../../constants";
import {
  BottomTab,
  Button,
  Header,
  ContentHeader,
  RatingModal,
  CustomInputField,
  TravelTimeButton,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import PerformorStatus from "./components/performorStatus";
import {
  matrixPerformerUpdate,
  matrixUpdateTime,
  matrixPerformerRequest,
  matrixPerformerRate,
} from "../../store/actions/matrix";
import ShowMore from "./components/showMore";
import { validateLunchField, validateTravelTab } from "../../store/util";

interface MatrixPerformerExpanded {
  navigation?: any;
  route?: any;
}

const MatrixPerformerExpanded: FC<MatrixPerformerExpanded> = (
  props: MatrixPerformerExpanded
) => {
  const dispatch = useDispatch();
  const { isLoading, matrixPerformer, matrixPerfromerRateData } = useSelector(
    (state: any) => state.reducer.matrix
  );
  const { navigation, route } = props;
  const baseURL = "https://www.castingpax.com/api/static/images/";

  // console.log(
  //   'Performer Data on Matrix Performer Expanded==>: ',
  //   matrixPerformer
  // );
  // console.log(
  //   'Performer RATE Data on Matrix Performer Expanded==>: ',
  //   matrixPerfromerRateData
  // );

  const { matrixItem, atmosId } = route.params;

  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(true);
  const [isMainMenu, setIsMainMenu] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string>("");
  const [isLoader, setLoader] = useState<boolean>(true);
  const [isTabVisible, setIsTabVisible] = useState<boolean>(false);
  const [showTabModal, setShowTabModal] = useState<boolean>(false);
  const [timeValue, setTimeVlaue] = useState<any>("");
  const [distanceValue, setDistanceValue] = useState<any>("");
  const [lunchValue, setlunchValue] = useState<any>("");
  const [ndbSwitch, setNdbSwitch] = useState<boolean>(false);
  const [rentalSwitch, setRentalSwitch] = useState<boolean>(false);
  const [isSingleItem, setSingleItem] = useState<any>(null);
  const [selectedRate, setSelectedRate] = useState<any>(null);
  const [performerObj, setPerformerObj] = useState<any>(null);

  const [ratingData, setRatingData] = useState<string>("Rate 1");

  useEffect(() => {
    let rateParams = {};
    let params = {
      workingDayId: matrixItem?.id,
      atomsId: atmosId,
    };
    dispatch(
      matrixPerformerRequest(params, (data: any) => {
        console.log("res data: ==> ", data);
        if (data === "error") {
          console.log("No data=>");
        } else {
          // @ts-ignore
          const performerLists = data
            ?.filter((p: any) => p?.performerId !== null)
            .map((b: any) => ({
              ...b,
              isSelected: false,
              isMore: false,
              isStatusBar: false,
            }));
          // console.log("THIS IS WITH KEY==>", performerLists);

          dispatch(matrixPerformerUpdate(performerLists));
          setLoader(false);
          setTimeout(() => {
            setLoader(false);
          }, 5000);
        }
      })
    );

    dispatch(
      matrixPerformerRate(rateParams, (data: any) => {
        // console.log("CHICHA");
      })
    );
  }, []);

  const rates = ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5", "Custom"];

  const getSelectedList = () => {
    const selectedPerformer = matrixPerformer.filter(
      (p: any) => p.isSelected === true
    );
    return selectedPerformer;
  };

  const getUpdatedPerformerArray = (sPerformers: any, _key: any, val: any) => {
    let tempData = matrixPerformer;
    sPerformers.forEach((item: any) => {
      let index = tempData.findIndex((i: any) => i.id == item.id);
      tempData[index][_key] = val;
    });
    return tempData;
  };

  const onTabPress = (res: any) => {
    setIsSelected(res);
    // console.log("THIS IS RES:==", isSelected);
    if (res === Strings.NDB) {
      setNdbSwitch(!!getSelectedList()[0]?.NDB);
      setShowTabModal(true);
    } else if (res === Strings.Travel_Time) {
      setTimeVlaue(getSelectedList()[0]?.mileage);
      setDistanceValue(getSelectedList()[0]?.mileageType);
      setShowTabModal(true);
    } else if (res === Strings.Rental) {
      setRentalSwitch(!!getSelectedList()[0]?.isRental);
      setShowTabModal(true);
    } else if (res === Strings.Costume) {
    } else if (res === Strings.Lunch) {
      setlunchValue(getSelectedList()[0]?.lunch);
      setShowTabModal(true);
    }
  };

  const validateTIme = () => {
    if (validateTravelTab(timeValue) === null) {
      Alert.alert("", "Enter valid time");
      return false;
    } else if (validateTravelTab(distanceValue) === null) {
      Alert.alert("", "Enter valid distance");
      return false;
    } else if ((timeValue || distanceValue) == "") {
      Alert.alert("", "Enter time or distance");
      return false;
    } else {
      return true;
    }
  };

  const validateLunch = () => {
    if (lunchValue == "") {
      Alert.alert("", "Lunch field is empty");
      return false;
    } else if (validateLunchField(lunchValue) === null) {
      Alert.alert("", "Enter valid type");
      return false;
    } else {
      return true;
    }
  };

  const validateTravellingTab = () => {
    if (validateTIme()) {
      let arr = isSingleItem == null ? getSelectedList() : isSingleItem;

      let payload: any = [];
      arr.forEach((i: any) => {
        payload.push({
          ...i,
          // id: i.id,
          // workingDayId: i.workingDayId,
          // mileage: isSingleItem == null ? timeValue : isSingleItem[0].mileage,
          mileage: isSingleItem == null ? timeValue : timeValue,
          mileageType:
            // isSingleItem == null ? distanceValue : isSingleItem[0].mileageType,
            isSingleItem == null ? distanceValue : distanceValue,
        });
      });
      dispatch(matrixUpdateTime({ data: payload }));
      matrixPerformerUpdate(
        getUpdatedPerformerArray(
          arr,
          "mileage",
          // isSingleItem == null ? timeValue : isSingleItem[0].mileage
          isSingleItem == null ? timeValue : timeValue
        )
      );
      matrixPerformerUpdate(
        getUpdatedPerformerArray(
          arr,
          "mileageType",
          // isSingleItem == null ? distanceValue : isSingleItem[0].mileageType
          isSingleItem == null ? distanceValue : distanceValue
        )
      );
      setIsSelected("");
      setSingleItem(null);
      setShowTabModal(false);
      // setShowTabModal(false);
    }
  };

  const onMileagePress = (item: any) => {
    setSingleItem(item);
    setIsSelected(Strings.Travel_Time);
    setShowTabModal(true);
    setTimeVlaue(item[0]?.mileage);
    setDistanceValue(item[0]?.mileageType);
    // validateTravellingTab(item);
    // let temp = matrixPerformer;
    // if (temp[index].isSelected) {
    //   dispatch(matrixPerformerUpdate(temp));
    //   checkMileageView(temp);
    // } else {
    //   Alert.alert("", "Select this performer first");
    // }
  };

  const validateLunchTab = () => {
    if (validateLunch()) {
      let arr = getSelectedList();

      let payload: any = [];
      arr.forEach((i: any) => {
        payload.push({
          ...i,
          // id: i.id,
          // workingDayId: i.workingDayId,
          lunch: lunchValue,
        });
      });
      dispatch(matrixUpdateTime({ data: payload }));

      matrixPerformerUpdate(getUpdatedPerformerArray(arr, "lunch", lunchValue));
      setIsSelected("");
      setSingleItem(null);
      setShowTabModal(false);
      // setShowTabModal(false);
    }
  };

  const onRentalSwitchPress = (item?: any) => {
    let arr = item ? item : getSelectedList();

    let payload: any = [];
    arr.forEach((i: any) => {
      payload.push({
        // id: i.id,
        // workingDayId: i.workingDayId,
        ...i,
        isRental: item ? !item[0].isRental : !rentalSwitch,
        // isRental: !item[0].isRental,
      });
    });
    dispatch(matrixUpdateTime({ data: payload }));
    matrixPerformerUpdate(
      getUpdatedPerformerArray(
        arr,
        "isRental",
        item ? !item[0].isRental : !rentalSwitch
      )
    );

    if (!item) {
      setRentalSwitch(!rentalSwitch);
    }
    setIsSelected("");
    setSingleItem(null);
    setShowTabModal(false);
  };

  const onNDBSwitchPress = (item?: any) => {
    let arr = item ? item : getSelectedList();

    let payload: any = [];
    arr.forEach((i: any) => {
      payload.push({
        // id: i.id,
        // workingDayId: i.workingDayId,
        ...i,
        NDB: item ? !item[0].NDB : !ndbSwitch,
        // NDB: !item[0].NDB,
      });
    });
    dispatch(matrixUpdateTime({ data: payload }));
    matrixPerformerUpdate(
      getUpdatedPerformerArray(arr, "NDB", item ? !item[0].NDB : !ndbSwitch)
    );
    if (!item) {
      setNdbSwitch(!ndbSwitch);
    }
    setIsSelected("");
    setSingleItem(null);
    setShowTabModal(false);
  };

  const onPerformerPress = (item: any, index: number) => {
    let temp = matrixPerformer;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    temp[index].isStatusBar = !temp[index].isStatusBar;
    temp[index].isMore = false;
    dispatch(matrixPerformerUpdate(temp));
    // item.isStatusBar = !item.isStatusBar;
    // setShowMore(false);
  };

  const onMorePress = (index: any) => {
    let temp = matrixPerformer;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    temp[index].isMore = !temp[index].isMore;
    dispatch(matrixPerformerUpdate(temp));
    // setShowMore(!showMore);
  };
  const onBlogPress = (res: any, index: number, item: any) => {
    console.log("THIS OS RES:++", res);
    if (res === "Rate") {
      // setSingleItem(item);
      setPerformerObj(item);
      setShowModal(true);
    } else if (res === "More") {
      onMorePress(index);
    }
  };

  const checkTabView = (array: any) => {
    let arrayToCheck = array ? array : matrixPerformer;
    const list = arrayToCheck.filter((p: any) => p.isSelected === true);
    if (list.length > 0) {
      setIsTabVisible(true);
    } else {
      setIsTabVisible(false);
    }
  };

  const onCheckboxLongPress = (element?: any) => {
    let check = matrixPerformer.some((item: any) => item.isSelected == true);
    let temp = matrixPerformer.map((item: any) => ({
      ...item,
      isSelected: check ? false : true,
    }));
    if (check) {
      Alert.alert("", "All DeSelected");
    } else {
      Alert.alert("", "All Selected");
    }
    dispatch(matrixPerformerUpdate(temp));
    checkTabView(temp);
  };

  const onPerformerCheckBoxPress = (index: number) => {
    let temp = matrixPerformer;
    temp[index].isSelected = !temp[index].isSelected;
    dispatch(matrixPerformerUpdate(temp));
    checkTabView(temp);
  };

  const onPerfomerNamePress = (item: any) => {
    navigation.navigate("PerformerProfile", {
      perforMerItem: item,
    });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(true);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [isKeyboardVisible]);

  const _renderComp = (item: any, index: number) => {
    // console.log('this is P IMAGE==>', `${baseURL}${item?.performerImage}`);
    return (
      <>
        <TouchableOpacity
          onLongPress={() => onCheckboxLongPress(item)}
          onPress={() => onPerformerPress(item, index)}
          style={[
            styles.matrixExpanded,
            { borderBottomWidth: item?.isStatusBar ? 0 : 0.4 },
          ]}
        >
          <View style={styles.flexBox}>
            <TouchableOpacity
              onLongPress={() => onCheckboxLongPress()}
              onPress={() => onPerformerCheckBoxPress(index)}
              style={styles.icCheckBoxGreyCon}
            >
              <Image
                style={
                  item.isSelected ? styles.icCheckBox : styles.icCheckBoxGrey
                }
                source={
                  item.isSelected
                    ? require("../../assets/icons/ic_radio_button_checked_FILL.png")
                    : require("../../assets/icons/ic_radio_button_unchecked.png")
                }
              />
            </TouchableOpacity>

            <Image
              style={styles.performerImage}
              // source={require('../../assets/images/performer_img.png')}
              source={{ uri: `${baseURL}${item?.performerImage}` }}
            />
            <TouchableOpacity
              onPress={() => onPerfomerNamePress(item)}
              style={{ paddingVertical: hp(2) }}
            >
              <Text style={styles.subHeading}>
                {item?.performerName.length < 14
                  ? `${item?.performerName}`
                  : `${item?.performerName.substring(0, 15)}...`}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flexBox}>
            <Text style={styles.statusText}>{item?.status}</Text>
            <Image
              style={item?.isStatusBar ? styles.chevronUp : styles.chevronDown}
              source={require("../../assets/icons/ic_chevronDown.png")}
            />
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView />

        <Header
          leftIconPress={() => {
            // dispatch(matrixPerformerUpdate([]));
            navigation.pop();
          }}
          leftIcon={require("../../assets/icons/ic_arrow_left.png")}
          title={"Search coordinator by name"}
          onTitlePress={() => navigation.navigate("SearchExpanded")}
          disable
          customHeaderText
          rightIcon={require("../../assets/icons/ic_dot_menu.png")}
          rightIconPress={() => setIsMainMenu(true)}
          visible={isMainMenu}
          onSidePress={() => setIsMainMenu(false)}
          hideShareAndPDF
        />
        {showModal ? (
          <RatingModal
            data={matrixPerfromerRateData}
            selectedRate={performerObj?.rate}
            setModal={setShowModal}
            onSavePress={(rate: any) => {
              let payload = [{ ...performerObj, rate: rate }];
              dispatch(matrixUpdateTime({ data: payload }));
              setShowModal(false);
              let ua = getUpdatedPerformerArray(
                [{ ...performerObj, rate: rate }],
                "rate",
                rate
              );
              dispatch(matrixPerformerUpdate(ua));
            }}
          />
        ) : (
          <>
            <View style={styles.topMargin} />
            <ContentHeader
              showThumbnail={matrixItem.showId.showImage}
              dayName={matrixItem.showId.title}
              invited={`${matrixItem?.bgPerformerCount}/${
                matrixItem?.totalBgPerformers < 1 || "undefined" || null
                  ? "0"
                  : matrixItem?.totalBgPerformers
              }`}
              matrixItem={matrixItem}
              day={matrixItem.title}
              coordinator={matrixItem.bgCoordinator.length}
              BG={matrixItem.bgPerformerCount}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scrollStyle}
            >
              {isLoader ? (
                <View />
              ) : matrixPerformer.length ? (
                matrixPerformer.map((item: any, index: number) => {
                  const costume = item?.costume;
                  return (
                    <>
                      {_renderComp(item, index)}
                      {item?.isStatusBar && (
                        <PerformorStatus
                          showMore={item?.isMore}
                          rateText={item?.rate == null ? "- - -" : item?.rate}
                          costumeQuantity={costume == null ? "0" : costume}
                          rentalSwitch={item?.isRental}
                          onRentalSwitchPress={() =>
                            onRentalSwitchPress([item])
                          }
                          onPress={(res: any) => onBlogPress(res, index, item)}
                        />
                      )}
                      {item?.isMore && item?.isStatusBar && (
                        <>
                          <View style={styles.margin} />
                          <ShowMore
                            startingText={"Call Time"}
                            endingText={
                              item?.callTime ? item?.callTime : "- - -"
                            }
                          />
                          <ShowMore
                            startingText={"Sign In Time"}
                            endingText={
                              item?.signInTime ? item?.signInTime : "- - -"
                            }
                          />
                          <ShowMore
                            startingText={"Union no"}
                            endingText={item?.unionNo ? item?.unionNo : "- - -"}
                          />
                          <ShowMore
                            startingText={"Role"}
                            endingText={item?.role ? item?.role : "- - -"}
                          />
                          <ShowMore
                            startingText={"NDB"}
                            btSwitch
                            ndbSwitch={item?.NDB}
                            onNdbSwitchPress={() => onNDBSwitchPress([item])}
                          />
                          <ShowMore
                            startingText={"Lunch"}
                            endingText={item?.lunch ? item?.lunch : "- - -"}
                          />
                          <ShowMore
                            startingText={"Mileage"}
                            edit
                            onMileagePress={() => {
                              onMileagePress([item]);
                            }}
                          />
                          <ShowMore
                            startingText={"Note"}
                            endingText={
                              item?.note
                                ? item?.note.length < 22
                                  ? `${item?.note}`
                                  : `${item?.note.substring(0, 21)}...`
                                : "- - -"
                            }
                          />
                        </>
                      )}
                    </>
                  );
                })
              ) : (
                <View style={styles.sublistCon}>
                  <View style={styles.flexBox}>
                    <View style={styles.checkBoxCon}>
                      <Image
                        style={styles.squareGrey}
                        source={require("../../assets/icons/ic_radio_button_unchecked.png")}
                      />
                    </View>
                    <Text style={styles.subHeading}>
                      {Strings.NoDataAvailable}
                    </Text>
                  </View>
                </View>
              )}
            </ScrollView>
            <View style={styles.buttonCon}>
              <Button title={Strings.SIGN_IN} matrix />
              <Button title={Strings.Send_To_Lunch} matrix />
              {/* <Button title={Strings.WRAP} wrap matrix /> */}
            </View>
          </>
        )}
        {isTabVisible && (
          <BottomTab
            showModal={showModal}
            isLunch
            isSelected={isSelected}
            onPress={(res: any) => onTabPress(res)}
          />
        )}

        <Modal animationType="fade" transparent={true} visible={showTabModal}>
          {/* <TouchableWithoutFeedback onPress={() => setShowTabModal(false)}>
            <View style={styles.transparentView} />
          </TouchableWithoutFeedback> */}
          <View style={mStyles.transparentView}>
            {isSelected === Strings.NDB && (
              <View style={mStyles.switchMainCon}>
                <SafeAreaView />
                <View style={mStyles.travellingHeaderCon}>
                  <Text style={mStyles.travellingText}>{Strings.NDB}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setIsSelected("");
                      setShowTabModal(false);
                    }}
                    style={mStyles.icCrossCon}
                  >
                    <Image
                      style={mStyles.icCross}
                      resizeMode={"contain"}
                      source={require("../../assets/icons/ic_cross.png")}
                    />
                  </TouchableOpacity>
                </View>
                <View style={mStyles.switchTextCon}>
                  <Switch
                    style={mStyles.switchCon}
                    trackColor={{
                      false: Colors.GREY.opacity26,
                      true: Colors.GREEN.default,
                    }}
                    thumbColor={ndbSwitch ? "#fff" : "#fff"}
                    ios_backgroundColor={Colors.GREY.opacity26}
                    onValueChange={() => onNDBSwitchPress()}
                    value={ndbSwitch}
                  />
                </View>
              </View>
            )}
            {isSelected === Strings.Rental && (
              <View style={mStyles.switchMainCon}>
                <SafeAreaView />
                <View style={mStyles.travellingHeaderCon}>
                  <Text style={mStyles.travellingText}>{Strings.Rental}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setIsSelected("");
                      setShowTabModal(false);
                    }}
                    style={mStyles.icCrossCon}
                  >
                    <Image
                      style={mStyles.icCross}
                      resizeMode={"contain"}
                      source={require("../../assets/icons/ic_cross.png")}
                    />
                  </TouchableOpacity>
                </View>
                <View style={mStyles.switchTextCon}>
                  <Switch
                    style={mStyles.switchCon}
                    trackColor={{
                      false: Colors.GREY.opacity26,
                      true: Colors.GREEN.default,
                    }}
                    thumbColor={rentalSwitch ? "#fff" : "#fff"}
                    ios_backgroundColor={Colors.GREY.opacity26}
                    onValueChange={() => onRentalSwitchPress()}
                    value={rentalSwitch}
                  />
                </View>
              </View>
            )}

            {isSelected === Strings.Travel_Time && (
              <>
                <SafeAreaView />
                <KeyboardAvoidingView
                  keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -5}
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  style={[mStyles.travelTimeCon]}
                >
                  <View style={mStyles.travellingHeaderCon}>
                    <Text style={mStyles.travellingText}>
                      {Strings.Travelling}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setIsSelected("");
                        setSingleItem(null);
                        setShowTabModal(false);
                      }}
                      style={mStyles.icCrossCon}
                    >
                      <Image
                        style={mStyles.icCross}
                        resizeMode={"contain"}
                        source={require("../../assets/icons/ic_cross.png")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={mStyles.textFieldCon}>
                    <Text style={mStyles.bulletText}>{`${Strings.Time}:`}</Text>
                    <CustomInputField
                      keyboardType="numeric"
                      flex
                      placeHolder="Enter Time"
                      value={timeValue}
                      onChangeText={(t: any) => setTimeVlaue(t)}
                    />
                  </View>

                  <View style={mStyles.textFieldCon}>
                    <Text style={mStyles.bulletText}>
                      {Strings.Distance_KM}
                    </Text>
                    <CustomInputField
                      keyboardType="numeric"
                      flex
                      placeHolder="Enter Distance"
                      value={distanceValue}
                      onChangeText={(d: string) => setDistanceValue(d)}
                    />
                  </View>

                  <View style={mStyles.travellingButtonCon}>
                    <TravelTimeButton
                      onPress={validateTravellingTab}
                      title="Save"
                    />
                    <TravelTimeButton
                      onPress={() => {
                        setIsSelected("");
                        setSingleItem(null);
                        setShowTabModal(false);
                      }}
                      title="Cancel"
                    />
                  </View>
                </KeyboardAvoidingView>
              </>
            )}

            {isSelected === Strings.Lunch && (
              <>
                <SafeAreaView />
                <KeyboardAvoidingView
                  keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -5}
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  style={[mStyles.lunchCon]}
                >
                  <View style={mStyles.travellingHeaderCon}>
                    <Text style={mStyles.travellingText}>{Strings.Lunch}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setShowTabModal(false);
                        setIsSelected("");
                      }}
                      style={mStyles.icCrossCon}
                    >
                      <Image
                        style={mStyles.icCross}
                        resizeMode={"contain"}
                        source={require("../../assets/icons/ic_cross.png")}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      marginTop: hp(2),
                      flex: 1,
                      marginHorizontal: wp(4),
                      justifyContent: "center",
                    }}
                  >
                    <CustomInputField
                      placeHolder="Lunch"
                      value={lunchValue}
                      onChangeText={(l: string) => setlunchValue(l)}
                    />
                  </View>
                  <View style={mStyles.travellingButtonCon}>
                    <TravelTimeButton onPress={validateLunchTab} title="Save" />
                    <TravelTimeButton
                      onPress={() => {
                        setIsSelected("");
                        setShowTabModal(false);
                      }}
                      title="Cancel"
                    />
                  </View>
                </KeyboardAvoidingView>
              </>
            )}
          </View>
          {isLoading && (
            <View style={styles.loadingView}>
              <ActivityIndicator color={Colors.GREEN.default} size={"large"} />
            </View>
          )}
        </Modal>

        <SafeAreaView />

        {(isLoader || isLoading) && (
          <View style={styles.loaderView}>
            <View style={styles.indicatorCon}>
              <ActivityIndicator color={Colors.GREEN.default} size={"large"} />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default MatrixPerformerExpanded;
