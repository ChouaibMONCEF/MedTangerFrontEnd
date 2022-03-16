import Navbar from "./Components/Navbar/navbar";
import Sidebar from "./Components/Sidebar/sidebar";
import StudentList from "./Pages/StudentList/StudentList";
import Home from "./Pages/Home/home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="*" element={<Home />}/>
          <Route path="/UserList" element={<StudentList />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;