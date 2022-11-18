import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        {/* <TaskForm createTask={createTask} /> */}
        <TaskForm />
        {/* <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
        <TaskList />
      </div>
    </main>
  );
}

export default App;
