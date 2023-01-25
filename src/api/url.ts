// API endpoints

import Env from './env';

const makeURL = (url: any, version = Env.version) => {
  return `${Env.baseURL}${url}`;
  // return `${Env.baseURL}/v${version}/${url}?x-api-key=${Env.apiKey}`;
};
const url = {
  signUp: makeURL("auth/register"),
  logIn: makeURL("auth/login"),
  resetPassword: makeURL("auth/reset_password"),
  validateResetToken: makeURL("auth/validate_reset_token"),
  newPassword: makeURL("auth/new_password"),
  matrixListing: makeURL("app/v1/matrix/matrix_listing"),
  matrixPerformer: makeURL("matrix/performer_data"),
  matrixUpdateTime: makeURL("matrix/update_time"),
  profileUpdate: makeURL("profile/update"),
  getUserProfile:makeURL("auth/performer_details"),
  getPerformerProfile:makeURL("auth/performer_view"),
  getUserProfilePDF:makeURL("matrix/send_bg_size_card"), //get user Profile base64 url
  matrixPerformerRate: makeURL("admin/v1/performer_rate"),
  searchPerformer:makeURL("profile/search_by_name?page=1"),
  performerDataUpdate: makeURL('matrix/performer_data_update'),
  performerSignInUpdate: makeURL('matrix/performer_signIn_update'),
  // https://www.castingpax.com/api/admin/v1/performer_rate
};

export default url;
