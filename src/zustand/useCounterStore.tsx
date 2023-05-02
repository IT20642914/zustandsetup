import {create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useCounterStore = create<CounterState>(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    { name: "counter-store" }
  ) as StateCreator<CounterState>
);

export default useCounterStore;
