import ExpensesList from "@/components/Expenses/ExpensesList";
import ExpensesTitle from "@/components/Expenses/ExpensesTitle";
import PrimaryButton from "@/components/PrimaryButton";
import { useExpenseStore } from "@/stores/useExpenseStore";
import { globalStyles } from "@/styles/globalStyles";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExpensesPage() {
  const { expenses } = useExpenseStore();

  const sortedExpenses = [...expenses].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <PaperProvider>
      <SafeAreaView style={globalStyles.container}>
        <ExpensesTitle />
        <View style={styles.listContainer}>
          <ExpensesList expenses={sortedExpenses} />
          <PrimaryButton buttonStyles={{ marginTop: 20 }} onPress={() => router.push("/createExpenseModal")}>
            Create New Expense
          </PrimaryButton>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "80%",
  },
});
