import React from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";

function CustomHook() {
  const { data, loading, error } = useAxiosFetch(
    "http://localhost:5000/api/v1/todos"
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error?.message}</div>;

  return (
    <>
      {data && data.length > 0 && (
        <>
          <ul>
            {data.map((todo, index) => (
              <li key={index}>{todo?.title}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default CustomHook;
