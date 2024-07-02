import styles from './Button.module.css';
import { ButtonContainer } from './Button.styled';

interface ButtonProps {
    color: 'primary' | 'secondary' | 'danger' | 'success'
}
export function Button({ color }: ButtonProps): JSX.Element {


    return <ButtonContainer variants='primary'></ButtonContainer>
}