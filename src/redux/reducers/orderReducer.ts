import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import { Order } from '../../types/Order';


type stateOrder = {
    idUserOrder: string,
    allOrders: Order[]
}

const slice = createSlice({
    name: 'order',
    initialState: {
        idUserOrder: '',
        allOrders: []
    } as stateOrder,
    reducers: {
        setIdUserOrder: (state, action: PayloadAction<string>)=> {
            state.idUserOrder = action.payload;
        },
        saveOrder: (state, action: PayloadAction<Order>) => {
            state.allOrders.push({
                cardNumber: action.payload.cardNumber,
                nameCardOwner: action.payload.nameCardOwner,
                validThru: action.payload.validThru,
                cvv: action.payload.cvv,
                totalPrice: action.payload.totalPrice,
                items: action.payload.items
            });
        },
        resetAllOrders: (state) => {
            state.idUserOrder = '';
            state.allOrders = [];
        }
    }
})

export const { setIdUserOrder, saveOrder, resetAllOrders} = slice.actions;

export default slice.reducer;