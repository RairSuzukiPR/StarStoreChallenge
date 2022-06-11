import * as C from './styles'
import React from "react";
import { ActivityIndicator } from 'react-native';


export const LoadingArea = () => {
    return (
        <C.LoadingArea>
            <ActivityIndicator size='large' color='#fff'/>
        </C.LoadingArea>
    );
}