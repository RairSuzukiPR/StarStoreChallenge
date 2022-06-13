import * as C from './styles'
import React from "react";
import { ActivityIndicator } from 'react-native';

type Props = {
    bgColor: string,
    indicatorColor: string
}

export const LoadingArea = ({bgColor, indicatorColor}: Props) => {
    return (
        <C.LoadingArea bgColor={bgColor}>
            <ActivityIndicator size='large' color={indicatorColor}/>
        </C.LoadingArea>
    );
}