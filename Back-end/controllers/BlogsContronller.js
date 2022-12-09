import { db } from "../index.js";

export const getFeaturedPost = (req, res) => {
// const userNameId = req.params.userName;
  const q = "SELECT image, YEAR(dateTime) as Year, postName, idPost, idProvince FROM `post` WHERE 1 ORDER by post.dateTime DESC LIMIT 2";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getRecentPost = (req, res) => {
  // const userNameId = req.params.userName;
    const q = "SELECT image, postName, idPost, idProvince FROM `post` WHERE 1 ORDER by post.like DESC, post.dateTime DESC LIMIT 3";
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  };

export const getSlideImage = (req, res) => {
// const userNameId = req.params.userName;
    const q = "SELECT postName, demoDescription, image, idProvince, idPost FROM `post` WHERE 1 ORDER by post.dateTime DESC";
    db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
    });
};

export const getRelatedPost = (req, res) => {
    const idProvince = req.params.idProvince;
    const idPost = req.params.idPost
    const q = "SELECT postName, image, idPost, idProvince FROM `post` WHERE idPost!=? and idProvince=? ORDER by post.dateTime DESC";
    db.query(q, [idPost, idProvince], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
    });
};

export const getGoto = (req, res) => {
  const q = "SELECT provinceName as data, idProvince FROM `province` WHERE 1 LIMIT 8";
  db.query(q, (err, data) => {
  if (err) return res.json(err);
  return res.json(data);
  });
};