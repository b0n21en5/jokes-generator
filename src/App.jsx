import { Route, Routes } from "react-router";
import Home from "./Page/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
