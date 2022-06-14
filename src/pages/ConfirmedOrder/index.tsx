import * as C from './styles'
import React from "react";
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { ItemsList } from '../../components/ItemsList';

export const ConfirmedOrder = () => {
     const lastOrder = useAppSelector(state => state.orderReducer) 

    return (
        <C.Container>
            <C.ScrollViewArea>
                <C.ConfirmView>
                    <C.ConfirmTitle>Pedido confirmado!<FontAwesomeIcon icon={faSquareCheck}/></C.ConfirmTitle>
                    <C.AmountInfo>
                        <C.ConfirmText>Total</C.ConfirmText>
                        <C.ConfirmPrice>
                        {(lastOrder.allOrders[lastOrder.allOrders.length-1].totalPrice + 29.00).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                        </C.ConfirmPrice>
                    </C.AmountInfo>
                </C.ConfirmView>
                {lastOrder.allOrders[lastOrder.allOrders.length-1].items.length > 0 &&
                    <ItemsList items={lastOrder.allOrders[lastOrder.allOrders.length-1].items}/>
                }
            </C.ScrollViewArea>
        </C.Container>
    );
}