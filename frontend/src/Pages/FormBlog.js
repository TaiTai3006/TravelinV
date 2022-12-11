import React from "react";
import "../formBlog.css";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { BsFileImage, BsInputCursor } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import Input from "../components/Input";
import { AiOutlineClose } from "react-icons/ai";
import useFormPost from "../components/useFormPost";
import { Link } from "react-router-dom";

function FormBlog() {
  const {
    handleChangeTitle,
    handleTitleImage,
    handleCreatePost,
    descriptions,
    setDescriptions,
    title,
    provinces,
  } = useFormPost();

  const [inputList, setInputList] = useState([0]);
  const [id, setId] = useState(0);

  const onAddBtnClick = (event) => {
    setId((id) => id + 1);
    setInputList([...inputList, id + 1]);
  };
  const onRemoveBtnClick = (id) => {
    setInputList(inputList.filter((input)=> input !== id))
    setDescriptions(descriptions.filter((des)=> des.id !== id))
  };
  console.log(inputList);
  return (
    <>
      <div className="nav-container">
        {/* Thanh địa chỉ */}
        <Link to="/">Home</Link>
        <HiChevronRight />
        <a href="#">Create</a>
        <HiChevronRight />
      </div>
      <div className="heading ">
        <h1>Create post </h1>
      </div>
      {/* {inputList} */}
      <div>
        <div className="form">
          <div className="container-image ">
            <label for="input-img" className="preview">
              <BsFileImage className="preview--icon" />

              <span>Upload your image for post here </span>
              {title.imagePreview && (
                <div>
                  <img
                    alt="not fount"
                    width={"100%"}
                    src={title.imagePreview}
                  />
                </div>
              )}
            </label>
            <input
              type="file"
              hidden
              name="image"
              id="input-img"
              onChange={handleTitleImage}
            />
            {/* <div className="submit">
              <input
                type="submit"
                className="submit"
                value="POST"
                onClick={handleCreatePost}
              ></input>
            </div> */}
            {/* <button className="submit">Submit</button> */}
          </div>
          <div className="input-container">
            <div className="palace-list">
              {" "}
              <label for="palace">Choose palace:</label>
              <select
                name="idProvince"
                id="palace"
                onChange={handleChangeTitle}
                required
              >
                <option value="">None</option>
                {provinces.map((province) => {
                  // console.log(province)
                  return (
                    <>
                      <option value={province.idProvince}>
                        {province.provinceName}
                      </option>
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
                name="postName"
                placeholder="Write the title of your blog ....."
                onChange={handleChangeTitle}
                required
              ></input>
              <textarea
                id="message"
                name="demoDescription"
                placeholder="Write the title of your blog ....."
                onChange={handleChangeTitle}
                required
              />
              <div className="description">
                {inputList.map((input) => {
                  return (
                    <div key={input}>
                      <div
                        className="remove"
                        onClick={()=>onRemoveBtnClick(input)}
                      >
                        <AiOutlineClose className="remove-icon" /> Click here to
                        remove this description
                      </div>
                      <Input
                        id={input}
                        descriptions={descriptions}
                        setDescriptions={setDescriptions}
                        idPost={title.idPost}
                      />
                    </div>
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
              <input type="submit" className="submit" onClick={handleCreatePost} value="POST"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormBlog;