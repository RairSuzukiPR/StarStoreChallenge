import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import { Order } from '../../types/Order';


type stateOrder = {
    idUserOrder: number,
    allOrders: Order[]
}

const slice = createSlice({
    name: 'order',
    initialState: {
        idUserOrder: 1,
        allOrders: []
    } as stateOrder,
    reducers: {
        setIdUserOrder: (state, action: PayloadAction<number>)=> {
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
        }
    }
})

export const { setIdUserOrder, saveOrder} = slice.actions;

export default slice.reducer;