import {

    CUSTOM_DRAWER_INPROGREE, CUSTOM_DRAWER_INPROGREE_FAILURE, CUSTOM_DRAWER_INPROGREE_SUCCESS,
  
  } from '../../actions/types';
  
  const initialState = {
    isLoading: false,
    matrixList:[],
    errorMessage: 'Something went wrong. Please try again',
  };
  const customDrawerReducer = (state = initialState, action: any) => {
   // console.log('===> reducer check performer profile request', action)
    switch (action.type) {
      case CUSTOM_DRAWER_INPROGREE:
        console.log('REDUCER ----> CUSTOM_DRAWER_INPROGREE ')
        return {
          ...state,
          isLoading: true,
          errorMessage: '',
        };
      case CUSTOM_DRAWER_INPROGREE_SUCCESS:
        console.log('REDUCER ----> CUSTOM_DRAWER_INPROGREE_SUCCESS ')
        return {
          ...state,
          isLoading: false,
          errorMessage: '',
        };
      case CUSTOM_DRAWER_INPROGREE_FAILURE:
        console.log('REDUCER ----> CUSTOM_DRAWER_INPROGREE_FAILURE ')
        return {
          ...state,
          isLoading: false,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
  
  export default customDrawerReducer;
  