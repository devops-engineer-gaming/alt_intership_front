import { For } from "solid-js"
import Todo from "./Todo";
import EditScreen from "./EditScreen";

const TodoList = ({todos}) => {
    return (
        <main class="xl:flex xl:flex-row grid grid-cols-1 gap-6 mt-12">
            <For each={todos}>
                {(todo) => 
                <>
                    <Todo todo={todo} />
                </>}
            </For>
        </main>
    );
}

export default TodoList;