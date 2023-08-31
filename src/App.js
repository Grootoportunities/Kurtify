import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import SideBarToggle from "./components/SideBarToggle/SideBarToggle";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <SideBarToggle />
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
