import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";

const useReadBlog = (callback) => {
  const { user } = useContext(UserContext);

  const location = useLocation();

  const [province, setProvince] = useState({ provinceName: "" });

  const [authorPost, setAuthorPost] = useState({});

  const [desPost, setDesPost] = useState([]);

  const [checkReadBlog, setCheckReadBlog] = useState({});

  const [related, setRelated] = useState([]);

  const [comment, setComment] = useState([])

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

    axios.get( `http://localhost:8800/Comment/${location.pathname.split("/")[3]}`).then((res) => setComment(res.data))

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

  console.log(checkReadBlog);

  return {
    province,
    authorPost,
    desPost,
    checkReadBlog,
    related,
    comment,
    handleLike,
  };
};
export default useReadBlog;
