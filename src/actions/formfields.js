import { types } from "../types/types";

export const insertFormFields = (form) => ({
    type: types.formFields,
    payload: Object.keys(form)
    
})