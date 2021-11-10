import "./App.css";
import { BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import Admin from "./admin/admin";
import Home from "./Component/home";
import Page404 from "./Component/page404";
import Shop from "./Component/shop";
function App() {
  return (
    <>
      <Router>
        {/* <Link to="/admin">to admin</Link> */}
        <Routes>
          
          <Route path="/admin/*" element={<Admin/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Page404/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
