import React, { useEffect, useState } from "react";
import * as C from './styles'
import { Item } from './../../types/Item'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { addItem } from '../../redux/reducers/cartReducer';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';


type Props = {
    visibility: boolean;
    item: Item;
    validImg: boolean;
    closeModalFunc: () => void;
}

export const ProductModal = ({visibility, item, validImg, closeModalFunc}: Props) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(item.price);

    const dispatch = useAppDispatch();

    useEffect(()=> {
        setTotalPrice(quantity*item.price);
    }, [quantity])

    const incQuantity = () => {
        setQuantity(quantity+1);
    }

    const decQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity-1);
        }
    }

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
                            <C.Price>R$ {totalPrice.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.Price>
                        </C.BottomInfo>
                    </C.InfoArea>

                </C.ModalBody>
            </C.ModalArea>
        </C.Container>
    );
}