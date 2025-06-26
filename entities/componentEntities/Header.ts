import { ViewProps } from "react-native";

export type HeaderProps = ViewProps & {
    title: string;
    showBackButton?: boolean;
    onBackPress?: () => void;
    children?: React.ReactNode;
}