'use client';

import List from "@/components/List";
import { TodoProvider } from "@/context/todo-context";

export default function Home() {
  return (
    <TodoProvider>
      <List />
    </TodoProvider>
  )
}