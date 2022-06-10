import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Item} from './../../types/Item'


type itemsState = {
    items: Item[]
}

const slice = createSlice({
    name: 'items',
    initialState: {
        items: []
    } as itemsState,
    reducers: {
        setItems: (state, action: PayloadAction<Item[]>)=> {
            state.items = action.payload;
        }
    }
})

export const { setItems } = slice.actions;

export default slice.reducer;