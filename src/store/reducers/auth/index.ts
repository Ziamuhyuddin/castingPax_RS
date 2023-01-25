import {
MAKE_SPLASH,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  UPDATE_USER_DATA,
    LOGOUT_REQUEST,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
    VALIDATE_RESET_TOKEN_REQUEST,
    VALIDATE_RESET_TOKEN_SUCCESS,
    VALIDATE_RESET_TOKEN_FAILURE,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAILURE

} from '../../actions/types';
import {parseError,saveUserData,clearUserData} from '../../util';

const initialState = {
  userData: null,
  errorMessage: 'Something went wrong. Please try again',
  isLoading: false,
  authTokens: null,
  splash:true,
  validateTokenLoading: false,
};
const authReducer = (state = initialState, action:any) => {
  switch (action.type) {

    case MAKE_SPLASH:
      console.log('THIS IS SPPPPPP',action.payload)
      return {
        ...state,
        splash:action.payload
      }

    case SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case SIGN_UP_SUCCESS:
    //  saveUserData(action.data);
      return {
        ...state,
        userData: null,
        authTokens: null,
        isLoading: false,
        errorMessage: '',
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: parseError(action.error),
      };
    case UPDATE_USER_DATA:
      saveUserData(action.data);
      return {
        ...state,
        userData: action.data,
      };

    case LOGOUT_REQUEST:
      clearUserData()
      return {
        ...state,
        userData: null,

      };


    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case LOGIN_SUCCESS:
      console.log('login user data: ', action.data);
      saveUserData(action.data);
      return {
        ...state,
        userData: action.data,
        authTokens: action.data.data.token,
        isLoading: false,
        errorMessage: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: parseError(action.error),
      };


    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
      };

    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: parseError(action.error),
      };

    case VALIDATE_RESET_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
        validateTokenLoading: true,
      };

    case VALIDATE_RESET_TOKEN_SUCCESS:
      return {
        ...state,
        validateTokenLoading: false,
        errorMessage: '',
      };

    case VALIDATE_RESET_TOKEN_FAILURE:
      return {
        ...state,
        isLoading: false,
        validateTokenLoading: false,
        errorMessage: parseError(action.error),
      };

    case NEW_PASSWORD_REQUEST:
      return {
        ...state,
        errorMessage: '',
      };

    case NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
      };

    case NEW_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: parseError(action.error),
      };



    default:
      return state;
  }
};

export default authReducer;
