import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

type Props = {
  label: string;
  value: string;
  onChange?: (text: string) => void;
} & Omit<TextInputProps, "value" | "onChange">;

export default function InputComponent({ value, onChange, label, ...props }: Props) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput {...props} mode="outlined" value={value} onChangeText={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
  },
});
