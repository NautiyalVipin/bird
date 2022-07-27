import {BrowserRouter,Route,Routes} from "react-router-dom"
import Register from "./Pages/Register";
import Landing from "./Pages/Landing"
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";



function App() {
  
  return (
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}/>
        <Route path="/signup" element={<Register bgColor="bg-[#242d34]" />}/>
          <Route path="/signin" element={<Login bgColor="bg-[#242d34]" />} />
          <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
