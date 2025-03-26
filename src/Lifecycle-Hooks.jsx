import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useParams } from "react-router-dom";

// Custom Hook: useDebounce
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

// Komponen Counter dengan useState
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-200 p-4 rounded">
      <p className="text-lg font-bold">Count: {count}</p>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

// Komponen InputFocus dengan useRef
function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="bg-gray-200 p-4 rounded">
      <input ref={inputRef} type="text" className="bg-white p-2 rounded mr-3" />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleFocus}
      >
        Focus
      </button>
    </div>
  );
}

// Komponen MemoizedFunction dengan useCallback
function MemoizedFunction() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="bg-gray-200 p-4 rounded">
      <p className="text-lg font-bold">Count: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
}

// Komponen ExpensiveComputation dengan useMemo
function ExpensiveComputation() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    // simulasi komputasi yang mahal
    for (let i = 0; i < 10000000; i++) {
      // do something
    }
    return count * 2;
  }, [count]);

  return (
    <div className="bg-gray-200 p-4 rounded">
      <p className="text-lg font-bold">Result: {result}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

// Komponen DebouncedInput dengan useDebounce
function DebouncedInput() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <div className="bg-gray-200 p-4 rounded">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-white p-2 rounded w-full"
      />
      <p className="text-lg font-bold">Debounced Value: {debouncedValue}</p>
    </div>
  );
}

// Komponen FetchData dengan UseEffect
function FetchData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/users");
        const jsonData = await response.json();
        const filteredData = jsonData.users.slice(0, 3).map((user) => ({
          id: user.id,
          firstname: user.firstName,
          gender: user.gender,
        }));
        setData(filteredData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <p className="text-center font-bold text-2xl text-blue-500">Loading...</p>
    );
  }

  if (error) {
    return (
      <p className="text-center font-bold text-2xl text-red-500">
        Error: {error}
      </p>
    );
  }

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-2xl font-bold mb-4">Data Users</h2>
      <ul className="space-y-2">
        {data.map((user) => (
          <li key={user.id} className="border p-2 rounded hover:bg-gray-100">
            <p className="text-gray-700">ID: {user.id}</p>
            <p className="text-gray-700">Firstname: {user.firstname}</p>
            <p className="text-gray-700">Gender: {user.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SecondNumber() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-3xl font-bold">Hooks React</h1>
      <Counter />
      <FetchData />
      <InputFocus />
      <MemoizedFunction />
      <ExpensiveComputation />
      <DebouncedInput />
    </div>
  );
}
