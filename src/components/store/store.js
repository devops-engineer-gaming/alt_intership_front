import { createSignal } from "solid-js";

export const [todolist, setTodolist] = createSignal(null);

export const API_URL = 'http://127.0.0.1:8000';