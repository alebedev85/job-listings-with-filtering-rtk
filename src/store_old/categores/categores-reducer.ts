import { ADD_CATEGORE, DEL_CATEGORE, CLEAR_CATEGORE } from './categores-actions';

type ActionType = {
    type: string,
    payload: string,
}


export const categoresReducer = (state: string[] = [], action: ActionType) => {
    switch (action.type) {
        case ADD_CATEGORE: {
            // console.log('add');
            if (!state.includes(action.payload)) {
                return [...state, action.payload]
            }
            return state;
        }
        case DEL_CATEGORE: {
            // console.log('del');
            return state.filter((item) => item !== action.payload);
        }

        case CLEAR_CATEGORE: {
            // console.log('clear');
            return [];
        }
        default: {
            return state;
        }
    }
};