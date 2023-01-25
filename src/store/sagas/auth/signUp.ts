import {put, takeEvery, call} from 'redux-saga/effects';
import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
} from '../../actions/types';

import axiosInstance from '../../../api';
import url from '../../../api/url';

function* fetchData(action:any) {
    try {
        const {payload, onResponse} = action;
        const URL = url.signUp;
        console.log('URL',URL)
        const sendData = {
            method: 'POST',
            url: URL,
            data: payload,
        };
        console.log('signup API send data: ', JSON.stringify(sendData));
        // @ts-ignore
        const data = yield call(axiosInstance, sendData);
        console.log('signup API : ',data.data);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: data.data,
        });
        console.log('signup API success');
        yield call(onResponse, data.data);
    } catch (error:any) {
        const {onResponse} = action;
        console.log('signup API fails: ', error);
        yield put({
            type: SIGN_UP_FAILURE,
            error,
        });
        yield call(onResponse, {status: -1, error: error.message});
    }
}

function* dataSaga() {
    yield takeEvery(SIGN_UP_REQUEST, fetchData);
}

export default dataSaga;
