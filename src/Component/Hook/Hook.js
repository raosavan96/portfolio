import React, { useState } from 'react'

function Hook() {
  const [color, setColor] = useState("#ccc");


  return (
    <>
      <h1 style={{ color: color }}>My favorite color is {color}!</h1>
      <button style={{ color: color }}
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button style={{ color: color }}
        type="button"
        onClick={() => setColor("yellow")}
      >yellow</button>
      <button style={{ color: color }}
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button style={{ color: color }}
        type="button"
        onClick={() => setColor("green")}
      >Green</button>

      <div>
        <Garage color={color} />
      </div>
      <div>
        <input style={{ color: color}} type="text" value={color} name="" id="" />
      </div>
    </>
  )
}

export default Hook;


function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage(props) {
  const cars = ['Ford', 'BMW', 'Audi', 'TaTa'];

  return (
    <>
      <h1 style={{ color: props.color }}>Who lives in my garage?</h1>
      <ul style={{ color: props.color }}>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}
