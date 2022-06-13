import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import { Order } from '../../types/Order';


type stateOrder = {
    idUserOrder: string,
    allOrders: Order[],
    tempOrder: Order
}

const slice = createSlice({
    name: 'order',
    initialState: {
        idUserOrder: '',
        allOrders: [],
        tempOrder: {
            cardNumber: 0,
            nameCardOwner: '',
            validThru: '',
            cvv: 0,
            totalPrice: 0,
            items: [],
        },
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
        // saveTempOrder: (state, action: PayloadAction<Order>) => {
        //     state.tempOrder = {
        //         cardNumber: action.payload.cardNumber,
        //         nameCardOwner: action.payload.nameCardOwner,
        //         validThru: action.payload.validThru,
        //         cvv: action.payload.cvv,
        //         totalPrice: action.payload.totalPrice,
        //         items: action.payload.items
        //     };
        // },
        resetAllOrders: (state) => {
            state.idUserOrder = '';
            state.allOrders = [];
        },
        setAllOrders: (state, action: PayloadAction<Order[]>) => {
            state.allOrders = action.payload;
        }
    }
})

export const { setIdUserOrder, saveOrder, resetAllOrders, setAllOrders } = slice.actions;

export default slice.reducer;