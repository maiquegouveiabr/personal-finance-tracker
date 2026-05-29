import { Picker } from "@react-native-picker/picker";
import { Text, View } from "react-native";

type Props = {
  label: string;
  data: { label: string; value: string }[]; // Array of options for the picker
  selectedValue: string; // Currently selected value
  onValueChange: (value: string) => void; // Callback when a new value is selected
};

export default function PickerComponent({ label, data, selectedValue, onValueChange }: Props) {
  return (
    <View style={{ flexDirection: "column", gap: 5 }}>
      <Text>{label}</Text>
      <Picker
        style={{ backgroundColor: "white" }}
        mode="dropdown"
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}
      >
        {data.map((option) => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
}
