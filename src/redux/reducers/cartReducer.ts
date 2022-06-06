import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import { ItemWithQuantity } from './../../types/ItemWithQuantity';


interface stateCart {
    items: ItemWithQuantity[],
    totalItems: number,
    totalPrice: number
}

interface ItemAndOperation {
    item: ItemWithQuantity,
    operation: string
}

const slice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalItems: 0,
        totalPrice: 0
    } as stateCart,
    reducers: {
        addItem: (state, action: PayloadAction<ItemWithQuantity>) => {
            let {hasIt, indexOfItem} = hasItem([...state.items], {...action.payload})

            if (hasIt){
                state.items[indexOfItem].quantity += action.payload.quantity;
                // state.totalItems += action.payload.quantity;
            } else {
                state.items.push(action.payload);
                // state.totalItems += action.payload.quantity;
            }
            state.totalItems += action.payload.quantity;
            state.totalPrice += action.payload.price * action.payload.quantity;
        },
        removeItem: (state, action: PayloadAction<ItemWithQuantity>) => {
            let {hasIt, indexOfItem} = hasItem([...state.items], {...action.payload})

            if(hasIt){
                state.items.splice(indexOfItem, 1);
                state.totalItems -= 1;
                state.totalPrice -= action.payload.price;
            }
        },
        changeItemQuantity: (state, action: PayloadAction<ItemAndOperation>) => {
            let {hasIt, indexOfItem} = hasItem([...state.items], {...action.payload.item})

            if (hasIt) {
                if (action.payload.operation == '-'){
                    if (state.items[indexOfItem].quantity > 1) {
                        state.items[indexOfItem].quantity -= 1;
                        state.totalItems -= 1;
                        state.totalPrice -= action.payload.item.price;
                    }
                } else if (action.payload.operation == '+') {
                    state.items[indexOfItem].quantity += 1;
                    state.totalItems += 1;
                    state.totalPrice += action.payload.item.price;
                }
            }
        },
        removeAllItems: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        },
    }
})

const hasItem = (items: ItemWithQuantity[], payload: ItemWithQuantity) => {
    let hasIt = false;
    let indexOfItem = -1;
    items.map((item: ItemWithQuantity, index: number) => {
        if (JSON.stringify(item).substring(1, JSON.stringify(item).indexOf('quantity')-2) == JSON.stringify(payload).substring(1, JSON.stringify(payload).indexOf('quantity')-2)){
            hasIt = true;
            indexOfItem = index;
        }
    })
    return {hasIt, indexOfItem};
}

export const {addItem, removeItem, changeItemQuantity, removeAllItems} = slice.actions;

export default slice.reducer;


// let isNew = true;

// state.items.filter((item) => {
//     let itemStr = JSON.stringify(item)
//     let payloadStr = JSON.stringify(action.payload)
//     if (itemStr == payloadStr) {
//         item.quantity = item.quantity + 1;
//         state.totalItems = state.totalItems + 1;
//         isNew = false;
//     }
// });

// if(isNew){
//     state.items.push(action.payload);
//     state.totalItems = state.totalItems + action.payload.quantity
// }