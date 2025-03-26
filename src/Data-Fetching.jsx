import React, { useState, useEffect } from "react";

export default function ThirdNumber() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Todo List</h1>
      <ul className="list-none m-0 p-0">
        {data.map((todo) => (
          <li key={todo.id} className="bg-white shadow-md p-4 my-2 rounded">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
