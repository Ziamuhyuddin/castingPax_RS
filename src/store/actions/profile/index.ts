import {
  GET_PROFILE_PDF,
    GET_USER_PROFILE,
    PROFILE_UPDATE_REQUEST,

  } from "../types";
  
  export const getUserProfile = (payload: any, onResponse: any) => {
    console.log('in GET_USER_PROFILE')
    return { type: GET_USER_PROFILE, payload, onResponse };
  };
  
  export const profileUpdateRequest = (payload: any, onResponse: any) => {
    console.log('in action')
    return { type: PROFILE_UPDATE_REQUEST, payload, onResponse };
  };
  export const getProfilePDF = (payload: any, onResponse: any) => {
    console.log('In PROFILE PDF Action--->',payload,onResponse)
    return { type: GET_PROFILE_PDF, payload, onResponse };
  };
//   export const matrixPerformerRequest = (payload: any, onResponse: any) => {
//     return { type: MATRIX_PERFORMER_REQUEST, payload, onResponse };
//   };
  
//   export const matrixPerformerUpdate = (payload: any) => {
//     return { type: MATRIX_PERFORMER_UPDATE, payload };
//   };
  
//   export const matrixUpdateTime = (payload: any) => {
//     return { type: MATRIX_UPDATE_TIME_REQUEST, payload };
//   };
  