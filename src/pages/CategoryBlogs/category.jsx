import React, { useEffect } from "react";
import Banner from "../../Components/banner/banner";
import TrendingBlog from "../../Components/TrendingBlog/trendingblog";
import blogs from "../../Utils/mockData";
import "./category.css";
import {useState} from "react";
import { useParams } from "react-router-dom";
function Category() {
  const [currentCategory,setCurrentCategory] = useState("Workouts");
  const {category}= useParams();
  useEffect(()=>{
    if(category){
      setCurrentCategory(category)
    }
  },[])
  return (
    <>
      <Banner />
     
    
    <div className="Treanding-Blod-section">
        <h1>{currentCategory}</h1>
        <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
            {
                blogs.map(blog=>blog.category == currentCategory && 
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
export default Category;
