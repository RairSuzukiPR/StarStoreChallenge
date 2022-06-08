import * as C from './styles'
import React, { useState } from "react";
import { ItemWithQuantity } from '../../types/ItemWithQuantity';

type Props = {
    items: ItemWithQuantity[]
}

export const ItemsList = ({items}: Props) => {
    const [validImg, setValidImg] = useState(false);
    
    return(
        <C.Container>
            {items.map((item: ItemWithQuantity, index2: number) => (
                <C.ProductItemView key={index2}>
                    <C.ImageView>
                        <C.ImageItem 
                            onError={() => setValidImg(false)}
                            // source={validImg? {uri: item.thumbnailHd} : (require('./../../assets/images/default_item.png'))}
                            source={{uri: item.thumbnailHd}}
                            isValid={validImg}
                        />
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
            ))}
        </C.Container> 
    );
}

