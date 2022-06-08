import * as C from './styles'
import React from "react";
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { resetCart } from '../../redux/reducers/cartReducer';


export const EmptyCart = () => {
    const dispatch = useAppDispatch()

    return (
        <C.Container
            activeOpacity={0.7}
            onPress={() => dispatch(resetCart())}
        >
            <C.TextBtn>Limpar Carrinho</C.TextBtn>
        </C.Container>
    );
}