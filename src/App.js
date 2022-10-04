import { createBrowserRouter, RouterProvidor } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvidor router={router} />
    </div>
  );
}

export default App;
