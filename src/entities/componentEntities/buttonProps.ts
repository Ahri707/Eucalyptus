import { StyleProp, ViewStyle } from "react-native"


export type ButtonProps = {
    title: string,
    onPress: () => void,
    style?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<ViewStyle>,
    type?: "primary" | "secondary" | "quiet" 
}