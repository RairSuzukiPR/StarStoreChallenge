import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type userState = {
    id: number
    name: string,
    email: string,
    token: string,
    typeAuth: string
}

const slice = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        name: '',
        email: '',
        token: '',
        typeAuth: ''
    } as userState,
    reducers: {
        setId: (state, action: PayloadAction<number>)=> {
            state.id = action.payload;
        },
        setName: (state, action: PayloadAction<string>)=> {
            state.name = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>)=> {
            state.email = action.payload;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setTypeAuth: (state, action: PayloadAction<string>) => {
            state.typeAuth = action.payload;
        }
    }
})

export const { setId, setName, setEmail, setToken, setTypeAuth } = slice.actions;

export default slice.reducer;