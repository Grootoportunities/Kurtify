import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SidebarToggle from "./components/SidebarToggle/SidebarToggle";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <SidebarToggle />
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
