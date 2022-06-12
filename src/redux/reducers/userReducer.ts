import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from './../../types/User'


const slice = createSlice({
    name: 'user',
    initialState: {
        id: '',
        name: '',
        email: '',
        token: '',
        typeAuth: ''
    } as User,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.typeAuth = action.payload.typeAuth;
        },
        resetUser: (state) => {
            state.id = '';
            state.name = '';
            state.email = '';
            state.token = '';
            state.typeAuth = '';
        }
    }
})

export const { setUser, resetUser } = slice.actions;

export default slice.reducer;