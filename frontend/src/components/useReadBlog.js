import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";

const useReadBlog = (callback) => {
  const focustInput = useRef();

  const { user } = useContext(UserContext);

  const location = useLocation();

  const [province, setProvince] = useState({ provinceName: "" });

  const [authorPost, setAuthorPost] = useState({});

  const [desPost, setDesPost] = useState([]);

  const [checkReadBlog, setCheckReadBlog] = useState({ replyInput: true });

  const [related, setRelated] = useState([]);

  const [comment, setComment] = useState([]);

  const [reply, setReply] = useState([]);

  const [commentInput, setCommentInput] = useState({
    userName: user.userName,
    idPost: location.pathname.split("/")[3],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8800/Province/${location.pathname.split("/")[2]}`)
      .then((res) =>
        setProvince(
          res.data.reduce((t, v) => {
            const { name, ...rest } = v;
            t = rest;
            return t;
          }, {})
        )
      );

    axios
      .get(
        `http://localhost:8800/AuthorPost/${location.pathname.split("/")[3]}`
      )
      .then((res) =>
        setAuthorPost(
          res.data.reduce((t, v) => {
            const { name, ...rest } = v;
            t = rest;
            return t;
          }, {})
        )
      );

    axios
      .get(`http://localhost:8800/DesPost/${location.pathname.split("/")[3]}`)
      .then((res) => setDesPost(res.data));

    axios
      .post(`http://localhost:8800/CheckLike/${user.userName}`, {
        idPost: location.pathname.split("/")[3],
      })
      .then((res) =>
        setCheckReadBlog({ ...checkReadBlog, checkLike: res.data })
      );

    axios
      .post(
        `http://localhost:8800/RelatedPots/${location.pathname.split("/")[3]}`,
        {
          idProvince: location.pathname.split("/")[2],
        }
      )
      .then((res) => setRelated(res.data));

    axios
      .get(`http://localhost:8800/Comment/${location.pathname.split("/")[3]}`)
      .then((res) => setComment(res.data));

    axios
      .get(`http://localhost:8800/Reply/${location.pathname.split("/")[3]}`)
      .then((res) => setReply(res.data));
  }, [location]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8800/AuthorPost/${location.pathname.split("/")[3]}`
      )
      .then((res) =>
        setAuthorPost(
          res.data.reduce((t, v) => {
            const { name, ...rest } = v;
            t = rest;
            return t;
          }, {})
        )
      );
  }, [checkReadBlog.checkLike]);

  const handleComments = () => {
    axios
      .post(
        `http://localhost:8800/CreateComment/${
          location.pathname.split("/")[3]
        }`,
        commentInput
      )
      .then((res) => console.log(res.data));

    setCommentInput({ ...commentInput, description: "" });

    focustInput.current.focus();

    axios
      .get(`http://localhost:8800/Comment/${location.pathname.split("/")[3]}`)
      .then((res) => setComment(res.data));
  };

  const handleReplys = (idComment) => {
    axios
      .post(`http://localhost:8800/CreateReply/${idComment}`, commentInput)
      .then((res) => console.log(res.data));

    setCheckReadBlog({
      ...checkReadBlog,
      keyReply: "",
      replyInput: true,
    });

    setCommentInput({ ...commentInput, description: "" });

    axios
      .get(`http://localhost:8800/Reply/${location.pathname.split("/")[3]}`)
      .then((res) => setReply(res.data));
  };

  const handleDeleteComment = (type, idComment) => {
    if (type === "comment-reply") {
      axios.delete(`http://localhost:8800/DeleteReply/${idComment}`);

      axios.delete(`http://localhost:8800/DeleteComment/${idComment}`);

      axios
        .get(`http://localhost:8800/Comment/${location.pathname.split("/")[3]}`)
        .then((res) => setComment(res.data));
    } else {
      axios.delete(`http://localhost:8800/DeleteReply/${idComment}`);
    }
    axios
      .get(`http://localhost:8800/Reply/${location.pathname.split("/")[3]}`)
      .then((res) => setReply(res.data));
  };

  const handleEditComment = (type, idComment, idReply) => {
    if (type === "comment-reply") {
      axios.put(`http://localhost:8800/EditComment/${idComment}`, commentInput).then((res) => console.log(res.data));

      axios
        .get(`http://localhost:8800/Comment/${location.pathname.split("/")[3]}`)
        .then((res) => setComment(res.data));
    } else {
      axios.put(`http://localhost:8800/EditReply/${idReply}`, commentInput).then((res) => console.log(res.data));

      axios
        .get(`http://localhost:8800/Reply/${location.pathname.split("/")[3]}`)
        .then((res) => setReply(res.data));
    }
    setCommentInput({...commentInput, description: ''})
    setCheckReadBlog({...checkReadBlog, checkEdit: false, checkReply: '', replyInput: true})
  };

  const handleLike = () => {
    if (checkReadBlog.checkLike) {
      axios.post(`http://localhost:8800/Unlike/${user.userName}`, {
        idPost: location.pathname.split("/")[3],
      });
      setCheckReadBlog({ ...checkReadBlog, checkLike: false });
    } else {
      axios.post(`http://localhost:8800/Like/${user.userName}`, {
        idPost: location.pathname.split("/")[3],
      });
      setCheckReadBlog({ ...checkReadBlog, checkLike: true });
    }
  };

  console.log(commentInput);

  return {
    province,
    authorPost,
    desPost,
    checkReadBlog,
    related,
    comment,
    reply,
    commentInput,
    focustInput,
    setCommentInput,
    handleLike,
    setCheckReadBlog,
    handleComments,
    handleReplys,
    handleDeleteComment,
    handleEditComment
  };
};
export default useReadBlog;
