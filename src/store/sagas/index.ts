import {all, fork} from 'redux-saga/effects';
import {
  signUp,
  logIn,
  resetPassword,
  validateResetToken,
  newPassword,
} from './auth';

import { updateProfile ,getUserProfile,getUserPdf} from "./profile";
import { performerProfile,savePerformerProfile,pdfPerformerProfile,removePerformerProfile,reportPerformerProfile } from "./performerProfile";
import {
  matrixListing,
  matrixPerformer,
  matrixUpdateTime,
  matrixPerformerRate,
  matrixPerformerDataUpdate,
  matrixPerfomerSignInUpdate,
} from "./matrix";
import {inprogressCustomDrawer} from './customDrawer'


export default function* saga() {
  yield all([
    fork(signUp),
    fork(logIn),
    fork(resetPassword),
    fork(validateResetToken),
    fork(newPassword),
    fork(matrixListing),
    fork(matrixPerformer),
    fork(matrixUpdateTime),
    fork(updateProfile),
    fork(getUserProfile),
    fork(performerProfile),
    fork(matrixPerformerRate),
    fork(getUserPdf),
    fork(savePerformerProfile),
    fork(pdfPerformerProfile),
    fork(removePerformerProfile),
    fork(reportPerformerProfile),
    fork(inprogressCustomDrawer),
    fork(matrixPerformerDataUpdate),
    fork(matrixPerfomerSignInUpdate),
  ]);
}
