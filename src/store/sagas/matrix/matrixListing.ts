import {put, takeEvery, call} from 'redux-saga/effects';
import {
    MATRIX_LISTING_REQUEST,
    MATRIX_LISTING_SUCCESS,
    MATRIX_LISTING_FAILURE,
} from '../../actions/types';

import axiosInstance from '../../../api';
import url from '../../../api/url';

function* fetchData(action:any) {
    try {
        const {payload, onResponse} = action;
        console.log('page is: ', payload.page)
        const URL = `${url.matrixListing}?page=${payload.page}`;
        const sendData = {
            method: 'POST',
            url: URL,
            data: {},
            // data: payload,
        };
        console.log('MATRIX_LISTING API send data: ', JSON.stringify(sendData));
        // @ts-ignore
        const data = yield call(axiosInstance, sendData);
        yield put({
            type: MATRIX_LISTING_SUCCESS,
            data: data.data,
            isNextPage: (payload?.page > 1)
        });
        console.log('MATRiX_LISTING API success',data.data);
        yield call(onResponse, data.data);
    } catch (error:any) {
        const {onResponse} = action;
        console.log('MATRIX_LISTING API fails: ', error?.response);
        yield put({
            type: MATRIX_LISTING_FAILURE,
            error,
        });
        yield call(onResponse, 'error');
    }
}

function* dataSaga() {
    yield takeEvery(MATRIX_LISTING_REQUEST, fetchData);
}

export default dataSaga;
