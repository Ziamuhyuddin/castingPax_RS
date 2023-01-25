import React, { FC, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Image,
} from "react-native";
import styles from "./styles";
import { Strings } from "../../constants";
import {
  BottomTab,
  Button,
  Header,
  ContentHeader,
  RatingModal,
} from "../../components";
import PerformorStatus from "./components/performorStatus";

interface MatrixPerformer {
  navigation?: any;
  route?: any;
}

const MatrixPerformer: FC<MatrixPerformer> = (props: MatrixPerformer) => {
  const { navigation, route } = props;

  console.log("route on Performer: ", route);

  const {
    matrixItem,
    // performerItem
  } = route.params;
  // console.log("THIS IS PERFORMER OBJ===>:", performerItem);
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(true);
  const [isMainMenu, setIsMainMenu] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string>("Lunch");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [ratingData, setRatingData] = useState<string>("Rate 1");

  const rates = ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5", "Custom"];

  const onItemPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };
  const onTabPress = (res: any) => {
    setIsSelected(res);
    console.log("THIS IS RES:==", isSelected);
    if (isSelected === Strings.NDB) {
    } else if (isSelected === Strings.Travel_Time) {
    } else if (isSelected === Strings.Rental) {
    } else if (isSelected === Strings.Costume) {
    } else if (isSelected === Strings.Lunch) {
    }
  };

  const onBlogPress = (res: any) => {
    console.log("THIS OS RES:++", res);
    if (res === "Rate") {
      setShowModal(true);
    } else if (res === "More") {
      navigation.navigate("MatrixPerformerExpanded", {
        matrixItem: matrixItem,
        // performerItem: performerItem,
      });
    }
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

  const _renderComp = () => {
    // console.log("this is render Comp performer===>", item);
    return (
      <>
        <TouchableOpacity
          onPress={onItemPress}
          style={[
            styles.performerList,
            { borderBottomWidth: isOpen ? 0 : 0.3 },
          ]}
        >
          <View style={styles.flexBox}>
            <Image
              style={styles.squareGrey}
              source={require("../../assets/icons/ic_square.png")}
            />
            <Image
              style={styles.performerImage}
              source={require("../../assets/images/performer_img.png")}
            />
            <Text style={styles.subHeading}>{"kelly"}</Text>
          </View>
          <View style={styles.flexBox}>
            <Text style={styles.statusText}>{"booked"}</Text>
            <Image
              style={isOpen ? styles.chevronUp : styles.chevronDown}
              source={require("../../assets/icons/ic_chevronDown.png")}
            />
          </View>
        </TouchableOpacity>
        {isOpen && (
          <>
            <PerformorStatus
              rateText={ratingData}
              costumeQuantity={"0"}
              onPress={(res: any) => onBlogPress(res)}
            />
          </>
        )}
      </>
    );
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <SafeAreaView />

          <Header
            leftIconPress={() => navigation.pop()}
            leftIcon={require("../../assets/icons/ic_arrow_left.png")}
            title={"Search coordinator by name"}
            customHeaderText
            rightIcon={require("../../assets/icons/ic_dot_menu.png")}
            rightIconPress={() => setIsMainMenu(true)}
            visible={isMainMenu}
            onSidePress={() => setIsMainMenu(false)}
          />
          {showModal ? (
            <RatingModal
              data={rates}
              setModal={setShowModal}
              // setRate={setRatingData}
              selected={ratingData}
            />
          ) : (
            <>
              <View style={styles.topMargin} />
              <ContentHeader
                showThumbnail={matrixItem.showId.showImage}
                dayName={matrixItem.showId.title}
                // invited={'20/9'}
                episode={""}
                day={matrixItem.title}
                coordinator={matrixItem.bgCoordinator.length}
                BG={matrixItem.bgPerformerCount}
              />
              <View style={styles.screenPadding}>
                {/*<FlatList*/}
                {/*    showsVerticalScrollIndicator={false}*/}
                {/*    data={performerItem}*/}
                {/*    renderItem={({item})=>_renderComp(item)}/>*/}
                {_renderComp()}
              </View>
              <View style={styles.buttonCon}>
                <Button title={Strings.SIGN_IN} matrix />
                <Button title={Strings.Send_To_Lunch} matrix />
              </View>
            </>
          )}
          {isKeyboardVisible && (
            <BottomTab
              showModal={showModal}
              isLunch
              isSelected={isSelected}
              onPress={(res: any) => onTabPress(res)}
            />
          )}
          <SafeAreaView />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default MatrixPerformer;
