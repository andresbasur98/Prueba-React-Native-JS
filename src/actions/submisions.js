import { types } from "../types/types";

export const login = (form) => ({
    type: types.addSubmission,
    payload: form
    
})