import { IconSymbol } from "@/components/ui/icon-symbol";
import { useExpenseStore } from "@/stores/useExpenseStore";
import { ExpenseType } from "@/types/ExpenseType";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ConfirmActionDialog from "../ConfirmActionDialog";

type Props = {
  expense: ExpenseType;
};

export default function ExpenseItem({ expense }: Props) {
  const [dialogVisible, setDialogVisible] = useState(false);
  const { removeExpense } = useExpenseStore();

  const handleRemoveExpense = () => {
    setDialogVisible(true);
  };

  return (
    <>
      {dialogVisible && (
        <ConfirmActionDialog
          proceedBtnText="Remove"
          cancelBtnText="Cancel"
          title={expense.name}
          text={`Are you sure you want to remove the item (${expense.name}) from the expenses list?`}
          hideDialog={() => setDialogVisible(false)}
          proceedActionFunc={() => removeExpense(expense.id)}
        />
      )}
      <View style={styles.mainContainer}>
        <View>
          <Text style={{}}>{expense.name}</Text>
          <Text style={{}}>{expense.category}</Text>
          <Text style={{}}>{expense.date.toLocaleDateString()}</Text>
          <Text style={{}}>${expense.price}</Text>
        </View>
        <Pressable onPress={handleRemoveExpense} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
          <IconSymbol name="trash.circle.fill" color="red" size={28} />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {},
});
