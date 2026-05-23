import { Expense } from "@/interfaces/Expense";
import React from "react";
import { StyleSheet, View } from "react-native";
import FormattedTextComponent from "./FormattedTextComponent";

type Props = {
  expense: Expense;
};

export default function GeneralDetailsComponent({ expense }: Props) {
  return (
    <View style={styles.generalDetailsContainer}>
      <FormattedTextComponent primaryText="Purchase Date" secondaryText={expense.date.toLocaleDateString()} />
      {expense.duePaymentDate && (
        <FormattedTextComponent
          primaryText="Due Payment Date"
          secondaryText={expense.duePaymentDate.toLocaleDateString()}
        />
      )}
      <FormattedTextComponent primaryText="Total Price" secondaryText={`$${expense.totalPrice}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  generalDetailsContainer: {
    marginVertical: 20,
  },
});
