import { TitleStyled } from './title.styles';
import { FC } from 'react';

interface titleProps {
  text: string;
}

export const Title: FC<titleProps> = ({ text }) => {
  return <TitleStyled>{text}</TitleStyled>;
};
