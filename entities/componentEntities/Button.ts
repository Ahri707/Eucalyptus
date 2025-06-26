import { TouchableOpacityProps } from "react-native";
import { IconProps } from "./Icon";

export type ButtonProps = TouchableOpacityProps & {
    title?: string;
    quiet?: boolean;
    bordered?: boolean;
    disabled?: boolean;
    filled?: boolean;
    secondary?: boolean;
    rtl?: boolean;
    circular?: boolean;
    iconProps?: IconProps;
};