import { useState } from "react";
import { sculptureList } from "./components/Data";
import Button from "./components/Elements/Button/Button";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let hasNext = 0;
  for (let i = 0; i < sculptureList.length; i++) {
    hasNext = i;
  }
  console.log(index);

  console.log(hasNext);
  function heandleClick() {
    return hasNext ? setIndex(index + 1) : setIndex(0);
  }

  function heandleMore() {
    return setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={heandleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <p>
        ({index + 1} of {sculptureList.length})
      </p>
      <button onClick={heandleMore}>{showMore ? "Hide" : "Show"} Details</button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />

      <div className=" flex justify-center bg-blue-100 min-h-screen items-center">
        <div className="flex gap-x-3">
          <Button variant=" bg-blue-700">Login</Button>
          <Button variant=" bg-red-700">Log Out</Button>
        </div>
      </div>
    </>
  );
}
