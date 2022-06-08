import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type userState = {
    id: number
    name: string,
    age: number,
    token: string
}

const slice = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        name: '',
        age: 0,
        token: '',
    } as userState,
    reducers: {
        setId: (state, action: PayloadAction<number>)=> {
            state.id = action.payload;
        },
        setName: (state, action: PayloadAction<string>)=> {
            state.name = action.payload;
        },
        setAge: (state, action: PayloadAction<number>)=> {
            state.age = action.payload;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        }
    }
})

export const { setId, setName, setAge, setToken } = slice.actions;

export default slice.reducer;