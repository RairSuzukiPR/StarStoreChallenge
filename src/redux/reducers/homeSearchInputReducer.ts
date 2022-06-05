import { createSlice } from '@reduxjs/toolkit'; 


const slice = createSlice({
    name: 'homeSearchInput',
    initialState: {
        inputText: ''
    },
    reducers: {
        setInputText: (state, action) => {
            state.inputText = action.payload;
        }
    }
})

export const {setInputText} = slice.actions;

export default slice.reducer;