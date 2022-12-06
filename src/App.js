import "./App.css";
import SignupForm from "./Component/Signup-new";
import LoginForm from "./Component/Login";
import Home from "./Component/Home";
import Auth from "./Component/Auth";
// import Edit from "./Component/edit";
// import View from "./Component/view";
import Post from "./Component/post";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Auth><Home /></Auth>}/>
        {/* <Route path="/viewuser" element={<Auth><View /></Auth>}/> */}
        <Route path="/post" element={<Post />} />
        {/* <Route path="/edituser" element={<Auth><Edit /></Auth>}/> */}
        <Route path="/logout" element={<LoginForm />} />
        <Route path="/" element={ <LoginForm />}/>
      </Routes>
    </div>
  );
}
export default App;
