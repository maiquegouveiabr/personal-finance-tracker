import InputComponent from "@/components/Expenses/CreateNewExpense/InputComponent";
import PickerComponent from "@/components/PickerComponent";
import PrimaryButton from "@/components/PrimaryButton";
import { Expense } from "@/interfaces/Expense";
import { useExpenseStore } from "@/stores/useExpenseStore";
import { globalStyles } from "@/styles/globalStyles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Switch, TextInput } from "react-native-paper";

export default function EditExpenseModal() {
  // hooks
  const { updateExpense, expenses } = useExpenseStore();

  // params
  const { id } = useLocalSearchParams<{ id: string }>();
  const expense = expenses.find((el) => el.id === id);

  // states
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    totalPrice: "",
    date: new Date(),
    paymentMethod: "",
    isPaid: false,
  });

  useEffect(() => {
    if (expense) {
      setForm({
        name: expense.name,
        category: expense.category,
        description: expense.description,
        totalPrice: expense.totalPrice.toString(),
        date: expense.date,
        paymentMethod: expense.paymentMethod,
        isPaid: expense.isPaid,
      });
    }
  }, [expense]);

  const handleEdit = () => {
    if (!form.name.trim() || !form.category.trim() || !form.description.trim() || !form.totalPrice) {
      return Alert.alert("Check Inputs", "Please fill out the form correctly.");
    }

    if (isNaN(Number(form.totalPrice))) {
      return Alert.alert("Check Inputs", "Please fix the price input, it should be a real number.");
    }

    const newExpense = {
      ...expense,
      name: form.name.trim(),
      category: form.category.trim(),
      description: form.description.trim(),
      totalPrice: Number(form.totalPrice),
      date: form.date,
      paymentMethod: form.paymentMethod,
      updatedAt: new Date(),
      isPaid: form.isPaid,
    } as Expense;

    updateExpense(newExpense);
    router.dismiss();
  };

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: form.date,
      onChange: (event, selectedDate) => setForm({ ...form, date: selectedDate ? selectedDate : new Date() }),
      mode: "date",
      is24Hour: true,
    });
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 18 }}>
      <View style={[globalStyles.container, styles.container]}>
        <InputComponent label="Expense Name" value={form.name} onChange={(text) => setForm({ ...form, name: text })} />
        <InputComponent
          label="Category"
          value={form.category}
          onChange={(text) => setForm({ ...form, category: text })}
        />
        <InputComponent
          label="Description"
          value={form.description}
          onChange={(text) => setForm({ ...form, description: text })}
        />
        <InputComponent
          keyboardType="numeric"
          label="Total Price"
          value={form.totalPrice}
          onChange={(text) => setForm({ ...form, totalPrice: text })}
        />
        <InputComponent label="Purchase Date" value={form.date.toLocaleDateString()} />
        <InputComponent
          label="Purchase Date"
          value={form.date.toLocaleDateString()}
          disabled
          right={<TextInput.Icon icon="calendar" onPress={showDatePicker} />}
        />
        <PickerComponent
          label="Payment Method"
          data={[
            { label: "Pix", value: "PIX" },
            { label: "Credit Card", value: "CREDIT_CARD" },
            { label: "Debit Card", value: "DEBIT_CARD" },
            { label: "Cash", value: "CASH" },
            { label: "Boleto", value: "BOLETO" },
            { label: "Bank Transfer", value: "BANK_TRANSFER" },
          ]}
          selectedValue={form.paymentMethod}
          onValueChange={(value) => setForm({ ...form, paymentMethod: value })}
        />
        <View style={styles.paidContainer}>
          <Text>Have you paid for this expense?</Text>
          <Switch value={form.isPaid} onValueChange={(value) => setForm({ ...form, isPaid: value })} />
        </View>

        <PrimaryButton buttonStyles={{ marginTop: 20 }} onPress={handleEdit}>
          Save Changes
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
  },
  editBtn: {
    backgroundColor: "#2c8fb6",
    borderRadius: 8,
    marginTop: 20,
  },
  paidContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 8,
  },
});
