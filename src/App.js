import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Cereated :)"); 
    // destory function => 컴포넌트 없어질 떄 실행하도록 return
    return () => console.log("destroyed :(")
  }, [])
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0); 
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => { 
    console.log("I run only once"); }, []);

  useEffect(() => {
    if (keyword !== "" & keyword.length  > 5)
      console.log("Search for", keyword); }, [keyword]);  

  useEffect(() => {
    console.log("I run when keyword changes");
  }, [keyword]);
  
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]); 

  const [showing, setShowing] = useState(false); 
  const onClick2 = () => setShowing((prev) => !prev);
  return (
    <div>
      <input 
        value={keyword}
        type="text" 
        placeholder="Search here"
        onChange={onChange}/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      <Button text = "Continue" />
    </div>
  );
}

export default App;
