import ExpensesList from "@/components/Expenses/ExpensesList";
import Title from "@/components/Title";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const expenseData = [
  { id: 1, category: "Food", name: "Groceries", date: new Date("2026-05-18"), price: 124.5 },
  { id: 2, category: "Transport", name: "Uber to Airport", date: new Date("2026-05-17"), price: 45.0 },
  { id: 3, category: "Food", name: "Lunch at Restaurant", date: new Date("2026-05-16"), price: 68.0 },
  { id: 4, category: "Utilities", name: "Electricity Bill", date: new Date("2026-05-15"), price: 89.99 },
  { id: 5, category: "Shopping", name: "New Headphones", date: new Date("2026-05-14"), price: 199.9 },
  { id: 6, category: "Entertainment", name: "Netflix Subscription", date: new Date("2026-05-13"), price: 39.9 },
  { id: 7, category: "Health", name: "Pharmacy", date: new Date("2026-05-12"), price: 52.75 },
  { id: 8, category: "Transport", name: "Monthly Bus Pass", date: new Date("2026-05-10"), price: 120.0 },
  { id: 9, category: "Food", name: "Dinner with Friends", date: new Date("2026-05-09"), price: 185.5 },
  { id: 10, category: "Rent", name: "May Rent", date: new Date("2026-05-01"), price: 1850.0 },
];

export default function ExpensesPage() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Title
        containerStyles={{
          alignItems: "flex-start",
        }}
      >
        Expenses
      </Title>
      <ExpensesList
        expenses={expenseData}
        containerStyles={{
          marginTop: 20,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
});
