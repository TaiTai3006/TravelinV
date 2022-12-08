import React from "react";
import "../formBlog.css";
import { useState, useRef, useMemo } from "react";
import { HiChevronRight } from "react-icons/hi";
import { BsFileImage, BsInputCursor } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

import Input from "../components/Input";
import dataProvince from "../dataProvince";
import { AiOutlineClose } from "react-icons/ai";

function FormBlog() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [key, setKey]= useState(0);
  const [input, setInput] = useState("");
  
  const [inputList, setInputList] = useState([<Input key={key}/>]);
    

  const onAddBtnClick = (event,key) => {
    key = key+1
    setKey(key)
    setInputList(inputList.concat(<Input key={key} />));
    
  };
  
  
  // const onRemoveBtnClick = (event, index) => {
  //   console.log(index)
    
  //   const list = [...inputList];
  //   console.log(list)
  //   list.splice(index, 1);
  //   setInputList(list);
  //   setInputList(
    

      
  //     inputList.filter(
        

  //       (input) => input.key !== index || (input.key !== "null" && index !== 0)
  //     )
  //   );
    
  // };
  const deleteByIndex = id => {
    setInputList(oldInputList => {
      return oldInputList.filter((_, i) => i !== id)
    })
  }

  const [provinces, setProvinces] = useState(dataProvince);

  return (
    <>
      <div className="nav-container">
        {/* Thanh địa chỉ */}
        <a href="#">Home</a>
        <HiChevronRight />
        <a href="#">Blogs</a>
        <HiChevronRight />
        <a href="#">Create</a>
      </div>
      <div className="heading ">
        <h1>Create post </h1>
      </div>
      {/* {inputList} */}
      <form>
        <div className="form">
          <div className="container-image ">
            <label for="input-img" className="preview">
              <BsFileImage className="preview--icon" />

              <span>Upload your image for post here </span>
              {selectedImage && (
                <div>
                  <img
                    alt="not fount"
                    width={"100%"}
                    src={URL.createObjectURL(selectedImage)}
                  />
                </div>
              )}
            </label>
            <input
              type="file"
              hidden
              id="input-img"
              onChange={(event) => {
                setSelectedImage(event.target.files[0]);
              }}
            />

            {/* <button className="submit">Submit</button> */}
          </div>
          <div className="input-container">
            <div className="palace-list">
              {" "}
              <label for="palace">Choose palace:</label>
              <select name="palace" id="palace" required>
                <option value="">None</option>
                {provinces.map((province) => {
                  // console.log(province)
                  return (
                    <>
                      <option value={province.slug}>{province.name}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="input">
              <h3>Title </h3>
              <input
                type="text"
                class="title"
                placeholder="Write the title of your blog ....."
                required
              ></input>
              <textarea
                id="message"
                name="message"
                placeholder="Write the title of your blog ....."
                required
              />
              <div className="description">
                {inputList.map((input, id) => {
                  return (
                    <>
                      <div
                        className="remove"
                        // onClick={(e) => onRemoveBtnClick(e, id)}
                        onClick={() => deleteByIndex(id)}
                      >
                        <AiOutlineClose className="remove-icon" /> Click here to
                        remove this description
                      </div>
                      <Input />
                    </>
                  );
                })}

                {/* <Input inputList = {inputList}/> */}
              </div>
              <div className="addDesc">
                <h3>Add more description</h3>
              </div>
              <div>
                <button onClick={() => onAddBtnClick()} className="add-btn">
                  <BiPlus className="addDesc--icon" />
                </button>
              </div>
            </div>
            <div className="submit">
              <input type="submit" className="submit" value="POST"></input>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormBlog;
