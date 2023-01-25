import {put, takeEvery, call} from 'redux-saga/effects';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
} from '../../actions/types';

import axiosInstance from '../../../api';
import url from '../../../api/url';

function* fetchData(action:any) {
    try {
        const {payload, onResponse} = action;
        const URL = url.logIn;
        const sendData = {
            method: 'POST',
            url: URL,
            data: payload,
        };
        console.log('login API send data: ', JSON.stringify(sendData));
        // @ts-ignore
        const data = yield call(axiosInstance, sendData);
        yield put({
            type: LOGIN_SUCCESS,
            data: data.data,
        });

        console.log('login API success: ', data.data);

        yield call(onResponse, data.data);
    } catch (error:any) {
        const {onResponse} = action;
        console.log('login API fails: ', error);
        yield put({
            type: LOGIN_FAILURE,
            error,
        });
        yield call(onResponse, {status:-1,error:error.message});
    }
}

function* dataSaga() {
    yield takeEvery(LOGIN_REQUEST, fetchData);
}

export default dataSaga;
