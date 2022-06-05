import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type User = {
    name: string,
    age: number,
    toeken: string
}

const slice = createSlice({
    name: 'user',
    initialState: {
        name: 'Rair',
        age: 25,
        token: '',
    },
    reducers: {
        setName: (state, action: PayloadAction<string>)=> {
            state.name = action.payload;
        },
        setAge: (state, action)=> {
            state.age = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
})

export const { setName, setAge, setToken } = slice.actions;

export default slice.reducer;