export type SelectProps = {
    label?: string;
    options: { label: string; value: string }[];
    value?: string;
    onChange?: (value: string) => void;
    bordered?: boolean;
    fontSize?: number;
    width?: string | number;
    height?: string | number;
    align?: "left" | "center" | "right";
    quiet?: boolean;
    disabled?: boolean;
    filled?: boolean;
    rtl?: boolean;
    invalid?: boolean;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
}