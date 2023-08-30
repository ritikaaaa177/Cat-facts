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
      console.log(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
    const interval = setInterval(getApiData, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1 className="heading mt-20">My Facts-Your Cuteheart 😍</h1>
      {/* {isError !== "" && <h2>{isError}</h2>} */}
      <div className="facts">
        <h1 className="head-fact">{myData.fact}</h1>
      </div>
    </>
  );
}

export default App;
