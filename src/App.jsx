import React, { useState } from 'react';
import randomColor from 'randomcolor';

const App = () => {
  const [time, setTime] = useState(0);
  const [value, setValue] = useState(10);
  const [color, setColor] = useState(randomColor());
  const [bgColor, setBgColor] = useState(randomColor());

  const handleClick = (event) => {
    if (event.target.name === 'reset') {
      setValue(0);
      return setTime(0);
    }
    if (event.target.name === 'less') {
      if (value >= 1) setValue((prevValue) => prevValue - 1);
    } else if (event.target.name === 'less5') {
      value >= 5 ? setValue((prevValue) => prevValue - 5) : setValue(0);
    } else if (event.target.name === 'more')
      setValue((prevValue) => prevValue + 1);
    else setValue((prevValue) => prevValue + 5);
  };

  const handleInput = (event) => {
    event.preventDefault();
    const newValue = +event.target.value;
    setValue(() => newValue);
  };

  const handleChange = () => {
    let counter = 0;
    let timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
      setColor(randomColor());
      setBgColor(randomColor());
      counter++;
      if (counter === value) clearInterval(timerId);
    }, 100);
  };

  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="container h-screen flex flex-col items-center justify-center mx-auto"
      >
        <button
          className="cursor-pointer text-white text-3xl"
          name="reset"
          onClick={handleClick}
        >
          ❌
        </button>
        <div className="flex justify-center">
          <button
            name="less5"
            onClick={handleClick}
            className="px-3 text-4xl select-none"
          >
            ⏪
          </button>
          <button
            name="less"
            onClick={handleClick}
            className="px-3 text-4xl select-none"
          >
            ☚
          </button>
          <input
            className="my-4 text-4xl w-1/5 text-center"
            type="text"
            name="input"
            onChange={handleInput}
            value={value}
          />
          <button
            name="more"
            onClick={handleClick}
            className="px-3 text-4xl select-none"
          >
            ☛
          </button>
          <button
            name="more5"
            onClick={handleClick}
            className="px-3 text-4xl select-none"
          >
            ⏩
          </button>
        </div>
        <span
          className="cursor-pointer text-white text-6xl"
          style={{ color: color }}
          onClick={handleChange}
        >
          {time}
        </span>
      </div>
    </>
  );
};

export default App;
