import * as C from './styles'
import React from "react";
import { ItemWithQuantity } from '../../types/ItemWithQuantity';
import { RenderImage } from '../RenderImage';

type Props = {
    items: ItemWithQuantity[]
}

export const ItemsList = ({items}: Props) => {

    
    return(
        <C.Container>
            {items.map((item: ItemWithQuantity, index2: number) => {

                return (
                    <C.ProductItemView key={index2}>
                    <C.ImageView>
                        <RenderImage url={item.thumbnailHd}/>
                    </C.ImageView>

                    <C.InfoView>
                        <C.TopInfo>
                            <C.Title>{item.title}</C.Title>
                            <C.FinalPrice>R$ {item.price.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.FinalPrice>
                        </C.TopInfo>
                        <C.BottomInfo>
                            <C.BottomText>Vendedor: {item.seller}</C.BottomText>
                            <C.BottomText>CEP: {item.zipcode}</C.BottomText>
                            <C.BottomText>Quantidade: {item.quantity}</C.BottomText>
                        </C.BottomInfo>
                    </C.InfoView>
                </C.ProductItemView>
                );
            })}
        </C.Container> 
    );
}

