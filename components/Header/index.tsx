import React from 'react';
import { HeaderProps } from "../../entities/componentEntities/Header";
import { HeaderContainer, Slot } from './styles';
import { Title } from '@/app/styles';

const Header: React.FC<HeaderProps> = ({ ...props }) => {
    const childrenArray = React.Children.toArray(props.children);
    return (
        <HeaderContainer {...props}>
            <Slot>{childrenArray[0]}</Slot>
            <Title size={20} bold>
                {props.title}
            </Title>
            <Slot>{childrenArray[1]}</Slot>
        </HeaderContainer>
    );
};

export default Header;