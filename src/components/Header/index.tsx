import cscImg from '../../assets/csc.svg';

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={cscImg} alt="CSC Money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>   
            </Content>
        </Container>
    )
}