// tailwind
import "./style/input.css";
// components
import { Container } from "./components";
// axios
import axios from "axios";
// hooks
import { useEffect, useState } from "react";

// ! use useReduce

// body
document.body.className = "grid place-items-center h-screen ";

function App() {
  useEffect(() => {
    getAdvice();
  }, []);

  let getAdvice = () => {
    axios.get("	https://api.adviceslip.com/advice").then((res) => {
      setAdviceId(res.data.slip.id);
      setAdvice(res.data.slip.advice);
      // console.log(res.data.slip);
    });
  };
  let [adviceId, setAdviceId] = useState(null);
  let [advice, setAdvice] = useState(null);
  return (
    <>
      <div>
        <Container Id={adviceId} btn={getAdvice} Advice={advice} />
      </div>
    </>
  );
}
export default App;
