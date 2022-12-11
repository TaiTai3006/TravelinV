import { db } from "../index.js";

export const getFeaturedPost = (req, res) => {
// const userNameId = req.params.userName;
  const q = "SELECT image, YEAR(dateTime) as Year, postName, idPost, idProvince FROM `post` WHERE status='approved' ORDER by post.like DESC LIMIT 2";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getRecentPost = (req, res) => {
  // const userNameId = req.params.userName;
    const q = "SELECT image, postName, idPost, idProvince FROM `post` WHERE status='approved' ORDER by post.dateTime DESC, post.dateTime DESC LIMIT 3";
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  };

export const getSlideImage = (req, res) => {
// const userNameId = req.params.userName;
    const q = "SELECT postName, demoDescription, image, idProvince, idPost FROM `post` WHERE status='approved' ORDER by post.dateTime DESC";
    db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
    });
};

export const getRelatedPost = (req, res) => {
    const idProvince = req.params.idProvince;
    const idPost = req.params.idPost
    const q = "SELECT postName, image, idPost, idProvince FROM `post` WHERE idPost!=? and idProvince=? and status='approved' ORDER by post.dateTime DESC LIMIT 3";
    db.query(q, [idPost, idProvince], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
    });
};

export const getGoto = (req, res) => {
  const q = "SELECT pr.provinceName as data, pr.idProvince FROM `province` pr, `post` ps WHERE pr.idProvince = ps.idProvince and ps.status='approved' GROUP BY pr.idProvince ORDER by ps.`like` DESC LIMIT 9";
  db.query(q, (err, data) => {
  if (err) return res.json(err);
  return res.json(data);
  });
};