import { Icon } from "solid-heroicons";
import { pencil, trash,  } from "solid-heroicons/solid"
import { createSignal, from, Show } from "solid-js";
import EditScreen from "./EditScreen";
import '../../css/animations.css';
import { setTodolist, todolist , API_URL} from "../store/store";
import axios from "axios";
import { getTodos } from "../pages/Home";

const Todo = ({todo}) => {

    const [editing, setEditing] = createSignal(false);

    return (
        <div class="w-full p-4 flex flex-col rounded-xl bg-lime-200 font-sans showing relative">
            <Show when={!editing()} fallback={<EditScreen todo={todo} 
            setEditing={setEditing}/>}>
                <div class="w-full flex flex-row">
                    <button onClick={() => setEditing(true)}>
                        <Icon class="w-6" path={pencil}/>
                    </button>
                    <button onClick={async () => {await axios.delete('/api/todos/'+todo.id)
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error));
                    getTodos();}}>
                        <Icon class="w-6" path={trash}/>
                    </button>    
                </div>
                <h1 class="text-3xl font-semibold">{todo.title}</h1>
                <p class="text-xl break-all">{todo.description}</p>
            </Show>
            
        </div>
    );
}

export default Todo;