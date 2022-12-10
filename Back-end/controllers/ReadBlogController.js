import { db } from "../index.js";
import { v4 as uuidv4 } from "uuid";

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

  const q = "SELECT * FROM `comment` WHERE idPost = ? ORDER BY `dateTime` ASC";

  db.query(q, [idPostId], (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.json(data);
  });
};

export const getReply = (req, res) => {
  const postId = req.params.idPost;

  const q =
    "SELECT reply.* FROM `reply`, comment  WHERE reply.idComment = comment.idComment and comment.idPost = ?";

  db.query(q, [postId], (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.json(data);
  });
};

export const createComment = (req, res) => {
  const postId = req.params.idPost;

  const q =
    "INSERT INTO `comment`(`idComment`, `userName`, `description`, `idPost`) VALUES (?)";

  const values = [
    (req.body.idComment = uuidv4()),
    req.body.userName,
    req.body.description,
    (req.body.idPost = postId),
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.json("Thanh cong");
  });
};

export const createReply = (req, res) => {
  const commentId = req.params.idComment;

  const q =
    "INSERT INTO `reply`(`idReply`, `idComment`, `userName`, `description`) VALUES (?)";

  const values = [
    (req.body.idReply = uuidv4()),
    (req.body.idReply = commentId),
    req.body.userName,
    req.body.description,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.json("Thanh cong");
  });
};

export const deleteComment = (req, res) => {
  const commentId = req.params.idComment;

  const q = "DELETE FROM `comment` WHERE idComment = ?";

  db.query(q, [commentId], (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.json("Thanh cong");
  });
};

export const deleteReply = (req, res) => {
  const commentId = req.params.idComment;

  const q = "DELETE FROM `reply` WHERE idComment = ?";

  db.query(q, [commentId], (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.json("Thanh cong");
  });
};

export const editComment = (req, res) => {
  const commentId = req.params.idComment;

  const q = "UPDATE `comment` SET `description`= ? WHERE  idComment = ?";

  const values = [req.body.description];

  db.query(q, [...values, commentId], (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.json("Thanh cong");
  });
};

export const editReply = (req, res) => {
  const replyId = req.params.idReply;

  const q = "UPDATE `reply` SET `description`= ? WHERE idReply = ?";

  const values = [req.body.description];

  db.query(q, [...values, replyId], (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.json("Thanh cong");
  });
};
