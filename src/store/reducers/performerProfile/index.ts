import {
    PERFORMER_PROFILE_REQUEST,
    PERFORMER_PROFILE_SUCCESS,
    PERFORMER_PROFILE_FAILURE,
    SAVE_PERFORMER_PROFILE_REQUEST,
    SAVE_PERFORMER_PROFILE_FAILURE,
    SAVE_PERFORMER_PROFILE_SUCCESS,
    PDF_PERFORMER_PROFILE_REQUEST,
    PDF_PERFORMER_PROFILE_SUCCESS,
    PDF_PERFORMER_PROFILE_FAILURE,
    REMOVE_PERFORMER_PROFILE_REQUEST,
    REMOVE_PERFORMER_PROFILE_SUCCESS,
    REMOVE_PERFORMER_PROFILE_FAILURE,
    REPORT_PERFORMER_PROFILE_REQUEST,
    REPORT_PERFORMER_PROFILE_SUCCESS,
    REPORT_PERFORMER_PROFILE_FAILURE,
  
  } from '../../actions/types';
  
  const initialState = {
    performerData: null,
    isLoading: false,
    errorMessage: 'Something went wrong. Please try again',
    sideMenuLoader:false,
    searchPerformerArr:[]
  };
  const performerProfileReducer = (state = initialState, action: any) => {
   // console.log('===> reducer check performer profile request', action)
    switch (action.type) {
      case PERFORMER_PROFILE_REQUEST:
        return {
          ...state,
          isLoading: true,
          errorMessage: '',
        };
      case PERFORMER_PROFILE_SUCCESS:
        console.log("zeee smile",action?.data?.data)
        return {
        ...state,
        performerData:action?.data,
        isLoading: false,
        // errorMessage: '',
        };  
      case PERFORMER_PROFILE_FAILURE:
        return {
        ...state,
        // userData:action.data,
        isLoading: false,
        performerData: null,
        errorMessage: 'Something went wrong. Please try again',
        };
      case SAVE_PERFORMER_PROFILE_REQUEST:
        console.log('SAVE performer profile request')
        return {
          ...state,
          sideMenuLoader: true,
          errorMessage: '',
        };
      case SAVE_PERFORMER_PROFILE_SUCCESS:
        console.log("SAVE Performer profile success ",action)
        return {
          ...state,
          sideMenuLoader: false,
          searchPerformerArr:action?.data?.data
        // errorMessage: '',
        };  
      case SAVE_PERFORMER_PROFILE_FAILURE:
        console.log('SAVE perforemer progile failure')
        return {
          ...state,
          sideMenuLoader:false,
          errorMessage: 'Something went wrong. Please try again',
        };
      case PDF_PERFORMER_PROFILE_REQUEST:
        console.log('PDF performer profile request')
        return {
          ...state,
          sideMenuLoader: true,
          errorMessage: '',
        };
      case PDF_PERFORMER_PROFILE_SUCCESS:
        console.log("PDF Performer profile success ",action)
        return {
          ...state,
          sideMenuLoader: false,
          errorMessage: '',
        };  
      case PDF_PERFORMER_PROFILE_FAILURE:
        console.log("PDF Performer profile Failure ",action)
        return {
          ...state,
          sideMenuLoader:false,
          errorMessage: 'Something went wrong. Please try again',
        };
      case REMOVE_PERFORMER_PROFILE_REQUEST:
        console.log('REMOVE performer profile request')
        return {
          ...state,
          sideMenuLoader: true,
          errorMessage: '',
        };
      case REMOVE_PERFORMER_PROFILE_SUCCESS:
        console.log('REMOVE performer profile Success')
        return {
          ...state,
          sideMenuLoader: false,
          errorMessage: '',
        };
      case REMOVE_PERFORMER_PROFILE_FAILURE:
        console.log('REMOVE performer profile FAILURE')
        return {
          ...state,
          sideMenuLoader: false,
          errorMessage: 'Something went wrong. Please try again',
        };
      case REPORT_PERFORMER_PROFILE_REQUEST:
        console.log('REPORT performer profile request')
        return {
          ...state,
          sideMenuLoader: true,
          errorMessage: '',
        };
      case REPORT_PERFORMER_PROFILE_SUCCESS:
        console.log('REPORT performer profile Success')
        return {
          ...state,
          sideMenuLoader: false,
          errorMessage: '',
        };
      case REPORT_PERFORMER_PROFILE_FAILURE:
        console.log('REPORT performer profile FAILURE')
        return {
          ...state,
          sideMenuLoader: false,
          errorMessage: 'Something went wrong. Please try again',
        };
      default:
        return state;
    }
  };
  
  export default performerProfileReducer;
  