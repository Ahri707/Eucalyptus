import React from "react";
import { SelectProps } from "../../entities/componentEntities/Select";
import { SelectBox, StyledLabel } from "./styles";
import { FlatList, Pressable, Text } from "react-native";

const Select: React.FC<SelectProps> = ({ ...props }) => {
  const [opened, setOpened] = React.useState(false);
  const [_value, setValue] = React.useState(props.value);

  const labelProps = {
    value: _value,
    rtl: props.rtl,
    size: props.fontSize,
  };

  return (
    <SelectBox>
      {props.leftSlot && props.leftSlot}
      {props.label && <StyledLabel {...labelProps}>{props.label}</StyledLabel>}
      {opened && (
        <FlatList
          data={props.options}
          keyExtractor={item => item.value.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setValue(item.value);
                props.onChange?.(item.value);
                setOpened(false);
              }}>
              <Text>{item.label}</Text>
            </Pressable>
          )}
          style={{
            position: "absolute",
            top: 40,
            left: 0,
            right: 0,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        />
      )}
      {props.rightSlot && props.rightSlot}
    </SelectBox>
  );
};

export default Select;
