import { ThemeType } from "@/entities/commons/theme";
import { SelectProps } from "@/entities/componentEntities/Select";
import styled from "styled-components/native";

export const SelectBox = styled.TouchableOpacity<SelectProps & { theme: ThemeType }>`
  border-radius: 4px;
  margin: 15px auto;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  ${({ theme, quiet, bordered, invalid }) => bordered && !quiet && `border: 1px solid ${invalid ? theme.danger : theme.secondaryBorder};`}
  ${({ theme, quiet, filled }) => filled && !quiet && `background-color: ${theme.secondary};`}
`;

export const StyledLabel = styled.Text<SelectProps & { theme: ThemeType }>`
    font-size: ${({ size }) => size || 16}px;
    color: ${({ theme,invalid }) => invalid ? theme.danger : theme.text};
    ${({ rtl }) => rtl ? 'right' : 'left'}: 10px;
`;
