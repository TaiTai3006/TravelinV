import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { UserContext } from "../App";

const useFormPost = (callback) => {
  const [title, setTitle] = useState({ idPost: uuidv4() });

  const [provinces, setProvinces] = useState([]);

  const [descriptions, setDescriptions] = useState([]);

  const { user, setUser } = useContext(UserContext);


  useEffect(() => {
    axios
      .get("http://localhost:8800/Province")
      .then((res) => setProvinces(res.data));
  }, []);

  const handleChangeTitle = (e) => {
    setTitle({ ...title, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(title.imagePreview);
    };
  }, [title.image]);

  const handleTitleImage = (e) => {
    setTitle({
      ...title,
      [e.target.name]: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    const uploadDataTitle = new FormData();
    uploadDataTitle.append("image", title.image, "image");
    uploadDataTitle.append("idPost", title.idPost);
    uploadDataTitle.append("idProvince", title.idProvince);
    uploadDataTitle.append("demoDescription", title.demoDescription);
    uploadDataTitle.append("postName", title.postName);
    axios.post(`http://localhost:8800/Post/${user.userName}`, uploadDataTitle);
  };

  console.log(provinces);
  console.log(title);

  return {
    title,
    provinces,
    descriptions, 
    setDescriptions,
    handleChangeTitle,
    handleTitleImage,
    handleCreatePost,
  };
};

export default useFormPost;
