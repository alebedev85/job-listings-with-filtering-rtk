export const ADD_CATEGORE = 'ADD_CATEGORE'
export const DEL_CATEGORE = 'DEL_CATEGORE'
export const CLEAR_CATEGORE = 'CLEAR_CATEGORE'

export const addCategore = (categore:string) => ({
    type: ADD_CATEGORE,
    payload: categore
});

export const delCategore = (categore:string) => ({
    type: DEL_CATEGORE,
    payload: categore
})

export const clearCategore = () => ({
    type: CLEAR_CATEGORE,
    payload: '',
})