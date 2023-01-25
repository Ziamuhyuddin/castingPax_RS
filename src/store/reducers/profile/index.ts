import {
  PROFILE_UPDATE_REQUEST,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
  PROFILE_UPDATE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_PROFILE_PDF,
  GET_PROFILE_PDF_SUCCESS,
  GET_PROFILE_PDF_FAILURE,

} from '../../actions/types';

const initialState = {
  userData: null,
  isLoading: false,
  errorMessage: 'Something went wrong. Please try again',
  pdfLoader:false
};
const profileReducer = (state = initialState, action: any) => {
  console.log('===> reducer check', action)
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case GET_USER_PROFILE_SUCCESS:
     // console.log("zeee smile",action.data.data)
      return {
      ...state,
      userData:action.data,
      isLoading: false,
      // errorMessage: '',
      };  
    case GET_USER_PROFILE_FAILURE:
      return {
      ...state,
      // userData:action.data,
      isLoading: false,
      errorMessage: 'Something went wrong. Please try again',
      };  
    case PROFILE_UPDATE_REQUEST:
      return {
        ...state,         
        isLoading: true,
        errorMessage: "",
      };
    case PROFILE_UPDATE_SUCCESS:
    //  console.log("update success",action.data.data)
      return {
        ...state, 
        userData:action.data,      
        isLoading: false,
        errorMessage: "",
      };
    case PROFILE_UPDATE_FAILURE:
      return {
        ...state,         
        isLoading: false,
        errorMessage: 'Something went wrong. Please try again',
      };
    case GET_PROFILE_PDF:
      console.log('in pdf reducer')
      return {
        ...state,         
        pdfLoader: true,
        errorMessage: "",
      };
    case GET_PROFILE_PDF_SUCCESS:
    //  console.log("update success",action.data.data)
      return {
        ...state,    
        pdfLoader: false,
        errorMessage: "",
      };
    case GET_PROFILE_PDF_FAILURE:
      console.log('in pdf failure')
     return {
        ...state,         
        pdfLoader: false,
        errorMessage: 'Something went wrong. Please try again',
      };
    default:
      return state;
  }
};

export default profileReducer;
