import {
  MATRIX_LISTING_REQUEST,
  MATRIX_LISTING_FAILURE,
  MATRIX_LISTING_SUCCESS,
  MATRIX_PERFORMER_REQUEST,
  MATRIX_PERFORMER_SUCCESS,
  MATRIX_PERFORMER_FAILURE,
  MATRIX_UPDATE_TIME_REQUEST,
  MATRIX_UPDATE_TIME_SUCCESS,
  MATRIX_UPDATE_TIME_FAILURE,
  MATRIX_PERFORMER_UPDATE,
  MATRIX_PERFORMER_RATE_REQUEST,
  MATRIX_PERFORMER_RATE_SUCCESS,
  MATRIX_PERFORMER_RATE_FAILURE,
  MATRIX_PERFORMER_RATE_UPDATE,
  MATRIX_PERFORMER_DATA_UPDATE_REQUEST,
  MATRIX_PERFORMER_DATA_UPDATE_SUCCESS,
  MATRIX_PERFORMER_DATA_UPDATE_FAILURE,
  MATRIX_PERFORMER_SIGNIN_UPDATE_REQUEST,
  MATRIX_PERFORMER_SIGNIN_UPDATE_SUCCESS,
  MATRIX_PERFORMER_SIGNIN_UPDATE_FAILURE,
} from '../../actions/types';
import {parseError, saveUserData} from '../../util';

const initialState = {
  errorMessage: 'Something went wrong. Please try again Thank-you',
  isLoading: false,
  matrixPerformer: [],
  matrixList: [],
  paginationData: null,
  currentId: '',
  matrixPerfromerRateData: [],
};

const matrixReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MATRIX_LISTING_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case MATRIX_LISTING_SUCCESS:
      console.log('matrix listing data: ', action.data);
      return {
        ...state,
        isLoading: false,
        matrixList: action.isNextPage
          ? [...state.matrixList, ...action.data.data]
          : action.data.data,
        paginationData: action.data.pagination,
      };
    case MATRIX_LISTING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: parseError(action.error),
        matrixList:[]
      };

    case MATRIX_PERFORMER_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case MATRIX_PERFORMER_SUCCESS:
      //   console.log("matrix performer data: ", action.data);
      // if(action.data.length<1) {
      // Alert.alert('','Data doesn\'t exist')
      // }
      return {
        ...state,
        isLoading: false,
        // matrixPerformer: action.data,
      };
    case MATRIX_PERFORMER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: parseError(action.error),
        matrixPerformer:[]
      };

    case MATRIX_PERFORMER_UPDATE:
      return {
        ...state,
        matrixPerformer: action.payload,
      };

    case MATRIX_UPDATE_TIME_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case MATRIX_UPDATE_TIME_SUCCESS:
      console.log(
        'MATRIX_UPDATE_TIME_SUCCESS data in REDUCER==>: ',
        action.data
      );

      return {
        ...state,
        isLoading: false,
      };
    case MATRIX_UPDATE_TIME_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: parseError(action.error),
      };

    case MATRIX_PERFORMER_RATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case MATRIX_PERFORMER_RATE_SUCCESS:
      console.log('matrix performer rate data: ', action?.data?.data);
      const performerListRate = action?.data?.data.map((r: any) => ({
        ...r,
        isSelected: false,
      }));
      return {
        ...state,
        isLoading: false,
        // matrixPerfromerRateData: action?.data?.data,
        matrixPerfromerRateData: performerListRate,
      };
    case MATRIX_PERFORMER_RATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: parseError(action.error),
      };

    case MATRIX_PERFORMER_RATE_UPDATE:
      return {
        ...state,
        matrixPerfromerRateData: action.payload,
      };

    case MATRIX_PERFORMER_DATA_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case MATRIX_PERFORMER_DATA_UPDATE_SUCCESS:
      console.log(
        'MATRIX_PERFORMER_DATA_UPDATE_SUCCESS data in REDUCER==>: ',
        action.data
      );

      return {
        ...state,
        isLoading: false,
      };
    case MATRIX_PERFORMER_DATA_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: parseError(action.error),
      };

    case MATRIX_PERFORMER_SIGNIN_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case MATRIX_PERFORMER_SIGNIN_UPDATE_SUCCESS:
      console.log(
        'MATRIX_PERFORMER_SIGNIN_UPDATE_SUCCESS data in REDUCER==>: ',
        action.data
      );
      return {
        ...state,
        isLoading: false,
      };
    case MATRIX_PERFORMER_SIGNIN_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: parseError(action.error),
      };

    default:
      return state;
  }
};

export default matrixReducer;
