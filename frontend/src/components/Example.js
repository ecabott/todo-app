function Example() {
  const shoot = () => {
    alert("goal");
  };
  return (
    <>
      <button onClick={shoot}>Take the shot!</button>
    </>
  );
}

export default Example;
