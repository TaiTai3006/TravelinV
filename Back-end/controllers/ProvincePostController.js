import { db } from "../index.js";
export const getProvincePost = (req, res) => {
  const provincePostId = req.params.idProvince;

  const q = "SELECT * FROM  post WHERE `status` = 'approved' and idProvince = ?  ";

  db.query(q, [provincePostId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getProvince = (req, res) => {
  const provincePostId = req.params.idProvince;

  const q = "SELECT * FROM  province WHERE idProvince = ?";

  db.query(q, [provincePostId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getDestination = (req, res) => {
  const provincePostId = req.params.idProvince;

  const q =
    "SELECT province.idProvince, province.image, provinceName FROM post, province WHERE province.idProvince = post.idProvince and province.idProvince != ? and `status` = 'approved' GROUP by province.idProvince ORDER by COUNT(*) desc LIMIT 5";

  db.query(q, [provincePostId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};


