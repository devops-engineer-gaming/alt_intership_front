import { For } from "solid-js"
import Todo from "./Todo";
import axios from "axios";
import { getTodos } from "../pages/Home";

const AddTodo = async () => {await
    axios.post('/api/todos/', {
        title: 'empty',
        description: 'empty'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    getTodos();}

const TodoList = (props) => {
    return (
        <div>
        <main class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12 mb-12">
            <For each={props.todos}>
                {(todo) => 
                <>
                    <Todo todo={todo} />
                </>}
            </For>
        </main>
        <button class="p-4 rounded-md bg-lime-100" onClick={AddTodo}>Add todo</button>
        </div>            
    );
}

export default TodoList;