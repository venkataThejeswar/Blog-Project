import React from "react";
import "./DedicatedBlog.css";
import Banner from "../../Components/banner/banner";
import blogs from "../../Utils/mockData";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
function DedicatedBlog(){
    const [blogId,setBlogId] = useState(1)
    let blogToDisplay = blogs.filter(blog=>blog.id==blogId)[0];
    const {id}=useParams();
    useEffect(()=>{
       if(id){
        setBlogId(id)
       }
    },[]);


    return (
        <> 
        <Banner/> 
        <h1>{blogToDisplay.title}</h1>
        <h1>{blogToDisplay.category}</h1>
        <p>{blogToDisplay.content}</p>
        </>
    )
}

export default DedicatedBlog;