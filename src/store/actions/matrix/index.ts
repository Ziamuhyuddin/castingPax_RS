import {
  MATRIX_LISTING_REQUEST,
  MATRIX_PERFORMER_REQUEST,
  MATRIX_UPDATE_TIME_REQUEST,
  MATRIX_PERFORMER_UPDATE,
  MATRIX_PERFORMER_RATE_REQUEST,
  MATRIX_PERFORMER_RATE_UPDATE,
  MATRIX_PERFORMER_DATA_UPDATE_REQUEST,
  MATRIX_PERFORMER_SIGNIN_UPDATE_REQUEST,
} from '../types';

export const matrixListingRequest = (payload: any, onResponse: any) => {
  return {type: MATRIX_LISTING_REQUEST, payload, onResponse};
};

export const matrixPerformerRequest = (payload: any, onResponse: any) => {
  return {type: MATRIX_PERFORMER_REQUEST, payload, onResponse};
};

export const matrixPerformerUpdate = (payload: any) => {
  return {type: MATRIX_PERFORMER_UPDATE, payload};
};

export const matrixUpdateTime = (payload: any) => {
  return {type: MATRIX_UPDATE_TIME_REQUEST, payload};
};

export const matrixPerformerRate = (payload: any, onResponse: any) => {
  return {type: MATRIX_PERFORMER_RATE_REQUEST, payload, onResponse};
};

export const matrixPerformerRateUpdate = (payload: any) => {
  return {type: MATRIX_PERFORMER_RATE_UPDATE, payload};
};

export const matrixPerformerDataUpdate = (payload: any) => {
  return {type: MATRIX_PERFORMER_DATA_UPDATE_REQUEST, payload};
};
export const matrixPerformerSignInUpdateRequest = (payload: any) => {
  return {type: MATRIX_PERFORMER_SIGNIN_UPDATE_REQUEST, payload};
};
