import {put, takeEvery, call} from 'redux-saga/effects';
import {
    REMOVE_PERFORMER_PROFILE_FAILURE,
    REMOVE_PERFORMER_PROFILE_REQUEST,
   REMOVE_PERFORMER_PROFILE_SUCCESS,

} from '../../actions/types';

import axiosInstance from '../../../api';
import url from '../../../api/url';

function* fetchData(action:any) {

    try {
        console.log('----> sagas, SAVE performerProfile Request ',action)
        const {payload, onResponse} = action;
     
    //     const URL = url.getPerformerProfile;
    //     const sendData = {
    //         method: 'POST',
    //         url: URL,
    //         data: payload,
    //     };
    //     // debugger
    //     console.log('get user profile data: ', JSON.stringify(sendData));
    //     // @ts-ignore
    //  const data = yield call(axiosInstance, sendData);
    //     console.log('succeess=======> get performer data ' , data.data)
    const data={data:{}}

        yield put({
            type: REMOVE_PERFORMER_PROFILE_SUCCESS,
            data: data?.data,
        });

    //     console.log('login API success: ', data.data);

     yield call(onResponse, data?.data);
     } catch (error:any) {
        console.log('error in get User Profile ', error.message)
        const {onResponse} = action;
    //     console.log('login API fails: ', error);
        yield put({
            type: REMOVE_PERFORMER_PROFILE_FAILURE,
            error,
        });
        yield call(onResponse, {status:-1, error:error.message});
    }
}

function* dataSaga() {
    yield takeEvery(REMOVE_PERFORMER_PROFILE_REQUEST, fetchData);
}

export default dataSaga;
