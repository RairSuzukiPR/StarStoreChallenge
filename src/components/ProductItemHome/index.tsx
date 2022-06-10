import * as C from './styles'
import React, { useState } from "react";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ProductModal } from '../ProductModal'
import { Item } from '../../types/Item'
import { addItem } from '../../redux/reducers/cartReducer';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../../pages/RootStackPrams';


type Props = {
    item: Item,
    index: number,
    setEnableScroll: React.Dispatch<React.SetStateAction<boolean>>
}

type productItemPage = NativeStackNavigationProp<RootStackParamList, 'ProductItemScreen'>;

export const ProductItemHome = ( props: Props ) => {
    const [validImg, setValidImg] = useState(true);
    const [modalVisibility, setModalVisibility] = useState(false);

    const dispatch = useAppDispatch();

    const navigation = useNavigation<productItemPage>(); 

    const closeModal = () => {
        setModalVisibility(false)
    }

    return(
        <>
            <C.Container 
                onPress={()=> navigation.navigate('ProductItemScreen', {index: props.index})} //criar uma nova pag mandando o index como parms
                onLongPress={()=> {setModalVisibility(true); props.setEnableScroll(false)}}
                onPressOut={()=> {setModalVisibility(false); props.setEnableScroll(true)}}
                pressRetentionOffset={400}
                delayLongPress={350}
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
                        <C.Price>R$ {props.item.price.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.Price>
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
