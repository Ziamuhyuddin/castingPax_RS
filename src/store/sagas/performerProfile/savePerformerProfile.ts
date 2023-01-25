import {put, takeEvery, call} from 'redux-saga/effects';
import {
   SAVE_PERFORMER_PROFILE_FAILURE,
   SAVE_PERFORMER_PROFILE_REQUEST,
   SAVE_PERFORMER_PROFILE_SUCCESS
} from '../../actions/types';

import axiosInstance from '../../../api';
import url from '../../../api/url';

function* fetchData(action:any) {

    try {
        console.log('----> sagas, SAVE performerProfile Request ',action)
        const {payload, onResponse} = action;
     
        const URL = url.searchPerformer;
        const sendData = {
            method: 'POST',
            url: URL,
            data: payload,
        };
        // debugger
        console.log('SAVE USer Profile Data ', JSON.stringify(sendData));
        // @ts-ignore
     const data = yield call(axiosInstance, sendData);
        console.log('succeess=======> get performer data ' , data.data)

        yield put({
            type: SAVE_PERFORMER_PROFILE_SUCCESS,
            data: data?.data,
        });

    //     console.log('login API success: ', data.data);

     yield call(onResponse, data?.data);
     } catch (error:any) {
        console.log('error in get User Profile ', error.message)
        const {onResponse} = action;
    //     console.log('login API fails: ', error);
        yield put({
            type: SAVE_PERFORMER_PROFILE_FAILURE,
            error,
        });
        yield call(onResponse, {status:-1, error:error.message});
    }
}

function* dataSaga() {
    yield takeEvery(SAVE_PERFORMER_PROFILE_REQUEST, fetchData);
}

export default dataSaga;
