import { Icon } from "solid-heroicons";
import { pencil, trash,  } from "solid-heroicons/solid"
import { createSignal, from, Show } from "solid-js";
import EditScreen from "./EditScreen";

const Todo = ({todo}) => {

    const [editing, setEditing] = createSignal(false);

    return (
        <div class="p-4 flex flex-col rounded-xl bg-lime-200 font-sans">
            <Show when={!editing()} fallback={<EditScreen todo={todo} 
            setEditing={setEditing}/>}>
                <div class="w-full flex flex-row">
                    <button onClick={() => setEditing(true)}>
                        <Icon class="w-6" path={pencil}/>
                    </button>   
                </div>
                <h1 class="text-3xl font-semibold">{todo.title}</h1>
                <p class="text-xl">{todo.description}</p>
            </Show>
            
        </div>
    );
}

export default Todo;