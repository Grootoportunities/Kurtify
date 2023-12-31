import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import SideBarToggle from "./components/SideBarToggle/SideBarToggle";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <SideBarToggle />
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
        <Route path = "/profile" element = {<Profile/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
