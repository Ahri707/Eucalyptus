import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    height: 60px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.background};
`;

export const Slot = styled.View`
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
`;