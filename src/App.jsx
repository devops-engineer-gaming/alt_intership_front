import Home from "./components/pages/Home";
import './index.css'
import { createSignal , createEffect, createResource} from "solid-js";

function App() {

  const [todolist, setTodolist] = createSignal(null);
    const [todos] = createResource(async () => (await
    axios.get('https://62f0c03de2bca93cd23c2add.mockapi.io/todos').then(
        (response) => {
            console.log(response.data);
            setTodolist(response.data)}
    )))

    createEffect(() => {
        console.log("The todos is now", todolist());
        
      });

  return (
    <Home todolist={todolist()}/>
  );
}

export default App;
