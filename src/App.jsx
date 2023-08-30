import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  //using promises
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => setData(res.data))
  //       .catch((error) => setIsError(error.message));
  //   }, []);

  //using async and await

  const getApiData = async () => {
    try {
      const res = await axios.get("https://catfact.ninja/fact?max_length=140");
      setData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  });

  return (
    <>
      <h1 className="heading mt-20">About axios</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <h1>{myData.fact}</h1>
    </>
  );
}

export default App;
