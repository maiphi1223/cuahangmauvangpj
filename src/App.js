import "./App.css";
import { BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import Admin from "./admin/admin";
import Home from "./Component/home";
function App() {
  return (
    <>
      <Router>
        {/* <Link to="/admin">to admin</Link> */}
        <Routes>
          
          <Route exact path="/admin" element={<Admin/>}/>
          <Route path="/" element={<Home/>}/>
            
        </Routes>
      </Router>
    </>
  );
}

export default App;
