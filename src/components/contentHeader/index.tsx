import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Strings } from "../../constants";
import styles from "./styles";

interface Index {
  showThumbnail?: any;
  dayName?: string;
  invited?: string;
  episode?: string;
  day?: string;
  coordinator?: string;
  BG?: string;
  onBarcodePress?: any;
  matrixItem?: any;
}

const ContentHeader: FC<Index> = (props: Index) => {
  const {
    dayName,
    onBarcodePress,
    showThumbnail,
    invited,
    episode,
    day,
    coordinator,
    BG,
    matrixItem,
  } = props;

  const _renderShowInfo = (topText: any, bottomText: string) => {
    return (
      <>
        <View style={styles.showInfoContainer}>
          <Text style={styles.topText}>{topText}</Text>
          <Text style={styles.bottomText}>{bottomText}</Text>
        </View>
      </>
    );
  };

  let pictureUri = "";
  if (showThumbnail) {
    // console.log('image===>',showThumbnail)
    if (!showThumbnail.includes("https")) {
      pictureUri = showThumbnail.replace("http", "https");
      console.log("image again ===>", pictureUri);
    }
  }
  if (pictureUri) {
    // console.log('image===>',pictureUri)
    if (pictureUri.includes("staging")) {
      pictureUri = pictureUri.replace("staging", "www");
      // console.log('image again with www ===>',pictureUri)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerCon}>
          <View style={styles.thumbImageCon}>
            {/*<Image style={styles.thumbImage} source={showThumbnail} />*/}
            <Image style={styles.thumbImage} source={{ uri: pictureUri }} />
          </View>
          <Text style={styles.weekDaysText}>{dayName}</Text>

          {onBarcodePress && (
            <TouchableOpacity
              onPress={onBarcodePress}
              style={styles.barcodeCon}
            >
              <Image
                style={styles.icBarcode}
                source={require("../../assets/icons/ic_barcode.png")}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.infoContainer}>
          {_renderShowInfo(invited, Strings.Invited)}
          {matrixItem?.episodeId !== null &&
            _renderShowInfo(matrixItem?.episodeId?.title, Strings.Episode)}
          {_renderShowInfo(day, Strings.Day)}
          <View style={styles.lineVertical} />
          {_renderShowInfo(coordinator, Strings.Coordinator)}
          {_renderShowInfo(BG, Strings.BG)}
        </View>
      </View>
    </>
  );
};

export default ContentHeader;
