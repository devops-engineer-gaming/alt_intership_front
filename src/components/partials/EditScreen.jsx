import { xCircle } from "solid-heroicons/solid";
import { Icon } from "solid-heroicons";
import { API_URL } from "../store/store";
import "../../css/animations.css";
import axios from "axios";
import { getTodos } from "../pages/Home";
import { createSignal } from "solid-js";

const EditScreen = ({ todo, setEditing }) => {

  const [title, setTitle] = createSignal(todo.title);
  const [description, setDescription] = createSignal(todo.description);

  return (
    <div class="">
      <button onClick={() => setEditing(false)}>
        <Icon class="w-6" path={xCircle} />
      </button>
      <form name={"form"+String(todo.id)} 
        class="w-full h-auto font-sans showing"
      >
        <label class="text-2xl font-semibold" for="title">
          Title:
        </label>
        <input
          class="w-full h-full bg-lime-300 accent-lime-400
                    rounded-xl p-2 text-xl"
          type="text"
          id="title"
          name="title"
          value={todo.title}
        />
        <br />
        <br />
        <label class="text-2xl font-semibold" for="descritption">
          Description:
        </label>
        <textarea
          class="w-full h-max resize-none
          bg-lime-300 accent-lime-400
          rounded-xl p-2 text-xl"
          rows="8"
          id="description"
          name="description"
          value={todo.description}
        ></textarea>
        <button
          class="duration-300 bg-lime-500 font-bold text-white py-2 px-6 rounded-md
                    hover:scale-110 hover:bg-lime-600"
          type="button" onClick={async () => {
            await axios.post(API_URL+'/todos/'+todo.id, {
              title: document.forms["form"+String(todo.id)]['title'].value ,
              description: document.forms["form"+String(todo.id)]['description'].value 
            }).then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });;
            getTodos();
          }}
        >Save</button>
      </form>
    </div>
  );
};

export default EditScreen;
