import "./App.css";
import Login from "./pages/login/login";
import Registration from "./pages/Registration/registration";
import Home from "./pages/Home/home";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/footer/footer";
import Category from "./pages/CategoryBlogs/category";
import DedicatedBlog from "./pages/DedicatedBlogs/DedicatedBlog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Blogs/:category" element={<Category />} />
        <Route path="/Blog/:id" element={<DedicatedBlog />} />
      </Routes>
      <Footer />

      {/* <Login/> */}
      {/* <Registration/> */}

      {/* <Home/> */}
      {/* <Category/> */}
      {/* <DedicatedBlog/> */}
    </>
  );
}

export default App;
