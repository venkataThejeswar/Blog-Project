import React from "react";
import Banner from "../../Components/banner/banner";
import TrendingBlog from "../../Components/TrendingBlog/trendingblog";
import blogs from "../../Utils/mockData";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Banner />
      <div className="my-2">
        <h1>Read Blogs From Here</h1>
        <div className="d-flex justify-content-between flex-wrap" >
          <Link to={"/Blogs/Programming"}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="./media/programming.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">Programming</h5>
              
            </div>

          </div>
          </Link>
          <Link to={"/Blogs/Javascript"}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="./media/javascript.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">JavaScript</h5>
              
            </div>
          </div>
          </Link>
          <Link to={"/Blogs/Data Analytics"}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="./media/Analytics.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">Data Analytics</h5>
              
            </div>
          </div>
          </Link>
          <Link to={"/Blogs/React Framework"}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="./media/react.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">React Framework</h5>
              
            </div>
          </div>
          </Link>
          <Link to={"/Blogs/Cooking"}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="./media/cooking.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-center">Cooking</h5>
              
            </div>
          </div>
          </Link>
        </div>
      </div>
    
    <div className="Treanding-Blod-section">
        <h1>Trending Blogs</h1>
        <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
            {
                blogs.map(blog=>
                    <TrendingBlog blog={blog}/>
                )
            }
        
       
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    </>
  );
}
export default Home;
