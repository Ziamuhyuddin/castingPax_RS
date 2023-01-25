import {
  PDF_PERFORMER_PROFILE_REQUEST,
    REPORT_PERFORMER_PROFILE_REQUEST,
    PERFORMER_PROFILE_REQUEST, REMOVE_PERFORMER_PROFILE_REQUEST, SAVE_PERFORMER_PROFILE_REQUEST,

  } from "../types";
  
  export const performerProfileRequest = (payload: any, onResponse: any) => {
    //console.log('in action performer profile request')
    return { type: PERFORMER_PROFILE_REQUEST, payload, onResponse };
  };
  export const savePerformerProfileRequest = (payload: any, onResponse: any) => {
    console.log('in action save performer profile request')
    return { type: SAVE_PERFORMER_PROFILE_REQUEST, payload, onResponse };
  };
  export const pdfPerformerProfileRequest = (payload: any, onResponse: any) => {
    console.log('In PERFORMER PROFILE PDF Action--->',payload,onResponse)
    return { type: PDF_PERFORMER_PROFILE_REQUEST, payload, onResponse };
  };
  export const removePerformerProfileRequest = (payload: any, onResponse: any) => {
    console.log('in action REMOVE performer profile request')
    return { type: REMOVE_PERFORMER_PROFILE_REQUEST, payload, onResponse };
  };
  export const reportPerformerProfileRequest = (payload: any, onResponse: any) => {
    console.log('in action REPORT performer profile request')
    return { type: REPORT_PERFORMER_PROFILE_REQUEST, payload, onResponse };
  };

//   export const profileUpdateRequest = (payload: any, onResponse: any) => {
//     console.log('in action')
//     return { type: PROFILE_UPDATE_REQUEST, payload, onResponse };
//   };
  
