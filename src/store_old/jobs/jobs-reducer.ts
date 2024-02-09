import { ADD_POSITIONS } from './jobs-actions';
import { ItemType } from '../types'

type ActionType = {
    type: string,
    payload: ItemType[],
}

export const jobsReducer = (state: ItemType[] = [], action: ActionType) => {
    switch (action.type) {
        case ADD_POSITIONS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};