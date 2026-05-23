import ExpensesList from "@/components/Expenses/ExpensesList";
import Title from "@/components/Title";
import { useExpenseStore } from "@/stores/useExpenseStore";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExpensesPage() {
  const { expenses } = useExpenseStore();

  const sortedExpenses = [...expenses].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <PaperProvider>
      <SafeAreaView style={styles.mainContainer}>
        <Title
          containerStyles={{
            alignItems: "flex-start",
          }}
        >
          Expenses, {expenses.length}
        </Title>
        <View style={styles.listContainer}>
          <ExpensesList expenses={sortedExpenses} />
          <Link style={styles.triggerModalBtn} href={"/createExpenseModal"}>
            Create New Expense
          </Link>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    height: "100%",
  },
  listContainer: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "80%",
  },
  triggerModalBtn: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
    fontWeight: "bold",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
  },
});
