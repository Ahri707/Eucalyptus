import { ButtonProps } from "@/src/entities/componentEntities/buttonProps";
import styled from "styled-components/native";

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
    width: 100%;
    height: 50px;
    background-color: ${({ theme, type }) => {
        switch (type) {
            case "primary":
                return theme.primary;
            case "secondary":
                return theme.secondary;
            case "quiet":
                return theme.background;
            default:
                return theme.primary;
        }
    }
};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: auto;
`;

export const StyledButtonText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
`;