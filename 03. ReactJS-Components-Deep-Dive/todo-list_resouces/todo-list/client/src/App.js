import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loading";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then(res => res.json())
      .then(data => {
        const result = Object.keys(data).map(id => ({ id, ...data[id] }))
        setTodos(result)
        setIsLoading(false)
      })
  }, [])
  const toggleTodoStatus = (id) => {
    setTodos(state => state.map(t => t.id === id ? ({ ...t, isCompleted: !t.isCompleted }) : t))
  }
  const onTodoAdd = () => {
    const lastId = Number(todos[todos.length - 1].id)
    let text = prompt('Task name')
    setTodos(state => [...state, { id: lastId + 1, text, isCompleted: false }])
  }
  return (
    <div className="App">

      <Header></Header>
      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
          </div>

          <div className="table-wrapper">
{isLoading? <Loader ></Loader>:<TodoList todos={todos} toggleTodoStatus={toggleTodoStatus}></TodoList> }
            

            
          </div>
        </section>
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
