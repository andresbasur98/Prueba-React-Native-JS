import { types } from "../types/types";



const initialState = {
    fields: []
};




export const formfieldsReducer = ( state = initialState, action ) => {
    
    switch (action.type) {
        case types.formFields:
            console.log(action.payload)
           return {
               formfields: action.payload
           }
    
        default:
            return state;
    }

}
