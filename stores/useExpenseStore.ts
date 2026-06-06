import { Expense } from "@/interfaces/Expense";
import { create } from "zustand";

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id"> & { id?: string }) => void;
  removeExpense: (id: string) => void;
  updateExpense: (updatedExpense: Expense) => void;
  setExpenses: (expenses: Expense[]) => void;
}

export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({
      expenses: [
        ...state.expenses,
        {
          ...expense,
          id: expense.id ?? String(Date.now()),
        },
      ],
    })),
  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((el) => el.id !== id),
    })),
  updateExpense: (updatedExpense) =>
    set((state) => ({
      expenses: state.expenses.map((el) => (el.id === updatedExpense.id ? updatedExpense : el)),
    })),
  setExpenses: (expenses) => set({ expenses }),
}));
