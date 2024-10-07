import "./App.css";

function App() {
  let [todoList, setTodoList] = useState([]);
  let saveTodoList = (event) => {
    let toname = event.target.toname.value;
    if (!todoList.includes(toname)) {
      let finalDolist = [...todoList, toname];
      setTodoList(finalDolist);
    } else {
      alert("Todo name already Exists....");
    }

    event.preventDefult();
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" />
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
