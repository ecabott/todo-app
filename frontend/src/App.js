import Title from "./components/Title";
import Example1 from "./components/examples/Example1";
import Example2 from "./components/examples/Example2";
import Example3 from "./components/examples/Example3";
import Example4 from "./components/examples/Example4";
import Example5 from "./components/examples/Example5";
import Example6 from "./components/examples/Example6";
import Example7 from "./components/examples/Example7";
import Example8 from "./components/examples/Example8";

const cars = ["Bugatti", "BMW", "Porshe"];

function App() {
  return (
    <>
      <Title name="React App" />
      <Example1 />
      <Example2 />
      <Example3 isGoal={true} />
      <Example4 cars={cars} />
      <Example5 isGoal={false} />
      <Example6 />
      <Example7 />
      <Example8 />
    </>
  );
}

export default App;
