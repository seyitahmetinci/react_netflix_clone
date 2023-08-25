
import {LOADING_HIDE, LOADING_SHOW} from "../types";


export const showLoading = (dispatch) => {

    dispatch({ type: LOADING_SHOW });
}

export const hideLoading = (dispatch) => {

    dispatch({ type: LOADING_HIDE });
}