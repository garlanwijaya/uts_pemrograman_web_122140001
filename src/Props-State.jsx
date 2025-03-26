import React, { useState } from "react";
import PropTypes from "prop-types";

// Komponen 1: Komponen dengan state lokal
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded shadow-md ">
      <h2 className="text-lg font-bold mb-2">Counter: {count}</h2>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

// Komponen 2: Komponen penerima props
function DisplayMessage({ message }) {
  return <p className="text-gray-700">{message}</p>;
}

DisplayMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

// Komponen 3: Komponen yang mengirimkan props ke komponen lain
function ParentComponent() {
  const message = "Hello from ParentComponent";

  return (
    <div className="p-4 border rounded shadow-md">
      <DisplayMessage message={message} />
    </div>
  );
}

// Komponen 4: Komponen dengan lebih dari satu prop
function UserInfo({ name, age }) {
  return (
    <div className="p-4 border rounded shadow-md">
      <p className="text-gray-700">Name: {name}</p>
      <p className="text-gray-700">Age: {age}</p>
    </div>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

// Komponen 5: Komponen dengan state lokal dan mengirimkan state sebagai props
function NameContainer() {
  const [name, setName] = useState("Garland Wijaya");

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Username: {name}</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mb-2"
        onClick={() => {
          const firstNames = ["John", "Jane", "Garland", "Alex", "Emma"];
          const lastNames = ["Doe", "Wijaya", "Smith", "Johnson", "Williams"];
          const firstName =
            firstNames[Math.floor(Math.random() * firstNames.length)];
          const lastName =
            lastNames[Math.floor(Math.random() * lastNames.length)];
          setName(`${firstName} ${lastName}`);
        }}
      >
        Change Name
      </button>
      <UserInfo name={name} age={30} />
    </div>
  );
}

export default function FirstNumber() {
  return (
    <div className="space-y-4">
      <Counter />
      <ParentComponent />
      <NameContainer />
    </div>
  );
}
