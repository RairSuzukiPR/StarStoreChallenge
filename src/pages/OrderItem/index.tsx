import * as C from './styles'
import React, { useEffect, useState } from "react";
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useRoute } from "@react-navigation/native";
import { ItemWithQuantity } from '../../types/ItemWithQuantity';
import { ItemsList } from '../../components/ItemsList';


export const OrderItem = () => {
    const orders = useAppSelector(state => state.orderReducer.allOrders)
    const route = useRoute<any>(); // arrumar o any

    return(
        <C.Container>
            <C.ScrollViewArea>
                <C.ConfirmView>
                    <C.ConfirmTitle>Pedido #{route.params.index+1}</C.ConfirmTitle>
                    <C.AmountInfo>
                    <C.ConfirmText>Frete</C.ConfirmText>
                        <C.ConfirmPrice>29,99</C.ConfirmPrice>
                    </C.AmountInfo>
                    <C.AmountInfo>
                        <C.ConfirmTextTotal>Total</C.ConfirmTextTotal>
                        <C.ConfirmPriceTotal>
                            {(orders[route.params.index].totalPrice + 29.99).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                        </C.ConfirmPriceTotal>
                    </C.AmountInfo>
                </C.ConfirmView>

                <ItemsList items={orders[route.params.index].items}/>
            </C.ScrollViewArea>
        </C.Container>
    );
}