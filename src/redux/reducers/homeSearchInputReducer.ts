import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 


const slice = createSlice({
    name: 'homeSearchInput',
    initialState: {
        inputText: ''
    },
    reducers: {
        setInputText: (state, action: PayloadAction<string>) => {
            state.inputText = action.payload;
        }
    }
})

export const {setInputText} = slice.actions;

export default slice.reducer;