import * as C from './styles'
import React, { useState } from "react";

type Props = {
    url: string
}

export const RenderImage = ({url}: Props) => {
    const [validImg, setValidImg] = useState(true);

    return (
        <>
            <C.ImageItem
                onError={() => setValidImg(false)}
                source={ validImg ? {uri: url} : (require('./../../assets/images/default_item.png')) }
                isValid={validImg}
                defaultSource={require('./../../assets/images/default_item.png')}
            />
        </>
    );
}
