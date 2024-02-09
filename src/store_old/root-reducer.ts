import { combineReducers } from 'redux';

import { categoresReducer } from './categores/categores-reducer';
import { jobsReducer } from './jobs/jobs-reducer';

export const rootReducer = combineReducers({
    categores: categoresReducer,
    jobs: jobsReducer
});