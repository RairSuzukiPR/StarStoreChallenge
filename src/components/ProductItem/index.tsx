import * as C from './styles'
import React, { useEffect, useState } from "react";
import { Image, Text, View } from 'react-native';
import {MyFontText} from './../MyFontText'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { api } from '../../api';


type Item = {
	date: string;
	price: number;
	seller: string;
	thumbnailHd: string;
	title: string;
	zipcode: string;
	large?: boolean
};

type Props = {
    imageElement: JSX.Element
}

export const ProductItem = ( {date, price, seller, thumbnailHd, title, zipcode}: Item ) => {
    const [validImg, setValidImg] = useState(true)
    
    return(
        <C.Container>
            <C.ImageArea>
                <C.ImageItem 
                    onError={() => setValidImg(false)}
                    source={validImg? {uri: thumbnailHd} : (require('./../../assets/images/default_item.png'))}
                    isValid={validImg}
                />
            </C.ImageArea>
            <C.InfoArea>
                <C.ItemTitle>{title}</C.ItemTitle>
                <C.PriceAndButtonArea>
                    <C.Price>R$ {price.toFixed(2)}</C.Price>
                    <C.AddCartBtn>
                        <FontAwesomeIcon icon={faPlus} style={{color: '#fff'}}/>
                    </C.AddCartBtn>
                </C.PriceAndButtonArea>
            </C.InfoArea>
        </C.Container>
    );
}
