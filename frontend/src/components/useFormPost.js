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
    if (title.image) {
      const uploadDataTitle = new FormData();
      uploadDataTitle.append("image", title.image, "image");
      uploadDataTitle.append("idPost", title.idPost);
      uploadDataTitle.append("idProvince", title.idProvince);
      uploadDataTitle.append("demoDescription", title.demoDescription);
      uploadDataTitle.append("postName", title.postName);
      axios.post(
        `http://localhost:8800/Post/${user.userName}`,
        uploadDataTitle
      );
    } else {
      axios.post(`http://localhost:8800/Post/${user.userName}`, title);
    }

    for (let i = 0; i < descriptions.length; i++) {
      if (descriptions[i]) {
        console.log(descriptions[i]);
        if (descriptions[i].image1 && descriptions[i].image2) {
          const uploadDataTitle = new FormData();
          uploadDataTitle.append("image1", descriptions[i].image1, "image1");
          uploadDataTitle.append("image2", descriptions[i].image2, "image2");
          uploadDataTitle.append("description", descriptions[i].description);
          uploadDataTitle.append("title", descriptions[i].title);
          axios.post(
            `http://localhost:8800/CreatePost/${title.idPost}`,
            uploadDataTitle
          );
        } else if (descriptions[i].image1) {
          const uploadDataTitle = new FormData();
          uploadDataTitle.append("image1", descriptions[i].image1, "image1");
          uploadDataTitle.append("description", descriptions[i].description);
          uploadDataTitle.append("title", descriptions[i].title);
          axios.post(
            `http://localhost:8800/CreatePost2\/${title.idPost}`,
            uploadDataTitle
          );
        } else {
          axios.post(
           
            `http://localhost:8800/CreatePost/${title.idPost}`,
            descriptions[i]
          );
        }
      }
    }
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