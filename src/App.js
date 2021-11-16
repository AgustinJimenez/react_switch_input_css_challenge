import React from "react";
import "./App.css";

const Switch = ({ value, onClick }) => (
  <div className="switch-container" onClick={onClick}>
    <div className={`switch-circle ${!!value ? "on" : "off"}`} />
  </div>
);

const App = () => {
  const [value, setValue] = React.useState(false);
  const handleClick = React.useCallback(() => {
    setValue(!value);
  }, [value]);
  return (
    <div>
      <Switch value={value} onClick={handleClick} />
    </div>
  );
};

export default App;
