import Todo from "./components/todo"
import Form from "./components/form"

function App() {
  return (
    <>
      <div className="bg-gray-800 border-b-2 border-gray-400">
        <Todo/>
      </div>
      <div className="bg-gray-800">
        <Form/>
      </div>
    </>
  )
}

export default App
