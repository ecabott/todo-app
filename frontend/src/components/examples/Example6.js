function Car(props) {
  return <li>A {props.brand}</li>;
}
function Example6() {
  const cars = ["Bugatti", "BMW", "Porshe"];
  return (
    <>
      <h1>Who lives in my garage</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}
export default Example6;
