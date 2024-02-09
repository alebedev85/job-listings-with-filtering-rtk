import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from './types';

const initialState: ItemType[] = []

const jobsSlice = createSlice({
    name: '@@jobs',
    initialState,
    reducers: {
        addJobs: (state, action: PayloadAction<ItemType[]>) => {
            return action.payload;
        },
    }
})

export const { addJobs } = jobsSlice.actions;
export default jobsSlice.reducer