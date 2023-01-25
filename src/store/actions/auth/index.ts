// Auth Actions

import {

RESET_PASSWORD_REQUEST,
    VALIDATE_RESET_TOKEN_REQUEST,
    NEW_PASSWORD_REQUEST,
    MAKE_SPLASH,
    SIGN_UP_REQUEST,
    UPDATE_USER_DATA,
LOGIN_REQUEST,
    LOGOUT_REQUEST



} from '../types';


export const signUpRequest = (payload:any, onResponse:any) => {
    return {type: SIGN_UP_REQUEST, payload, onResponse};
};

export const loginRequest = (payload:any, onResponse:any) => {
    return {type: LOGIN_REQUEST, payload, onResponse};
};

export const updateUser = (payload:any) => {
    return {type: UPDATE_USER_DATA, payload};
};

export const logoutRequest = (onResponse:any) => {
    return {type: LOGOUT_REQUEST, onResponse};
};

export const makeSplash = (payload:any) => {
    return {type: MAKE_SPLASH, payload};
};

export const resetPasswordRequest = (payload:any, onResponse:any) => {
    return {type: RESET_PASSWORD_REQUEST, payload, onResponse};
};

export const validateResetToken = (payload:any, onResponse:any) => {
    return {type: VALIDATE_RESET_TOKEN_REQUEST, payload, onResponse};
};

export const newPasswordRequest = (payload:any, onResponse:any) => {
    return {type: NEW_PASSWORD_REQUEST, payload, onResponse};
};



