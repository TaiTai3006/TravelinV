import { IconContext } from "react-icons";
import { BsFillCircleFill } from "react-icons/bs";
import { FiCornerUpLeft } from "react-icons/fi";
import { AiOutlineMore, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../App";

export function CommentCard({
  comment,
  focustInput,
  name_read,
  name_author,
  date,
  content_comment,
  setContent,
  setTypeComment,
  setCheckReply,
  post_key,
  className,
  handleDelete,
  setCheckEdit,
  checkEdit,
  checkReply,
  content,
  handleEdit,
  comment_post_key,
 ...Children
}) {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div
        className="comment"
        style={{
          ...Children
        }}
      >
        {user.userName === comment.userName && (
          <div className="comment-more">
            <IconContext.Provider value={{ className: "icon_OulineMore" }}>
              <AiOutlineMore />
            </IconContext.Provider>
            <div className="comment-edit-delete">
              <button onClick={()=>{
                setCheckEdit(true)
                setCheckReply(post_key);
                setContent(content_comment)
              }}>
                <AiFillEdit /> Edit
              </button>
              <button onClick={()=>{
                handleDelete(className,post_key)
              }}>
                <AiFillDelete /> Delete
              </button>
            </div>
          </div>
        )}
        <div className="comment-data">
          {comment.userName}
          <IconContext.Provider value={{ className: "icon_FillCircleFill" }}>
            <BsFillCircleFill />
          </IconContext.Provider>
          {comment.dateTime}
        </div>
        <p>{comment.description}</p>
        <div className="reply">
          <button
            className={className}
            onClick={() => {
              setContent(name_read !== name_author ?`@${name_author} `:'');
              setTypeComment(false);
              setCheckReply(post_key);
            }}
          >
            <FiCornerUpLeft /> Reply
          </button>
        </div>
      </div>
      {checkEdit && post_key === checkReply && (
        <div className="comments-reply">
          <div className="comments-reply-title">Write a comment</div>
          <div className="comments-form">
            <label>Edit comment</label>
            <div>
              <button
                className="cancel"
                onClick={() => {
                  setContent("");
                  setCheckEdit(false);
                  setCheckReply(-1);
                }}
              >
                Click here to cancel edit.
              </button>
            </div>
            <textarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
            <button
              onClick={() => {
                content && content_comment !== content && handleEdit(className,post_key,content,comment_post_key)
              }}
            >
              Send comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
