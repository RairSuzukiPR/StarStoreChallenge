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
    height: ${(Dimensions.get('window').height) * 0.30}px;
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
    justify-content: space-around;
    padding: 10px;
`;

export const TopInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    flex: 1;
    font-size: 22px;
    font-weight: bold;
    color: #000;
    margin-bottom: 5px;
`;

export const BottomInfo = styled.View`
    margin-top: 15px;
`;

export const ProductInfo = styled.Text`
    font-size: 16px;
    color: #000;
    margin-bottom: 5px;
`;

export const Price = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #E22328;
    margin: 10px 0;
`;
