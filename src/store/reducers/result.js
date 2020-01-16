import * as actionType from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result=> result.id !== action.resultID);
    return updateObject(state,{results: updatedArray});
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.STORE_RESULT:
            return updateObject(state,{results: state.results.concat({id: new Date(),value: action.result})});
            // return{
            //     ...state,
            //     results: state.results.concat({id: new Date(),value: action.result})
            // }
        case actionType.DELETE_RESULT:
            // const id =2;
            // const newArray = [...state.results];
            // state.results.splice(id,1);
            return deleteResult(state,action);
            // return{
            //     ...state,
            //     results: updatedArray
            //     //results:newArray
            // }
        default:
            return state;
    }
};

export default reducer;