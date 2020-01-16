import * as actionType from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(),value: action.result})
            }
        case actionType.DELETE_RESULT:
            // const id =2;
            // const newArray = [...state.results];
            // state.results.splice(id,1);
            const updatedArray = state.results.filter(result=> result.id !== action.resultID);
            return{
                ...state,
                results: updatedArray
                //results:newArray
            }
        default:
            return state;
    }
};

export default reducer;