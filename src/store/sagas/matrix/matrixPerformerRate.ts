import { put, takeEvery, call } from "redux-saga/effects";
import {
  MATRIX_PERFORMER_RATE_REQUEST,
  MATRIX_PERFORMER_RATE_SUCCESS,
  MATRIX_PERFORMER_RATE_FAILURE,
} from "../../actions/types";

import axiosInstance from "../../../api";
import url from "../../../api/url";

function* fetchData(action: any) {
  try {
    const { payload, onResponse } = action;
    const URL = url.matrixPerformerRate;
    const sendData = {
      method: "GET",
      url: URL,
      //   data: payload,
    };
    console.log(
      "MATRIX_PERFORMER_RATE_REQUEST API send data: ",
      JSON.stringify(sendData)
    );
    // @ts-ignore
    const data = yield call(axiosInstance, sendData);
    yield put({
      type: MATRIX_PERFORMER_RATE_SUCCESS,
      data: data,
    });
    console.log("MATRIX_PERFORMER_RATE success", data?.data);
    yield call(onResponse, "error");
  } catch (error: any) {
    const { onResponse } = action;
    console.log("MATRIX_PERFORMER_RATE fails: ", error);
    yield put({
      type: MATRIX_PERFORMER_RATE_FAILURE,
      error,
    });
    yield call(onResponse, "error");
  }
}

function* dataSaga() {
  yield takeEvery(MATRIX_PERFORMER_RATE_REQUEST, fetchData);
}

export default dataSaga;
