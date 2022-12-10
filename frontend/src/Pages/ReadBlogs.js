/* eslint-disable jsx-a11y/img-redundant-alt */
import "../readBlogs.css";
import { Link } from "react-router-dom";
import { useState, useRef, useMemo } from "react";
import { HiChevronRight } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import img_province from "../image/dalat_title.png";
import img_custom_title from "../image/img_custom_title.png";
import img_post_author from "../image/Dalat.png";
import img_custom from "../image/img_custom.png";
import CommentInput from "../components/commentInput";
import CommentReply from "../components/commentReply";
import { CommentCard } from "../components/commentCard";
import useReadBlog from "../components/useReadBlog";
import removeVietnameseTones from "../components/removeVietnameseTones";
//Chứa thông tin cơ bản của tác giả và tiêu đề bài post
const Post = {
  authorBlog_name: "Chó thích Review",
  authorBlog_img:
    "https://i.pinimg.com/564x/78/78/e3/7878e3e64ecb4571802998a85048fc27.jpg",
  date_update: "30/6/2002",
  name_province: "Dalat",
  img_province: img_province,
  img_post_author: img_post_author,
  title_post: "Top 10 địa điểm du lịch mới ở Đà Lạt",
  describe:
    "Địa điểm du lịch mới ở Đà Lạt năm 2022 sẽ đem đến cho bạn nhiều bất ngờ ấn tượng. Nếu như trước đây Đà Lạt nổi tiếng với những vườn hoa rực rỡ thì hiện tại, Đà Lạt sẽ cho bạn nhiều trải nghiệm hơn rất nhiều. Hãy cùng Cuồng Du Lịch điểm danh những địa điểm du lịch Đà Lạt mới nhất năm nay để note ngay vào sổ tay ăn chơi hết Đà Lạt nhé.",
  likes: 100,
  like_status: true,
};

//Các bài post liên quan
const relatedPosts = [
  {
    image:
      "https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg",
    title: "Địa điểm săn mây Đà Lạt",
  },
  {
    image:
      "https://i.pinimg.com/564x/6b/30/ef/6b30efc71a14e507e3821e5e6330ad30.jpg",
    title: "Đà Lạt và những cung đường thơ mộng",
  },
  {
    image:
      "https://i.pinimg.com/564x/af/b6/bd/afb6bd2c6c3efcb3fec27362febb8a58.jpg",
    title: "Bộ ảnh Đà Lạt qua đôi mắt của những “kẻ mộng mơ",
  },
];

