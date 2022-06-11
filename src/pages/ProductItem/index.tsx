import React, { useState } from "react";
import * as C from './styles'
import { useRoute } from "@react-navigation/native";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { addItem } from '../../redux/reducers/cartReducer';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParamList } from "../RootStackPrams";


type homePage = NativeStackNavigationProp<RootStackParamList, 'homeScreen'>;

export const ProductItem = () => {
    const route = useRoute<any>(); // arrumar o any
    const item = useAppSelector(state => state.itemsReducer.items[route.params.index]);    
    const dispatch = useAppDispatch();
    const navigation = useNavigation<homePage>();
    
    const [validImg, setValidImg] = useState(true);
    const [quantity, setQuantity] = useState(1);

    return(
        <C.Container>
            <C.ImageView>
                <C.ImageItem 
                    onError={() => setValidImg(false)}
                    source={validImg? {uri: item.thumbnailHd} : (require('./../../assets/images/default_item.png'))}
                    isValid={validImg}
                />
            </C.ImageView>
            <C.BottomInfo>
                <C.Title>{item.title}</C.Title>
                <C.Info>Data: {item.date}</C.Info>
                <C.Info>Vendedor: {item.seller}</C.Info>
                <C.Info>CEP: {item.zipcode}</C.Info>
                <C.Price>R$ {(item.price*quantity).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</C.Price>
                <C.QuantityView>
                    <C.QuantityIconArea 
                        activeOpacity={0.7}
                        onPress={() => quantity > 1 ? setQuantity(quantity-1) : ''}
                    >
                        <FontAwesomeIcon icon={faMinus} style={{}}/>
                    </C.QuantityIconArea>
                    <C.Quantity>{quantity}</C.Quantity>
                    <C.QuantityIconArea 
                        activeOpacity={0.7}
                        onPress={() => setQuantity(quantity+1)}
                    >
                        <FontAwesomeIcon icon={faPlus} style={{}}/>
                    </C.QuantityIconArea>
                </C.QuantityView>
                <C.AddCartBtn
                    activeOpacity={0.7}
                    onPress={() => {
                        dispatch(addItem({...item, quantity: quantity}))
                        navigation.goBack();
                        setQuantity(1);
                    }}
                >
                    <C.BtnText>Adicionar ao carrinho</C.BtnText>
                </C.AddCartBtn>
            </C.BottomInfo>
        </C.Container>
    );
}

