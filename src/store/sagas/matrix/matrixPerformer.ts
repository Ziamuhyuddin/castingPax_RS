import {put, takeEvery, call} from 'redux-saga/effects';
import {
    MATRIX_PERFORMER_REQUEST,
    MATRIX_PERFORMER_SUCCESS,
    MATRIX_PERFORMER_FAILURE,
} from '../../actions/types';

import axiosInstance from '../../../api';
import url from '../../../api/url';

function* fetchData(action:any) {
    try {
        const {payload, onResponse} = action;
        const URL = url.matrixPerformer;
        const sendData = {
            method: 'POST',
            url: URL,
            data: payload,
        };
        console.log('MATRIX_PERFORMER API send data: ', JSON.stringify(sendData));
        // @ts-ignore
        const data = yield call(axiosInstance, sendData);
        yield put({
            type: MATRIX_PERFORMER_SUCCESS,
            data: data.data,
        });
        console.log('MATRIX_PERFORMER API success',data.data);
        yield call(onResponse, data.data);
    } catch (error:any) {
        const {onResponse} = action;
        console.log('MATRIX_PERFORMER API fails: ', error?.response);
        yield put({
            type: MATRIX_PERFORMER_FAILURE,
            error,
        });
        yield call(onResponse, 'error');
    }
}

function* dataSaga() {
    yield takeEvery(MATRIX_PERFORMER_REQUEST, fetchData);
}

export default dataSaga;
