import {ItemType} from '../types'
export const ADD_POSITIONS = 'ADD_POSITIONS'

export const addJobs = (jobs: ItemType[]) => ({
    type: ADD_POSITIONS,
    payload: jobs,
})