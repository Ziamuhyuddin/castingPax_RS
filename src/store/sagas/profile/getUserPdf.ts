import {put, takeEvery, call} from 'redux-saga/effects';
import {
    GET_PROFILE_PDF, GET_PROFILE_PDF_FAILURE, GET_PROFILE_PDF_SUCCESS,
} from '../../actions/types';

import axiosInstance from '../../../api';
import url from '../../../api/url';

function* fetchData(action:any) {

    try {
        console.log('----> sagas,PDF ',action)
        const {payload, onResponse} = action;
        const URL = url.getUserProfilePDF;
        const sendData = {
            method: 'POST',
            url: URL,
            data: payload,
        };
        // debugger
        console.log('get user PDF  data: ', JSON.stringify(sendData));
        // @ts-ignore
        const data = yield call(axiosInstance, sendData);
        console.log('succeess=======> get USer PDF DATA' , data)
        yield put({
            type: GET_PROFILE_PDF_SUCCESS,
            data: data.data,
        });

    //     console.log('login API success: ', data.data);

         yield call(onResponse, data?.data);
     } catch (error:any) {
        console.log('error in get User PDF',error)
        const {onResponse} = action;
    //     console.log('login API fails: ', error);
        yield put({
            type: GET_PROFILE_PDF_FAILURE,
            error,
        });
         yield call(onResponse, {status:-1,error:error.message});
    }
}

function* dataSaga() {
    yield takeEvery(GET_PROFILE_PDF, fetchData);
}

export default dataSaga;
