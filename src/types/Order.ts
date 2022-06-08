import { ItemWithQuantity } from '../types/ItemWithQuantity';

export type Order = {
    cardNumber: number,
    nameCardOwner: string,
    validThru: string,
    cvv: number,
    totalPrice: number,
    items: ItemWithQuantity[],
}