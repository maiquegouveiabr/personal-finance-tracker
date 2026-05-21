import { create } from "zustand";

export interface Expense {
  id: number;
  category: string;
  name: string;
  date: Date;
  price: number;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id"> & { id?: number }) => void;
  removeExpense: (id: number) => void;
  updateExpense: (updatedExpense: Expense) => void;
  setExpenses: (expenses: Expense[]) => void;
}

const initialExpenses: Expense[] = [
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

export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: initialExpenses,
  addExpense: (expense) =>
    set((state) => ({
      expenses: [
        ...state.expenses,
        {
          ...expense,
          id: expense.id ?? Date.now(),
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
