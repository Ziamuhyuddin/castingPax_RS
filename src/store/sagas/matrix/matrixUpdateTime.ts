import { put, takeEvery, call } from "redux-saga/effects";
import {
  MATRIX_UPDATE_TIME_REQUEST,
  MATRIX_UPDATE_TIME_SUCCESS,
  MATRIX_UPDATE_TIME_FAILURE,
} from "../../actions/types";

import axiosInstance from "../../../api";
import url from "../../../api/url";

function* fetchData(action: any) {
  try {
    const { payload } = action;
    const URL = url.matrixUpdateTime;
    const sendData = {
      method: "POST",
      url: URL,
      data: payload,
    };
    console.log("MATRIX_UPDATE_TIME API send data: ", JSON.stringify(sendData));
    // @ts-ignore
    const data = yield call(axiosInstance, sendData);
    yield put({
      type: MATRIX_UPDATE_TIME_SUCCESS,
      data: data,
    });
    console.log("MATRIX_UPDATE_TIME success", data?.data);
  } catch (error: any) {
    // const { onResponse } = action;
    console.log("MATRIX_UPDATE_TIME API fails: ", error?.response);
    yield put({
      type: MATRIX_UPDATE_TIME_FAILURE,
      error,
    });
    // yield call(onResponse, "error");
  }
}

function* dataSaga() {
  yield takeEvery(MATRIX_UPDATE_TIME_REQUEST, fetchData);
}

export default dataSaga;
