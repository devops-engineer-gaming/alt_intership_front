import EditScreen from "../partials/EditScreen";
import TodoList from "../partials/TodoList";
import { todos } from "../store/testing_vars";

const Home = () => {
    return (
        <div class="flex ">    
            <TodoList todos={todos}/>
        </div>
    );
}

export default Home;