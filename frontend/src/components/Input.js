import React from "react";
import "../formBlog.css";

import { BiPlus } from "react-icons/bi";

import ImageUploading from "react-images-uploading";

function Input() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 2;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    if (imageList.length === 2) 
    {
  
      
      const addImgBtns = document.querySelectorAll('.add-img-btn')
      // addImgBtns.classList.add('hidden')
      console.log(addImgBtns)
      addImgBtns.forEach(addBtn => {
        addBtn.classList.add('hidden');

        
      });
     
    }
    console.log(imageList.length, addUpdateIndex);
    
    
    setImages(imageList);
    
  };


  return (
    <div className="App">
      <h3>Description </h3>
      <input
        type="text"
        class="title-description"
        placeholder="Write the title  of your description  ....."
        required
      ></input>
      <textarea
        id="message"
        name="message"
        placeholder="Write the description of your blog...."
        required
      />
      <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
              
              </div>
            ))}
            <button className="add-img-btn"
            
              onClick={onImageUpload}
           
            >
              <BiPlus className="preview_des--icon"/>
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
