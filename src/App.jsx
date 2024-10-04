import { useState } from "react";
import "./App.css";
import { DisplayLight } from "./component";

// function App() {
//   const [light, setlight] = useState(false);
//   function onoff() {
//     setlight(!light);
//   }
//   return (
//     <>
//       <div>
//         <h1>{light === true ? "Licht is on" : "Licht is off"}</h1>
//         <button
//           className={`light-container ${light ? "light-on" : "light-off"}`}
//           onClick={onoff}
//         >
//           click
//         </button>
//       </div>
//     </>
//   );
// }
function App2() {
  const [light, setLight] = useState(true);

  function handleButtonClick() {
    setLight((prev) => !prev);
  }

  return (
    <div>
      <DisplayLight isOn={light} />
      <button
        className={`light-container ${light ? "light-on" : "light-off"}`}
        onClick={handleButtonClick}
      >
        click
      </button>
    </div>
  );
}

export default App2;
