import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0); 
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => { 
    console.log("I runonly once"); }, []);
  useEffect(() => {
    if (keyword !== "" & keyword.length  > 5)
      console.log("Search for", keyword); }, [keyword]);  
  useEffect(() => {
    console.log("I run when keyword changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]); 
  return (
    <div className="App">
      <input 
        value={keyword}
        type="text" 
        placeholder="Search here"
        onChange={onChange}/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button text = "Continue" />
    </div>
  );
}

export default App;
