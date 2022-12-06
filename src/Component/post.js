import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Post = () => {
    const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    const npost = {
        name:name,
      title,
      details: body,
    }
    localStorage.setItem("name", JSON.stringify(name));
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(npost),
    })
      .then((resp) => resp.json())
      .then((info) => navigate("/home"));
      navigate("/home")
  };
  return (
    <div>
         <div className="username">
          <label className="form__label">First Name </label>

          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            //value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Name"
          />
        </div>
      <form name="blog_post" className="form-horizontal">
        <div id="blog_post">
          <div className="form-group">
            <label
              className="col-sm-2 control-label required"
              htmlFor="blog_post_title"
            >
              Title
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                id="blog_post_title"
                required="required"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label
              className="col-sm-2 control-label required"
              htmlFor="blog_post_body"
            >
              Body
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                id="blog_post_body"
                required="required"
                onChange={(e) => setBody(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-2"></div>
            <div className="col-sm-10">
              <button
                type="submit"
                id="blog_post_submit"
                className="btn-default btn"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Post;
