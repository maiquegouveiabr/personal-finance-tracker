import { useExpenseStore } from "@/stores/useExpenseStore";
import { Alert, Pressable } from "react-native";
import { IconSymbol } from "../ui/icon-symbol";

type Props = {
  expenseId: string;
  onDismiss: () => void;
};

export default function HeaderRight({ expenseId, onDismiss }: Props) {
  const { removeExpense, expenses } = useExpenseStore();
  const expense = expenses.find((el) => el.id === expenseId);

  const handleDelete = () => {
    Alert.alert("Remove Expense", `Are you sure you want to remove the item (${expense?.name}) from the list?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => {
          if (expenseId) {
            removeExpense(expenseId);
            onDismiss();
          }
        },
      },
    ]);
  };

  return (
    <Pressable onPress={handleDelete} style={({ pressed }) => [{ marginRight: 16, opacity: pressed ? 0.6 : 1 }]}>
      <IconSymbol name="trash.circle.fill" color="red" size={28} />
    </Pressable>
  );
}
