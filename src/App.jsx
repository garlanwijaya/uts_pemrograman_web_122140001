import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FirstNumber from "./Props-State";
import SecondNumber from "./Lifecycle-Hooks";
import ThirdNumber from "./Data-Fetching";
import FourthNumber from "./State-management";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex justify-center mb-4 mt-4">
        <ul className="flex space-x-4">
          <li className="font-bold bg-amber-300 px-5 py-1 rounded-2xl">
            <Link to="/" className="hover:underline">
              Props & State
            </Link>
          </li>
          <li className="font-bold bg-amber-300 px-5 py-1 rounded-2xl">
            <Link to="/SecondNumber" className="hover:underline">
              Lifecycle dan Hooks
            </Link>
          </li>
          <li className="font-bold bg-amber-300 px-5 py-1 rounded-2xl">
            <Link to="/ThirdNumber" className="hover:underline">
              Data Fetching
            </Link>
          </li>
          <li className="font-bold bg-amber-300 px-5 py-1 rounded-2xl">
            <Link to="/FourthNumber" className="hover:underline">
              State Management
            </Link>
          </li>
          <li className="font-bold bg-amber-300 px-5 py-1 rounded-2xl">
            <Link to="/FifthNumber" className="hover:underline">
              Test Case
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<FirstNumber />} />
        <Route path="/SecondNumber" element={<SecondNumber />} />
        <Route path="/ThirdNumber" element={<ThirdNumber />} />
        <Route path="/FourthNumber" element={<FourthNumber />} />
        <Route path="*" element={<h1 className="text-5xl text-center font-bold">404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
