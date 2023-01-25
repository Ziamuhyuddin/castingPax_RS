import React, { FC, useState } from "react";

import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./styles";

import { TravelTimeButton } from "../../components";

interface RatingModal {
  data?: any;
  setModal?: any;
  selectedRate?: any;
  onSavePress?: any;
}

const RatingModal: FC<RatingModal> = (props: RatingModal) => {
  const { setModal, data, selectedRate, onSavePress } = props;

  const [rateObj, setRateObj] = useState<any>({ rate: selectedRate });

  const onRatingPress = (item: any, index: number) => {
    setRateObj(item);
  };
  const IconTitle = (item: any, index: number) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => onRatingPress(item, index)}
          style={[
            styles.iconTitleCon,
            { borderBottomWidth: index == data?.length - 1 ? 0 : 0.3 },
          ]}
        >
          <Image
            style={styles.icRating}
            source={
              rateObj?.rate == item?.rate
                ? require("../../assets/icons/ic_selected.png")
                : require("../../assets/icons/ic_notSelected.png")
            }
          />
          <Text style={styles.ratingText}>{item?.title}</Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModal(false)}>
        <View style={styles.container}></View>
      </TouchableWithoutFeedback>
      <View style={styles.contentCon}>
        <ScrollView
          style={{ marginVertical: 20 }}
          // showsVerticalScrollIndicator={false}
        >
          {data.map((item: any, index: number) => {
            return <View key={index}>{IconTitle(item, index)}</View>;
          })}
        </ScrollView>
        <View style={styles.buttons}>
          <TravelTimeButton
            onPress={() => onSavePress(rateObj?.rate)}
            title="Save"
          />
          <TravelTimeButton title="Cancel" onPress={() => setModal(false)} />
        </View>
      </View>
    </>
  );
};

export default RatingModal;
