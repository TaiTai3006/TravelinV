import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useFormPost = (callback) => {
  
  const navigate = useNavigate()

  const [title, setTitle] = useState({ idPost: uuidv4() });

  const [provinces, setProvinces] = useState([]);

  const [descriptions, setDescriptions] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:8800/Province")
      .then((res) => setProvinces(res.data));
  }, []);

  const handleChangeTitle = (e) => {
    setTitle({ ...title, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    return() => {
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
    if (title.image) {
      const uploadDataTitle = new FormData();
      uploadDataTitle.append("image", title.image, "image");
      uploadDataTitle.append("idPost", title.idPost);
      uploadDataTitle.append("idProvince", title.idProvince);
      uploadDataTitle.append("demoDescription", title.demoDescription);
      uploadDataTitle.append("postName", title.postName);
      axios
        .post(`http://localhost:8800/Post/${user.userName}`, uploadDataTitle)
        .then((res) => console.log(res.data));
    } else {
      axios
        .post(`http://localhost:8800/Post/${user.userName}`, title)
        .then((res) => console.log(res.data));
    }

    for (let i = 0; i < descriptions.length; i++) {
      if (descriptions[i]) {
        if (descriptions[i].image1 && descriptions[i].image2) {
          const uploadDataTitle = new FormData();
          uploadDataTitle.append("image1", descriptions[i].image1, "image1");
          uploadDataTitle.append("image2", descriptions[i].image2, "image2");
          uploadDataTitle.append("description", descriptions[i].description);
          uploadDataTitle.append("title", descriptions[i].title);
          axios
            .post(
              `http://localhost:8800/CreatePost/${title.idPost}`,
              uploadDataTitle
            )
            .then((res) => console.log(res.data));
        } else if (descriptions[i].image1) {
          const uploadDataTitle = new FormData();
          uploadDataTitle.append("image1", descriptions[i].image1, "image1");
          uploadDataTitle.append("description", descriptions[i].description);
          uploadDataTitle.append("title", descriptions[i].title);
          axios
            .post(
              `http://localhost:8800/CreatePost2\/${title.idPost}`,
              uploadDataTitle
            )
            .then((res) => console.log(res.data));
        } else {
          axios
            .post(
              `http://localhost:8800/CreatePost/${title.idPost}`,
              descriptions[i]
            )
            .then((res) => console.log(res.data));
        }
      }
      
      // navigate('/')
    }
    setTimeout(() => {
      window.location.reload(false)
    }, 4000);
  };
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