// const comment = [
//   {
//     post_key: 1,
//     name_author: "Cậu Vàng",
//     content_comment:
//       "Hola! Me gustaría saber donde comprar los billetes para ir de Bali a Nusa Lembongan, y en que puerto bajar?Gracias",
//     date: "30/6/2002",
//   },
//   {
//     post_key: 2,
//     name_author: "Cậu Vàng",
//     content_comment:
//       "Hola! Me gustaría saber donde comprar los billetes para ir de Bali a Nusa Lembongan, y en que puerto bajar?Gracias",
//     date: "30/6/2002",
//   },
//   {
//     post_key: 3,
//     name_author: "Cậu Vàng",
//     content_comment:
//       "Hola! Me gustaría saber donde comprar los billetes para ir de Bali a Nusa Lembongan, y en que puerto bajar?Gracias",
//     date: "30/6/2002",
//   },
//   {
//     post_key: 4,
//     name_author: "Cậu Vàng",
//     content_comment:
//       "Hola! Me gustaría saber donde comprar los billetes para ir de Bali a Nusa Lembongan, y en que puerto bajar?Gracias",
//     date: "30/6/2002",
//   },
//   {
//     post_key: 5,
//     name_author: "Cậu Vàng",
//     content_comment:
//       "Hola! Me gustaría saber donde comprar los billetes para ir de Bali a Nusa Lembongan, y en que puerto bajar?Gracias",
//     date: "30/6/2002",
//   },
//   {
//     post_key: 6,
//     name_author: "Cậu Vàng",
//     content_comment:
//       "Hola! Me gustaría saber donde comprar los billetes para ir de Bali a Nusa Lembongan, y en que puerto bajar?Gracias",
//     date: "30/6/2002",
//   },
//   {
//     post_key: 7,
//     name_author: "Cậu Vàng",
//     content_comment:
//       "Hola! Me gustaría saber donde comprar los billetes para ir de Bali a Nusa Lembongan, y en que puerto bajar?Gracias",
//     date: "30/6/2002",
//   },
// ];
const reply = [
  {
    post_key_reply: "R01",
    post_key: 1,
    name_author: "Cậu Vàng",
    content_comment:
      "Hola! Me gustaría saber donde comprar los billetes para ir de Bali a Nusa Lembongan, y en que puerto bajar?Gracias",
    date: "30/6/2002",
  },
];
function ReadBlogs() {
  let PageSize = 3;
  const { province, authorPost, desPost, checkReadBlog, related, comment, handleLike } =
    useReadBlog();
  const focustInput = useRef();
  const [comments, setComments] = useState(comment);
  const [content, setContent] = useState("");
  const [typeComment, setTypeComment] = useState(true);
  const [checkReply, setCheckReply] = useState(-1);
  const [replys, setReplys] = useState(reply);
  const [postKey, setPostKey] = useState(comment.length);
  const [postKeyReply, setPostKeyReply] = useState("R0" + reply.length);
  const [checkEdit, setCheckEdit] = useState();
  const [checkReadMore, setCheckReadMore] = useState(
    comments.length >= PageSize ? true : false
  );
  const [currentPage, setCurrentPage] = useState(0);
  const currentTableData = useMemo(() => {
    const fistIndex = comment.length - PageSize * (currentPage + 1);
    const fistPageIndex = fistIndex < 0 ? 0 : fistIndex;
    fistIndex < 0 ? setCheckReadMore() : setCheckReadMore(true);
    return comment.slice(fistPageIndex, comment.length).reverse();
  }, [currentPage, comment]);
  // console.log(comments);
  // console.log(replys);
  // console.log(typeComment, checkEdit);
  const handleReply = (idPost) => {
    var id = parseInt(postKeyReply.slice(-1));
    setPostKeyReply("R0" + String(id + 1));
    var today = new Date();
    var date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    setContent("");
    setReplys([
      ...replys,
      {
        post_key_reply: "R0" + String(id + 1),
        post_key: idPost,
        name_author: "Tai Tai",
        content_comment: content,
        date: date,
      },
    ]);
    setTypeComment(true);
    setCheckReply(-1);
  };
  const handleComment = () => {
    var today = new Date();
    var date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    setPostKey((key) => key + 1);
    setContent("");
    setComments([
      ...comments,
      {
        post_key: postKey + 1,
        name_author: "Tai Tai",
        content_comment: content,
        date: date,
      },
    ]);
    focustInput.current.focus();
  };
  const handleDelete = (type, id) => {
    if (type === "comment-reply") {
      let commentTemp = comments.filter((comment) => comment.post_key !== id);
      let replyTemp = replys.filter((reply) => reply.post_key !== id);
      setComments(commentTemp);
      setReplys(replyTemp);
    } else {
      let replyTemp = replys.filter((reply) => reply.post_key_reply !== id);
      setReplys(replyTemp);
    }
  };
  const handleEdit = (type, id, content_new, comment_post_key) => {
    var today = new Date();
    var date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    if (type === "comment-reply") {
      let commentTemp = comments.filter((comment) => comment.post_key !== id);
      commentTemp.splice(id - 1, 0, {
        post_key: id,
        name_author: "Tai Tai",
        content_comment: content_new,
        date: date,
      });
      setComments(commentTemp);
    } else {
      let replyTemp = replys.filter((reply) => reply.post_key_reply !== id);
      replyTemp.splice(parseInt(id.slice(2, id.length)) - 1, 0, {
        post_key_reply: id,
        post_key: comment_post_key,
        name_author: "Tai Tai",
        content_comment: content,
        date: date,
      });
      setReplys(replyTemp);
    }
    setContent("");
    setCheckEdit(false);
    setCheckReply(-1);
  };
  console.log(currentTableData, 'hello')
  return (
    <div>
      {/* Ảnh chính của bài post */}
      <div id="img_post">
        <img
          className="img_title"
          src={authorPost.image}
          alt="img-main"
        ></img>
        <img
          className="img_custom"
          src={img_custom}
          alt="custom-img-main"
        ></img>
      </div>

      {/* Phần header cho bài post */}
      <div className="post-cover_content">
        <div className="post-cover_content-container">
          {/* Thanh địa chỉ */}
          <ul className="post-breadcrums_list">
            <li>
              <Link to="/">Home</Link>
              <IconContext.Provider value={{ className: "icon_chevRight" }}>
                <HiChevronRight />
              </IconContext.Provider>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
              <IconContext.Provider value={{ className: "icon_chevRight" }}>
                <HiChevronRight />
              </IconContext.Provider>
            </li>
            <li>
              <Link to={`/Blogs/${province.idProvince}`}>
                {removeVietnameseTones(province.provinceName)}
              </Link>
              <IconContext.Provider value={{ className: "icon_chevRight" }}>
                <HiChevronRight />
              </IconContext.Provider>
            </li>
          </ul>
          {/* Phần chứa thông về tác giả */} {console.log(authorPost)}
          <div className="header-author">
            <Link to={`/Personal/${authorPost.userName}`}>
              <img src={authorPost.avatar} alt="Author's avatar"></img>
            </Link>
            <div className="header-author_row2">
              <div className="author-name">{authorPost.userName}</div>
              <div className="author-update-at">
                Last updated {authorPost.dateTime}
              </div>
            </div>
            <div className="author-like">
              <button
                onClick={() => {
                  handleLike();
                }}
              >
                {!checkReadBlog.checkLike ? (
                  <IconContext.Provider
                    value={{ className: "icon_OutlineHeart" }}
                  >
                    <AiOutlineHeart />
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider value={{ className: "icon_FillHeart" }}>
                    <AiFillHeart />
                  </IconContext.Provider>
                )}
              </button>
              <div className="author-like-number">{authorPost.like}</div>
            </div>
          </div>
          {/* Phần chứa tiêu đề và mô tả của bài post */}
          <h1 className="post-cover_title">{authorPost.postName}</h1>
          <p>{authorPost.demoDescription}</p>
        </div>
      </div>

      <div className="blog-container">
        {/* Phần chứa nội dung bài post */}
        <article className="blog-article">
          {desPost.map((des) => (
            <div key={des.idDes}>
              <h2>{des.title}</h2>
              <p>{des.description}</p>
              {des.image1 && des.image2 ? (
                <div className="f-image2">
                  <img src={des.image1} alt="image of post"></img>
                  <img src={des.image2} alt="image of post"></img>
                </div>
              ) : (
                <div className="f-image1">
                  <img src={des.image1} alt="image of post"></img>
                </div>
              )}
            </div>
          ))}
        </article>

        {/* Phần chứa các bài viết liên quan */}
        <div className="sidebar-articles">
          <div className="sidebar-articles_title">Related Posts</div>
          <div className="sidebar-articles_container">
            {related.map((relate) => (
              <Link className="article-text-block" to={`/Blogs/${relate.idProvince}/${relate.idPost}`}>
                <div className="article-text-block_image" key={relate.idPost}>
                  <img src={relate.image} alt="image of post"></img>
                </div>
                <div className="article-text-block_content">
                  <h2>{relate.postName}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Phần chứa thẻ liên kết ra blog */}
      <div className="related-category_link">
        <div className="related-category_card">
          <Link to={`/Blogs/${province.idProvince}`}>
            <h3>read all articles about</h3>
            <div className="related-category_title">
              <span className="text">
                {removeVietnameseTones(province.provinceName).replace(
                  /\s+/g,
                  ""
                )}
              </span>
            </div>
            <div className="circle-icon">
              <IconContext.Provider value={{ className: "icon_ArrowRight" }}>
                <FiArrowRight />
              </IconContext.Provider>
            </div>
            <img
              className="img_tilte_blog"
              src={province.image}
              alt="image of province"
            ></img>
            {/* <img className="img_tilte_custom" src={img_custom_title}></img> */}
          </Link>
        </div>
      </div>

      <div className="comments-contain">
        <div className="comments-area">
          <div className="comments-title">Blog comments</div>
          <div className="comments-respond">
            <CommentInput
              focustInput={focustInput}
              typeComment={typeComment}
              content={content}
              setContent={setContent}
              handleComment={handleComment}
            ></CommentInput>
            <ul className="comments-list">
              {currentTableData.map((comment) => (
                <li key={comment.idComment} className="parent">
                  <CommentCard
                    comment={comment}
                    name_read="Tai Tai"
                    name_author={comment.name_author}
                    date={comment.date}
                    content_comment={comment.content_comment}
                    setContent={setContent}
                    setTypeComment={setTypeComment}
                    setCheckReply={setCheckReply}
                    post_key={comment.post_key}
                    className="comment-reply"
                    handleDelete={handleDelete}
                    setCheckEdit={setCheckEdit}
                    checkEdit={checkEdit}
                    checkReply={checkReply}
                    content={content}
                    handleEdit={handleEdit}
                  ></CommentCard>
                  <CommentReply
                    focustInput={focustInput}
                    typeComment={typeComment}
                    post_key={comment.post_key}
                    checkReply={checkReply}
                    setContent={setContent}
                    setTypeComment={setTypeComment}
                    setCheckReply={setCheckReply}
                    content={content}
                    handleReply={handleReply}
                    comment_post_key={comment.post_key}
                  ></CommentReply>
                  {replys.map(
                    (reply) =>
                      comment.post_key === reply.post_key && (
                        <div>
                          <CommentCard
                            name_read="Tai Tai"
                            name_author={reply.name_author}
                            date={reply.date}
                            content_comment={reply.content_comment}
                            setContent={setContent}
                            setTypeComment={setTypeComment}
                            setCheckReply={setCheckReply}
                            post_key={reply.post_key_reply}
                            className="comment-replyy"
                            handleDelete={handleDelete}
                            setCheckEdit={setCheckEdit}
                            checkEdit={checkEdit}
                            checkReply={checkReply}
                            content={content}
                            handleEdit={handleEdit}
                            comment_post_key={comment.post_key}
                            backgroundColor="#ffff"
                            borderStyle="solid"
                            borderWidth="2px"
                            borderColor="#f5f5f5"
                            marginLeft="30px"
                          ></CommentCard>
                          <CommentReply
                            typeComment={typeComment}
                            post_key={reply.post_key_reply}
                            checkReply={checkReply}
                            setContent={setContent}
                            setTypeComment={setTypeComment}
                            setCheckReply={setCheckReply}
                            content={content}
                            handleReply={handleReply}
                            comment_post_key={comment.post_key}
                          ></CommentReply>
                        </div>
                      )
                  )}
                </li>
              ))}
            </ul>
          </div>
          {checkReadMore && (
            <div className="read-more">
              <button
                onClick={() => {
                  setCurrentPage((currentPage) => currentPage + 1);
                }}
              >
                read more{" "}
                <IconContext.Provider value={{ className: "icon_ChevronDown" }}>
                  <BiChevronDown />
                </IconContext.Provider>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReadBlogs;
