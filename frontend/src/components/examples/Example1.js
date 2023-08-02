function Example() {
  const shoot = () => {
    alert("Goal!");
  };
  return (
    <>
      <button onClick={shoot}>Take the shot!</button>
    </>
  );
}

export default Example;
