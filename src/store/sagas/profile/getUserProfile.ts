import {put, takeEvery, call} from 'redux-saga/effects';
import {
    GET_USER_PROFILE,
   GET_USER_PROFILE_FAILURE,
   GET_USER_PROFILE_SUCCESS,
   PROFILE_UPDATE_REQUEST
} from '../../actions/types';

import axiosInstance from '../../../api';
import url from '../../../api/url';

function* fetchData(action:any) {

    try {
        console.log('----> sagas,getUserProfile ',action)
        const {payload, onResponse} = action;
        const URL = url.getUserProfile;
        const sendData = {
            method: 'POST',
            url: URL,
            data: payload,
        };
        // debugger
        console.log('get user profile data: ', JSON.stringify(sendData));
        // @ts-ignore
     const data = yield call(axiosInstance, sendData);
        console.log('succeess=======> get USer Data data' , data)
        yield put({
            type: GET_USER_PROFILE_SUCCESS,
            data: data.data,
        });

    //     console.log('login API success: ', data.data);

        yield call(onResponse, data?.data);
     } catch (error:any) {
        console.log('error in get User Profile')
         const {onResponse} = action;
    //     console.log('login API fails: ', error);
        yield put({
            type: GET_USER_PROFILE_FAILURE,
            error,
        });
         yield call(onResponse, {status:-1,error:error.message});
    }
}

function* dataSaga() {
    yield takeEvery(GET_USER_PROFILE, fetchData);
}

export default dataSaga;
