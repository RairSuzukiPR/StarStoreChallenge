import * as C from './styles'
import React, { useState } from "react";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ProductModal } from './../ProductModal'
import { Item } from './../../types/Item'
import { addItem } from '../../redux/reducers/cartReducer';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';


type Props = {
    item: Item
}

export const ProductItem = ( props: Props ) => {
    const [validImg, setValidImg] = useState(true);
    const [modalVisibility, setModalVisibility] = useState(false);

    const dispatch = useAppDispatch();

    const closeModal = () => {
        setModalVisibility(false)
    }

    return(
        <>
            <C.Container 
                onPress={()=> setModalVisibility(true)}
                activeOpacity={0.7}
            >
                <C.ImageArea>
                    <C.ImageItem 
                        onError={() => setValidImg(false)}
                        source={validImg? {uri: props.item.thumbnailHd} : (require('./../../assets/images/default_item.png'))}
                        isValid={validImg}
                    />
                </C.ImageArea>
                <C.InfoArea>
                    <C.ItemTitle>{props.item.title}</C.ItemTitle>
                    <C.PriceAndButtonArea>
                        <C.Price>R$ {props.item.price.toFixed(2)}</C.Price>
                        <C.AddCartBtn 
                            onPress={() => dispatch(addItem({...props.item, quantity: 1}))}
                        >
                            <FontAwesomeIcon icon={faPlus} style={{color: '#fff'}}/>
                        </C.AddCartBtn>
                    </C.PriceAndButtonArea>
                </C.InfoArea>
            </C.Container>

            <ProductModal 
                visibility={modalVisibility} 
                item={props.item} validImg={validImg} 
                closeModalFunc={closeModal} 
            />
        </>
    );
}
