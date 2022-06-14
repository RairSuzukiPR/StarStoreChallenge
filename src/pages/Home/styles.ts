import styled from "styled-components/native";
import { FlatList } from "react-native";


export const Container = styled.View`
    flex: 1;
`;

export const Items = (styled.FlatList`
    padding: 10px;
` as unknown) as typeof FlatList;

export const TextField = styled.Text`
`;

export const ViewArea = styled.View`
    
`;

export const LoadingArea = styled.View`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
`;