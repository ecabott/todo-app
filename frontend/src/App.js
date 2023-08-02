import Title from "./components/Title";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  return (
    <>
      <Title name="ToDo App" />
      <Example />
      <Example2 />
      <Example3 isGoal={true} />
    </>
  );
}

export default App;
