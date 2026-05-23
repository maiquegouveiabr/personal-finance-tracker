import { Expense } from "@/interfaces/Expense";
import { create } from "zustand";

interface CurrentExpenseStore {
  currentExpense: Expense | null;
  setCurrentExpense: (expense: Expense) => void;
}

export const useCurrentExpenseStore = create<CurrentExpenseStore>((set) => ({
  currentExpense: null,
  setCurrentExpense: (currentExpense) => set({ currentExpense }),
}));
