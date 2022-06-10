import styled from "styled-components/native";


export const ImageItem = styled.Image<{isValid: any}>`
    flex: 1;
    border-radius: 12px;
    ${props => !props.isValid &&
        `width: 100%;
        height: 100%;
        resizeMode: contain;`
    }
`;