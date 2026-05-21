import { ExpenseType } from "@/types/ExpenseType";
import { FlatList, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import ExpenseItem from "./ExpenseItem";

type Props = {
  expenses: ExpenseType[];
  containerStyles?: StyleProp<ViewStyle>;
};

export default function ExpensesList({ expenses, containerStyles }: Props) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      contentContainerStyle={{ flexGrow: 1, padding: 10 }}
      style={[styles.expensesContainer, containerStyles]}
      keyExtractor={(expense) => String(expense.id)}
      data={expenses}
      renderItem={(expense) => <ExpenseItem expense={expense.item} />}
    />
  );
}
const styles = StyleSheet.create({
  expensesContainer: {
    backgroundColor: "black",
    borderRadius: 5,
    maxHeight: "90%",
  },
});
