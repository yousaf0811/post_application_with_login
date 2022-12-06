import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Auth(props) {
  const [isLogin, setIsLogin] = useState(false);


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("name"));
    if (items) {
      setIsLogin(true);
    }
  }, []);

  return <>{isLogin ? props.children : (

<h1>Please Login To Continue : <Link to="/login">Login here</Link> </h1>


  ) }</>;
}

export default Auth;
