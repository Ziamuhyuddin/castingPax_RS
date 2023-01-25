import { put, takeEvery, call } from "redux-saga/effects";
import {
  MATRIX_PERFORMER_DATA_UPDATE_REQUEST,
  MATRIX_PERFORMER_DATA_UPDATE_SUCCESS,
  MATRIX_PERFORMER_DATA_UPDATE_FAILURE,
} from "../../actions/types";

import axiosInstance from "../../../api";
import url from "../../../api/url";

function* fetchData(action: any) {
  try {
    const { payload } = action;
    const URL = url.performerDataUpdate;
    const sendData = {
      method: "POST",
      url: URL,
      data: payload,
    };
    console.log(
      "MATRIX_PERFORMER_DATA_UPDATE API send data: ",
      JSON.stringify(sendData)
    );
    // @ts-ignore
    const data = yield call(axiosInstance, sendData);
    yield put({
      type: MATRIX_PERFORMER_DATA_UPDATE_SUCCESS,
      data: data,
    });
    console.log("MATRIX_PERFORMER_DATA_UPDATE success", data?.data);
  } catch (error: any) {
    // const { onResponse } = action;
    console.log("MATRIX_PERFORMER_DATA_UPDATE API fails: ", error?.response);
    yield put({
      type: MATRIX_PERFORMER_DATA_UPDATE_FAILURE,
      error,
    });
    // yield call(onResponse, "error");
  }
}

function* dataSaga() {
  yield takeEvery(MATRIX_PERFORMER_DATA_UPDATE_REQUEST, fetchData);
}

export default dataSaga;
