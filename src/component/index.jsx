export function DisplayLight({ isOn }) {
  return (
    <>
      <div>
        <h1>{isOn ? "Licht is on" : "Licht is off"}</h1>
      </div>
    </>
  );
}
