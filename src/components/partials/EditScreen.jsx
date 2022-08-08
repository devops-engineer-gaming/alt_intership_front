import { xCircle } from "solid-heroicons/solid";
import { Icon } from "solid-heroicons";

const EditScreen = ({todo, setEditing}) => {
    return (
            <div>
                <button onClick={() => setEditing(false)}><Icon class="w-6" path={xCircle} /></button>
                <form class="w-full h-auto font-sans" action={"/edit/"+todo.id} method="post">
                    <label class="text-2xl font-semibold" for="title">Title:</label>
                    <input class="w-full h-full bg-lime-300 accent-lime-400
                    rounded-xl p-2 text-xl" type="text" id="title" name="title" value={todo.title}/><br/><br/>
                    <label class="text-2xl font-semibold" for="descritption">Description:</label>
                    <input class="w-full h-full bg-lime-300 accent-lime-400
                    rounded-xl p-2 text-xl" type="text" id="descritption" name="descritption" 
                    value={todo.description}/><br/><br/>
                    <input class="duration-300 bg-lime-500 font-bold text-white py-2 px-6 rounded-md
                    hover:scale-110 hover:bg-lime-600" type="submit" value="Save" />
                </form>
            </div>
    );
}

export default EditScreen;

