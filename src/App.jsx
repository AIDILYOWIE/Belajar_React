import { useState } from "react";
import "./App.css";

// section
import Home from "./sections/Home";

// components
import Navbar from "./components/Navbar";




function App() {
  const siswa = ["aidil", "melisa", "fais", "yojes", "bronu"];

  function hendleClick() {
    setLike(likes + 1);
  }

  const [likes, setLike] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Home title="Home Section" />
      <Home title="React Js" />

      <ul className="flex flex-wrap mx-auto my-5">
        {siswa.map((name) => (
          <li key={name} className=" font-medium text-blue-500 cursor-pointer w-10">
            {name}
          </li>
        ))}
      </ul>

      <button onClick={hendleClick}>like = {likes}</button>
      <br />
      <br />
      <Tolbar onPlayMovie={() => alert("Playing Film")} onUploudImage={() => alert("Done Uploud")} onConnect={() => alert("done connect")} />

    </>
  );
}

function Tolbar({ onPlayMovie, onUploudImage, onConnect }) {
  return (
    <>
      <Button onClick={onPlayMovie}>Click Film</Button>
      <br />
      <Button onClick={onUploudImage}>Uploud Your Image</Button>
      <br />
      <Button onClick={onConnect}>Connect Server</Button>
    </>
  );
}

function Button({ onClick, children }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}

export default App;
