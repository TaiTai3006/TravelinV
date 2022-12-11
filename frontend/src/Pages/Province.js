import "../Province.css";
import { RiSearchLine } from "react-icons/ri";
import React, { useState, useMemo, useEffect } from "react";
import Pagination from "./Pagination";
import { Link, useLocation } from "react-router-dom";
import removeVietnameseTones from "../components/removeVietnameseTones";
import axios from "axios";

function App() {
  const location = useLocation();

  const [provincePost, setProvincePost] = useState([]);

  const [province, setProvince] = useState({ provinceName: "" });

  const [destination, getDestination] = useState([]);

  let PageSize = 9;

  const [search, setSearch] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return search.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, search]);

  console.log(search, "hello");

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
        `http://localhost:8800/ProvincePost/${location.pathname.split("/")[2]}`
      )
      .then((res) => {
        setProvincePost(res.data);
        setSearch(res.data);
      });

    axios
      .get(
        `http://localhost:8800/Destination/${location.pathname.split("/")[2]}`
      )
      .then((res) => getDestination(res.data));
  }, [location]);

  console.log(provincePost, province, destination);

  return (
    <div className="province-container">
      <div className="head-page">
        <div classname="prode">
          <div className="travel-in">Travel in</div>

          <div className="provinceName">
            {removeVietnameseTones(province.provinceName)}
          </div>
          <p className="describe">{province.describe}</p>
        </div>
        <div id="parent">
          <img className="img1" src={province.image}></img>
          {/* <img className="img2" src={img2}></img> */}
        </div>
        <div className="pick-destination">
          <div className="pickade">Pick a destination</div>
          <div className="option-board">
            {destination.map((des) => (
              <Link to={`/Blogs/${des.idProvince}`}>
                <div key={des.idProvince} className="option-item">
                  <img className="img-item" src={des.image} />
                  <div className="name">{des.provinceName}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="province-search-container">
        <div className="waylf">What are you looking for?</div>
        <div className="province-input-container">
          <input
            type="text"
            onChange={(text) => {
              setSearch(
                provincePost.filter((post) => {
                  return post.postName
                    .toLowerCase()
                    .includes(text.target.value.toLowerCase());
                })
              );
            }}
            placeholder={
              "Type to search within" + " " + province.provinceName + "..."
            }
          />
          <div className="search-icon">
            <RiSearchLine />
          </div>
        </div>
      </div>

      <div className="article">
        {currentTableData.map((search) => (
          <div key={search.idPost} className="article-item">
            <Link to={`/Blogs/${province.idProvince}/${search.idPost}`}>
              <img className="img-article" src={search.image} />
              <div className="title-article">{search.postName}</div>
              <div className="author-article">{search.userName}</div>
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={provincePost.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
