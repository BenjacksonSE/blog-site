import { Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";

function App() {
  return (
    <div className="App">
       <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:postId' element={<Single />} />
        <Route path='/write' element={<Write />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
