import {put, takeEvery, call} from 'redux-saga/effects';
import {
 PDF_PERFORMER_PROFILE_FAILURE, PDF_PERFORMER_PROFILE_REQUEST, PDF_PERFORMER_PROFILE_SUCCESS,
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
        //console.log('succeess=======> get USer PDF DATA' , data.data.result[0]?.content)
        yield put({
            type: PDF_PERFORMER_PROFILE_SUCCESS,
            data: data?.data,
        });

    //     console.log('login API success: ', data.data);

         yield call(onResponse, data?.data);
     } catch (error:any) {
        console.log('error in get User PDF',error)
        const {onResponse} = action;
    //     console.log('login API fails: ', error);
        yield put({
            type: PDF_PERFORMER_PROFILE_FAILURE,
            error,
        });
         yield call(onResponse, {status:-1,error:error.message});
    }
}

function* dataSaga() {
    yield takeEvery(PDF_PERFORMER_PROFILE_REQUEST, fetchData);
}

export default dataSaga;
