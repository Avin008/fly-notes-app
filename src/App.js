import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Trash, Archive } from "./pages";
import { NavigationSidebar } from "./components";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-view">
        <NavigationSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archives" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
