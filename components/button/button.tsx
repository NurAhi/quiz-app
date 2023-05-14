import { ButtonProps } from "./button.interface";
import { ButtonStyled } from "./button.styles"
import { FC } from 'react';


export const Button: FC<ButtonProps> = ({text}) => {
    return <ButtonStyled>{text}</ButtonStyled>
}