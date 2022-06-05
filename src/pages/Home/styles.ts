import styled from "styled-components/native";
import React from "react";
import { FlatList } from "react-native";

export const Container = styled.View`
    /* background-color: #f2f2f2; */
    /* background-color: rgba(0,0,0,0.3); */
    flex: 1;
`;

export const Items = (styled.FlatList`
    padding: 10px;
` as unknown) as typeof FlatList;

export const TextField = styled.Text`
`;

export const ViewArea = styled.View`
    
`;