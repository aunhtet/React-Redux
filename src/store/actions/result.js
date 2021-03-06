import * as actionTypes from './actionTypes';


export const saveResult = (res) => {
    //const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log('storeResult from action creator : ' +oldCounter);
            dispatch(saveResult(res));        
        }, 2000);
    }
};

export const deleteResult = (resId) => {
    return{
        type: actionTypes.DELETE_RESULT,
        resultID: resId
    }
};
