import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Home = () => {
  const [usersList, setUsersList] = useState([]);
  const [username, setUsername] = useState("");
  console.log(username);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("name"));
    setUsername(items);
    fetch("http://localhost:3001/posts")
      .then((resp) => resp.json())
      .then((info) => setUsersList(info));
  }, []);
  const deleteUser = () => {
    let deleteID = JSON.parse(localStorage.getItem("deleteID"));
    fetch(`http://localhost:3001/users/${deleteID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((info) => console.log(info));
    navigate("/home");
    setShow(false);
  };
  return (
    <div className="card p-5">
      <div>
        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="btn btn-outline-danger col-md-4 mt-2 p-2 m-2"
        >
          <Link to="/login">Logout</Link>
        </button>
        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="btn btn-outline-success col-md-4 mt-2 p-2 m-2"
        >
          <Link to="/post">Create Post</Link>
        </button>
      </div>
      <br />
      <table className="table table-bordered">
        <thead class="thead-dark">
          <tr>
          <td >Name</td>
              <td>Title</td>
              <td>Details</td>
          </tr>        
        </thead>
        <tbody>
          {usersList.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.title}</td>
              <td>{user.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure You Want To Delete The User?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={deleteUser}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const handleSubmit = () => {
  localStorage.clear();
};
export default Home;