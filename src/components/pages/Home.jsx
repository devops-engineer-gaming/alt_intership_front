import TodoList from "../partials/TodoList";
import axios from "axios";
import { createResource , createEffect} from "solid-js";
import { todolist, setTodolist } from "../store/store";

export const getTodos = async () => (await
    axios(
        {
            method: "GET",
            url: "http://127.0.0.1:8000/todos",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        }
    ).then(
        (response) => {
            console.log(response.data);
            setTodolist(response.data)}
    ))

export const [todos] = createResource(getTodos)

const Home = () => {
    createEffect(() => {
        console.log("The todos is now", todolist());
        
      });

    return (
        <div class="flex ">    
            <TodoList todos={todolist()}/>
        </div>
    );
}

export default Home;