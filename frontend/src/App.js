import { createContext, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ReadBlogs from "./Pages/ReadBlogs";
import ProtectedRoutes from "./components/PrivateRouter";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Blogs from "./Pages/Blogs";
import PersonalPage from "./Pages/PersonalPage";
import Footer from "./components/Footer";
import Logout from "./Pages/Logout";
import ProfileInput from "./Pages/ProfileInput";
import FormBlog from "./Pages/FormBlog";
import AboutUs from "./Pages/AboutUs";
import Admin from "./Pages/admin"

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(() => {
    const storageAccount = JSON.parse(localStorage.getItem("user"));
    return (
      storageAccount ?? {
        userName: "",
        loggedIn: false,
        accountType: "",
        image: "",
      }
    );
  });
  // 840620172422-p0ioib0pk0ebu85k45f0jap5fmmvnukn.apps.googleusercontent.com

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <GoogleOAuthProvider clientId="840620172422-p0ioib0pk0ebu85k45f0jap5fmmvnukn.apps.googleusercontent.com">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          {/* <Route path="/Blogs/:relatedPostID" element={<Blogs />} /> */}
          <Route path="/Shop" element={<ReadBlogs />} />
          <Route path="/Profile" element={<ProfileInput />} />
          <Route path="/AboutUs" element={<AboutUs />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Blogs/CreactPost" element={<FormBlog />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/Personal" element={<PersonalPage />} />
            <Route path="/Logout" element={<Logout />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
      </GoogleOAuthProvider>
    </UserContext.Provider>
  );
}

export default App;
