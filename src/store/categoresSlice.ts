import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string [] = []

const categoresSlice = createSlice({
    name: '@@categores',
    initialState,
    reducers: {
        addCategores: (state, action: PayloadAction<string>) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload)
            }
            return state;
        },
        deleteCategores: (state, action: PayloadAction<string>) => {
            return state.filter((item) => item !== action.payload);
        },
        clearCategores: () => {
            return []
        }
    }
})

export const { addCategores, deleteCategores, clearCategores } = categoresSlice.actions;
export default categoresSlice.reducer