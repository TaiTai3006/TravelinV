import { db } from "../index.js";

export const getUser = (req, res) => {
  const userNameId = req.params.userName;
    const q = "SELECT userName, name,  image from account where userName = ?";
    db.query(q, [userNameId], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  };

export const getPost = (req, res) => {
const userNameId = req.params.userName;
    // const userNameId = 'taitai'
  const q = "SELECT a2.idPost, a2.postName, a2.image, day(a2.dateTime) as Day, month(a2.dateTime) as Month, year(a2.dateTime) as Year, a3.provinceName from account a1, post a2, province a3 where a1.userName = a2.userName and a2.idProvince = a3.idProvince and a1.userName = ?";
  db.query(q, [userNameId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getPostLike = (req, res) => {
    const userNameId = req.params.userName;
        // const userNameId = 'taitai'
      const q = "SELECT post.idPost, post.postName,post.image, day(post.dateTime) as Day, month(post.dateTime) as Month, year(post.dateTime) as Year, province.provinceName, account.userName from post, province, `like`, account where post.idPost = `like`.`idPost` and post.idProvince = province.idProvince and account.userName = post.userName and `like`.`userName`=? and account.userName !=`like`.`userName`";
      db.query(q, [userNameId], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
      });
};

export const DeletePost = (req, res) => {
const PostId = req.params.idPost;
  const q = "DELETE FROM `post` WHERE post.idPost=?"
  db.query(q, [PostId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const DeletePostDes = (req, res) => {
const PostId = req.params.idPost;
  const q = "DELETE FROM `description` WHERE description.idPost=?"

  db.query(q, [PostId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const DeleteLike = (req, res) => {
  const PostId = req.params.idPost;
    const q = "DELETE FROM `like` WHERE `like`.`idPost`=?" 
    db.query(q, [PostId], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  };