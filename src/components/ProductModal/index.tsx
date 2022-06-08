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
                            <C.CloseModalBtn 
                                onPress={() => closeModalFunc()}
                                activeOpacity={0.7}
                            >
                                <FontAwesomeIcon icon={faTimes} style={{color: 'rgba(0,0,0,0.7)'}}/>
                            </C.CloseModalBtn>
                        </C.TopInfo>

                        <C.BottomInfo>
                            <C.ProductInfo>Data: {item.date}</C.ProductInfo>
                            <C.ProductInfo>Vendedor: {item.seller}</C.ProductInfo>
                            <C.ProductInfo>cep: {item.zipcode}</C.ProductInfo>
                            <C.Price>R$ {totalPrice.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.Price>
                            <C.QuantityArea>
                                <C.QuantityIconArea 
                                    activeOpacity={0.7}
                                    onPress={decQuantity}
                                >
                                    <FontAwesomeIcon icon={faMinus} style={{}}/>
                                </C.QuantityIconArea>
                                <C.Quantity>{quantity}</C.Quantity>
                                <C.QuantityIconArea 
                                    activeOpacity={0.7}
                                    onPress={incQuantity}
                                >
                                    <FontAwesomeIcon icon={faPlus} style={{}}/>
                                </C.QuantityIconArea>
                            </C.QuantityArea>
                        </C.BottomInfo>
                        <C.AddCartBtn
                                activeOpacity={0.7}
                                onPress={() => {
                                    // console.log(quantity)
                                    dispatch(addItem({...item, quantity: quantity}))
                                    closeModalFunc()
                                    setQuantity(1);
                                }}
                            >
                                <C.BtnText>Adicionar ao carrinho</C.BtnText>
                            </C.AddCartBtn>
                    </C.InfoArea>

                </C.ModalBody>
            </C.ModalArea>
        </C.Container>
    );
}