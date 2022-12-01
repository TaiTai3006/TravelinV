import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ReadBlogs from "./Pages/ReadBlogs";
import ProtectedRoutes from "./components/PrivateRouter";
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import Blogs from "./Pages/Blogs";
import PersonalPage from "./Pages/PersonalPage";
import Footer from "./components/Footer";
import Logout from "./Pages/Logout";
import FormBlog from "./Pages/FormBlog";


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ userName: '' ,loggedIn: false, accountType: '', imgae: ''});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          {/* <Route path="/Blogs/:relatedPostID" element={<Blogs />} /> */}
          <Route path="/Shop" element={<ReadBlogs/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/Personal" element={<PersonalPage />} />
            <Route path="/Logout" element={<Logout />} />
          </Route>
        </Route>
      </Routes>
      <Footer/> 
    </UserContext.Provider>
  );
}

export default App;
