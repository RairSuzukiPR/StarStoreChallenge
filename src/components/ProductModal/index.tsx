import React, { useState } from "react";
import * as C from './styles'
import { Item } from './../../types/Item'


type Props = {
    visibility: boolean;
    item: Item;
    validImg: boolean;
    closeModalFunc: () => void;
}

export const ProductModal = ({visibility, item, validImg, closeModalFunc}: Props) => {

    return (
        <C.Container 
            visible={visibility}
            animationType='fade'
            transparent={true}
            onRequestClose={() => closeModalFunc()}
        >
            <C.ModalArea>
                <C.ModalBody>
                    <C.ImageArea>
                        <C.ImageItem 
                            source={validImg? {uri: item.thumbnailHd} : (require('./../../assets/images/default_item.png'))}
                            isValid={validImg}
                        />
                    </C.ImageArea>

                    <C.InfoArea>
                        <C.TopInfo style={{alignItems: 'flex-start'}}> 
                            <C.Title>{item.title}</C.Title>
                        </C.TopInfo>

                        <C.BottomInfo>
                            <C.ProductInfo>Data: {item.date}</C.ProductInfo>
                            <C.ProductInfo>Vendedor: {item.seller}</C.ProductInfo>
                            <C.ProductInfo>cep: {item.zipcode}</C.ProductInfo>
                            <C.Price>R$ {item.price.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.Price>
                        </C.BottomInfo>
                    </C.InfoArea>

                </C.ModalBody>
            </C.ModalArea>
        </C.Container>
    );
}