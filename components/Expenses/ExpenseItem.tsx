import { ExpenseType } from "@/types/ExpenseType";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  expense: ExpenseType;
};

export default function ExpenseItem({ expense }: Props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={{}}>{expense.name}</Text>
      <Text style={{}}>{expense.category}</Text>
      <Text style={{}}>{expense.date.toLocaleDateString()}</Text>
      <Text style={{}}>${expense.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});
