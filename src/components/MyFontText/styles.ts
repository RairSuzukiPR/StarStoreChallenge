import styled from "styled-components/native";


export const TextField = styled.Text<{fontSize: number}>`
    
    font-size: ${props => props.fontSize}px;
`;