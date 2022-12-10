import { db } from "../index.js";

export const getAuthorPost = (req, res) => {
  const postId = req.params.idPost;

  const q =
    "SELECT post.*, account.userName, avatar FROM post, account WHERE post.userName = account.userName and idPost = ?";

  db.query(q, [postId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getDesPost = (req, res) => {
  const postId = req.params.idPost;

  const q = "SELECT * FROM `description` WHERE idPost = ?";

  db.query(q, [postId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const checkLike = (req, res) => {
  const userNameId = req.params.userName;

  const q = "SELECT * FROM `like` WHERE idPost = ? and userName = ?";

  const values = [req.body.idPost];

  db.query(q, [...values, userNameId], (err, data) => {
    if (err) return res.json(err);
    return Object.keys(data).length !== 0 ? res.json(true) : res.json(false);
  });
};

export const createLike = (req, res) => {
  const userNameId = req.params.userName;

  const q = "INSERT INTO `like`(`idPost`, `userName`) VALUES (?)";

  const values = [req.body.idPost, (req.body.userName = userNameId)];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.json("Like");
  });
};

export const deleteLike = (req, res) => {
  const userNameId = req.params.userName;

  const q = "DELETE FROM `like` WHERE idPost = ? and userName = ?";

  const values = [req.body.idPost];

  db.query(q, [...values, userNameId], (err, data) => {
    if (err) return res.send(err);
    return res.json("unlike");
  });
};

export const getRelatedPots = (req, res) => {
  const idPostId = req.params.idPost;

  const q =
    "SELECT * FROM `post` WHERE idPost != ? and idProvince = ? ORDER by `like` desc LIMIT 5";

  const values = [req.body.idProvince];

  db.query(q, [idPostId, ...values], (err, data) => {
    if (err) {
        return res.send(err);
    }
    return res.json(data);
  });
};

export const getComment = (req, res) => {
    const idPostId = req.params.idPost;
  
    const q =
      "SELECT * FROM `comment` WHERE idPost = ?";
  
    db.query(q, [idPostId], (err, data) => {
      if (err) {
          return res.send(err);
      }
      return res.json(data);
    });
  };