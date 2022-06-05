import React from "react";
import * as C from './styles';

type Props = {
    text: string,
    fontSize: number,
    fontWeight?: number
}

export const MyFontText = ({text, fontSize, fontWeight}: Props) => { //text: string, fontSizee: number, bold?: boolean, semiBold?: boolean


    return(
        <C.TextField fontSize={fontSize}>{text}</C.TextField>
    );
}