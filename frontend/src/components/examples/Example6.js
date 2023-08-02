function Car(props) {
  return <li>I am a {props.brand}</li>;
}
function Example6() {
  const cars = ["Bugatti", "Ford", "Porshe"];
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
