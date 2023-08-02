function Example5(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}
function MadeGoal() {
  return <h1>Goal!</h1>;
}

function MissedGoal() {
  return <h1>MISSED!</h1>;
}
export default Example5;
