import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const View = () => {
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("viewID"));

    fetch(`http://localhost:3001/users/${userId}`)
      .then((resp) => resp.json())
      .then((info) => {
        setUserDetail(info);
      });
  }, []);

  return (
    <div className="card p-5">
      <h1>View Details</h1>

      <button className="btn btn-dark m-2 col-md-4"> <Link to={'/home'}>  Go Back </Link></button>

      <table className="table table-bordered">
        <thead>

            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>DOB</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userDetail.name}</td>
            <td>{userDetail.email}</td>
            <td>{userDetail.password}</td>
            <td>{userDetail.DOB}</td>
            <td>{userDetail.gender}</td>
          </tr>
        </tbody>
      </table>

      <br />
    </div>
  );
};

export default View;
