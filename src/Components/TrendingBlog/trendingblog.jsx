import React from "react";
import { Link } from "react-router-dom";
function TrendingBlog({ blog }) {
  let image = " ";
  switch (blog.category) {
    case "Programming":
      image = "Developer.jpg";
      break;
    case "Travelling":
      image = "travel.jpg";
      break;
    case "Cooking":
      image = "cooking.jpg";
      break;
    case "Workouts":
      image = "Exercise.jpg";
      break;
    case "Health":
      image = "health.jpeg";
      break;
    default:
      image = "BannnerHome.jpg";
      break;
  }

  return (
    <>
      <Link to={`/Blog/${blog.id}`}>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={`./media/${image}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="text-muted">{blog.category}</p>
              <p className="card-text">{blog.previewDescription}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default TrendingBlog;
