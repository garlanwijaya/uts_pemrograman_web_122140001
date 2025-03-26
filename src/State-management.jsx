import { useReducer } from "react";

const initialState = {
  // inisialisasi state
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">State Management</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          dispatch({ type: "UPDATE_STATE", payload: { name: "Garland Wijaya" } })
        }
      >
        Update State
      </button>
      <p className="text-gray-700 mt-4">Name: {state.name}</p>
    </div>
  );
};

export default App;
