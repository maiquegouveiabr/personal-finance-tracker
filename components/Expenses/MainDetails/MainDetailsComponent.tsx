import { Expense } from "@/interfaces/Expense";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  expense: Expense;
};

export default function MainDetailsComponent({ expense }: Props) {
  return (
    <View style={{ flexDirection: "column", gap: 3 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{expense.name}</Text>
      <Text style={{ fontSize: 14, fontWeight: "semibold" }}>{expense.category}</Text>
      {expense.merchant && <Text style={{ fontSize: 14, fontWeight: "semibold" }}>{expense.merchant}</Text>}
      {expense.description && (
        <View style={{ padding: 10, backgroundColor: "#ccc", borderRadius: 5 }}>
          <Text style={{ fontSize: 14, fontWeight: "semibold" }}>{expense.description}</Text>
        </View>
      )}
    </View>
  );
}
