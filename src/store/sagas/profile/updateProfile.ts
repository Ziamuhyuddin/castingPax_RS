import {put, takeEvery, call} from 'redux-saga/effects';
import {
    PROFILE_UPDATE_FAILURE,
   PROFILE_UPDATE_REQUEST, PROFILE_UPDATE_SUCCESS
} from '../../actions/types';

import axiosInstance from '../../../api';
import url from '../../../api/url';

function* fetchData(action:any) {

    try {
        console.log('----> updatesagas',action)
        const {payload, onResponse} = action;
        const URL = url.profileUpdate;
        const sendData = {
            method: 'POST',
            url: URL,
            data: payload,
        };
        // debugger
        console.log('update profile senddata send data: ', JSON.stringify(sendData));
        // @ts-ignore
        const data = yield call(axiosInstance, sendData);
        console.log('succeess',data.data)
        yield put({
            type: PROFILE_UPDATE_SUCCESS,
            data: data.data,
        });
       yield call(onResponse, data.data);
     } catch (error:any) {
        console.log('try catch error update Profile',error)
        const {onResponse} = action;
        yield put({
            type: PROFILE_UPDATE_FAILURE,
            error,
        });
        yield call(onResponse, {status:-1,error:error.message});
    }
}

function* dataSaga() {
    yield takeEvery(PROFILE_UPDATE_REQUEST, fetchData);
}

export default dataSaga;
