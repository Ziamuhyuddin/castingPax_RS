import {    CUSTOM_DRAWER_INPROGREE   } from "../types";
    
    export const customDrawerInProgress = (payload: any, onResponse: any) => {
      console.log('in CUSTOM_DRAWER_INPROGREE')
      return { type: CUSTOM_DRAWER_INPROGREE, payload, onResponse };
    };
    

    