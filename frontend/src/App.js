import Title from "./components/Title";
import Example from "./components/examples/Example";
import Example2 from "./components/examples/Example2";
import Example3 from "./components/examples/Example3";
import Example4 from "./components/examples/Example4";
import Example5 from "./components/examples/Example5";
import Example6 from "./components/examples/Example6";

const cars = ["Bugatti", "BMW", "Porshe"];

function App() {
  return (
    <>
      <Title name="ToDo App" />
      <Example />
      <Example2 />
      <Example3 isGoal={true} />
      <Example4 cars={cars} />
      <Example5 isGoal={false} />
      <Example6 />
    </>
  );
}

export default App;
