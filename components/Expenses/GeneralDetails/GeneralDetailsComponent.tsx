import { Expense, PaymentMethod } from "@/interfaces/Expense";
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
      <FormattedTextComponent primaryText="Total Price" secondaryText={`$${expense.totalPrice}`} />
      <FormattedTextComponent
        primaryText="Payment Method"
        secondaryText={PaymentMethod[expense.paymentMethod as keyof typeof PaymentMethod]}
      />
      <FormattedTextComponent primaryText="Has been paid" secondaryText={expense.isPaid ? "Yes" : "No"} />
    </View>
  );
}

const styles = StyleSheet.create({
  generalDetailsContainer: {
    marginVertical: 20,
  },
});
