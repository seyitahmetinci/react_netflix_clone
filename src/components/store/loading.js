import {createSlice} from '@reduxjs/toolkit';
import "../MainPage/types";
import {LOADING_HIDE, LOADING_SHOW} from "../MainPage/types";

const initialState = false; // Initial state for loading status

const loadingReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case LOADING_SHOW:
            return true;
        case LOADING_HIDE:
            return false;
        default:
            return state;
    }
};


// const loadingSlice = createSlice({
//
//     name: 'loading',
//     initialState: initialLoadingState,
//     reducers: {
//         toggleLoading() {
//             switch (state, action){
//                 case LOADING_SHOW:
//                     return showLoading = true;
//                 case LOADING_HIDE:
//                     return showLoading = false;
//             }
//         },
//     },
// });



export default loadingReducer;