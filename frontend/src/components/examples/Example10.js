import { useState, useEffect } from "react";
import axios from "axios";

function Example10() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("http://localhost:5000/api/v1/todos");
      setData(data);
    };
    fetchData();
  }, []);
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

export default Example10;
