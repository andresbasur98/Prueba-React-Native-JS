import { types } from "../types/types";


const initialState = {
    submissions: []
};



export const submissionsReducer = ( state = initialState, action ) => {
    
    switch (action.type) {
        case types.addSubmission:
           return {
               submissions: [...state.submissions, action.payload]
           }
    
        default:
            return state;
    }

}
