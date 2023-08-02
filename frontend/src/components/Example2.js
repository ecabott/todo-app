function Example2() {
  const shoot = (a) => {
    alert(a);
  };
  return (
    <>
      <button onClick={() => shoot("Goal!")}>Take the shot 2!</button>
    </>
  );
}

export default Example2;
