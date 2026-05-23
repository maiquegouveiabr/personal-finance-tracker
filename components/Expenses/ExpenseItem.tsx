import { Expense } from "@/interfaces/Expense";
import { useExpenseStore } from "@/stores/useExpenseStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ConfirmActionDialog from "../ConfirmActionDialog";

type Props = {
  expense: Expense;
};

export default function ExpenseItem({ expense }: Props) {
  const [dialogVisible, setDialogVisible] = useState(false);
  const { removeExpense } = useExpenseStore();
  const router = useRouter();

  const handleRemoveExpense = () => {
    setDialogVisible(true);
  };

  const handlePress = () => {
    router.push({
      pathname: "/detailExpenseModal",
      params: {
        id: expense.id,
      },
    });
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
      <Pressable onPress={handlePress}>
        <View style={styles.mainContainer}>
          <View style={styles.leftSideContainer}>
            <Text style={{}}>{expense.name}</Text>
          </View>
          <View style={styles.rightSideContainer}>
            <Text style={styles.detailsText}>{expense.date.toLocaleDateString()}</Text>
            <Text style={styles.detailsText}>${expense.totalPrice}</Text>
          </View>
          {/* <Pressable onPress={handleRemoveExpense} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
          <IconSymbol name="trash.circle.fill" color="red" size={28} />
          </Pressable> */}
        </View>
      </Pressable>
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
  leftSideContainer: {
    maxWidth: "70%",
  },
  rightSideContainer: {
    maxWidth: "20%",
  },
  detailsText: {
    textAlign: "right",
    fontSize: 11,
  },
});
