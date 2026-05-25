import InputComponent from "@/components/Expenses/CreateNewExpense/InputComponent";
import { Expense } from "@/interfaces/Expense";
import { useExpenseStore } from "@/stores/useExpenseStore";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateExpenseModal() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [date, setDate] = useState(new Date());
  const [installments, setInstallments] = useState("");

  const { addExpense } = useExpenseStore();

  const handleCreate = () => {
    if (!name.trim() || !category.trim() || !description.trim() || !totalPrice) {
      return Alert.alert("Check Inputs", "Please fill out the form correctly.");
    }

    if (isNaN(Number(totalPrice))) {
      return Alert.alert("Check Inputs", "Please fix the price input, it should be a real number.");
    }

    const newExpense = {
      id: String(Date.now()),
      name: name.trim(),
      category: category.trim(),
      description: description.trim(),
      date: date,
      duePaymentDate: new Date(),
      isPaid: false,
      totalPrice: Number(totalPrice),
      createdAt: new Date(),
      payments: [],
      updatedAt: new Date(),
    } as Expense;

    addExpense(newExpense);
    router.dismiss();
  };

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: (event, selectedDate) => setDate(selectedDate ? selectedDate : new Date()),
      mode: "date",
      is24Hour: true,
    });
  };

  const onlyNumbersRegex = /^[0-9]*$/;
  const allowedRegex = /^[0-9.,]*$/;
  const noLeadingZeroRegex = /^(0[.,][0-9]+|[1-9][0-9.,+\-()/\s]*|\.[0-9]+|)$/;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
      <SafeAreaView style={styles.container}>
        <InputComponent label="Expense Name" value={name} onChange={(text) => setName(text)} />
        <InputComponent label="Category" value={category} onChange={(text) => setCategory(text)} />
        <InputComponent label="Description" value={description} onChange={(text) => setDescription(text)} />
        <InputComponent
          keyboardType="numeric"
          label="Total Price"
          value={totalPrice}
          onChange={(text) => {
            if (allowedRegex.test(text)) {
              if (noLeadingZeroRegex.test(text)) {
                setTotalPrice(text);
              }
            }
          }}
        />
        <InputComponent
          label="Purchase Date"
          value={date.toLocaleDateString()}
          disabled
          right={<TextInput.Icon icon="calendar" onPress={showDatePicker} />}
        />
        {/* TODO: Add installments input and logic */}
        <InputComponent
          keyboardType="numeric"
          label="Installments"
          value={installments}
          onChange={(text) => {
            if (onlyNumbersRegex.test(text)) {
              setInstallments(text);
            }
          }}
        />
        <Button onPress={handleCreate} textColor="white" style={styles.createBtn}>
          Create New Expense
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "column",
    gap: 10,
  },
  createBtn: {
    backgroundColor: "black",
    borderRadius: 5,
  },
});
