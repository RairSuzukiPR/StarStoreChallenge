import styled from "styled-components/native";

export const LoadingArea = styled.View<{bgColor: string}>`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${props => props.bgColor == 'default' ? 'rgba(0, 0, 0, 0.7)' : props.bgColor};
    justify-content: center;
    align-items: center;
`;