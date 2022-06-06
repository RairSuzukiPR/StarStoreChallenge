import { Dimensions } from "react-native";
import styled from "styled-components/native";


export const Container = styled.Modal`
 
`;

export const ModalArea = styled.View`
    background-color: rgba(0, 0, 0, 0.7); 
    width: 100%;
    height: 100%;  
    align-items: center;
    justify-content:center;
`;

export const ModalBody = styled.View`
    background-color: #fff; 
    width: 95%;
    height: ${(Dimensions.get('window').height) * 0.35}px;
    border-radius: 15px;
    flex-direction: row;

`;

export const ImageArea = styled.View`
    flex:1.3;
    padding: 10px;
    
`;

export const ImageItem = styled.Image<{isValid: boolean}>`
    flex: 1;
    border-radius: 12px;
    ${props => !props.isValid &&
        `width: 100%;
        height: 100%;
        resizeMode: contain;`
    }
`;

export const InfoArea = styled.View`
    flex:1;
    justify-content: space-between;
    padding: 10px;
`;

export const TopInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #000;
    margin-bottom: 5px;
`;

export const CloseModalBtn = styled.TouchableOpacity`
`;

export const BottomInfo = styled.View`

`;

export const ProductInfo = styled.Text`
    font-size: 16px;
    color: #000;
    margin-bottom: 5px;
`;

export const Price = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #E22328;
    margin-bottom: 5px;
`;

export const QuantityArea = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const Quantity = styled.Text`
    margin: 0 7px;
    color: #000;
`;

export const QuantityIconArea = styled.TouchableOpacity`
    border: 1px solid black;
    align-items: center;
    justify-content:center;
    border-radius: 5px;
`;

export const AddCartBtn = styled.TouchableOpacity`
    background-color: #1A1A1A;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
`;

export const BtnText = styled.Text`
    color: #fff;
    font-size: 12px;
    font-weight: bold;
`;