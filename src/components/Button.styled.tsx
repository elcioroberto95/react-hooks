import styled, { css } from "styled-components";

interface ButtonProps {
    variants: 'primary' | 'secondary'
}
export const ButtonContainer = styled.button<ButtonProps>`
display:flex;
${props => css`background-color: ${props.variants}`}
${props =>  css`background-color:${props.variants};`}
`
