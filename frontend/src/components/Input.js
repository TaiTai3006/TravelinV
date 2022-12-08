import React, { useState } from "react";
import "../formBlog.css";

import { BiPlus } from "react-icons/bi";

import ImageUploading from "react-images-uploading";

function Input({ id, descriptions, setDescriptions, idPost  }) {

  const [description, setDescription] = useState({idPost: idPost, id: id});

  const [images, setImages] = React.useState([]);
  const maxNumber = 2;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    if (imageList.length === 2) {
      const addImgBtns = document.querySelectorAll(".add-img-btn");
      addImgBtns.forEach((addBtn) => {
        addBtn.classList.add("hidden");
      });
    }
    // console.log(imageList.length, addUpdateIndex);

    setImages(imageList);
    
  };

  const handleChangeDes = (e) => {
    console.log("handle");
    setDescription({ ...description, [e.target.name]: e.target.value });
    descriptions[id] = { ...description, [e.target.name]: e.target.value };
    setDescriptions(descriptions);
  };

  console.log(descriptions, "hello");

  return (
    <div className="input-container ">
      <div className="des-head">
        <h3>Description </h3>
        {/* <AiOutlineClose/> */}
      </div>
      <input
        type="text"
        class="title-description"
        name="title"
        onChange={handleChangeDes}
        placeholder="Write the title  of your description  ....."
      ></input>
      <textarea
        id="message"
        name="des"
        onChange={handleChangeDes}
        placeholder="Write the description of your blog...."
      />
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          // acceptType={["jpg"]}
        >
          {({ imageList, onImageUpload }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100" />
                  
                </div>
              ))}
              <button className="add-img-btn" onClick={onImageUpload}>
                <BiPlus className="preview_des--icon" />
                Upload photo
              </button>
            </div>
          )}
        </ImageUploading>
      </div>
    </div>
  );
}

export default Input;
