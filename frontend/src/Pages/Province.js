import "../Province.css";
import img1 from "../image/AnGiangpic.jpg";
import img2 from "../image/koki.png";
import { RiSearchLine } from "react-icons/ri";
import React, { useState, useMemo } from "react";
import Pagination from "./Pagination";
const Province = {
  province_name: "An Giang",
  description:
    "Vùng đất hiền hoà ôm trọn nét đẹp chân chất của Đồng Bằng Sông Cửu Long, với rừng ngập mặn, đường làng quanh co ngập bóng dừa nước hay bạt ngàn ruộng đồng cò bay thẳng cánh.",
  province_img: img1,
};

const option = [
  {
    name: "Khánh Hòa",
    img: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/04/du-lich-nha-trang.jpg",
  },
  {
    name: "Lâm Đồng",
    img: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/04/du-lich-nha-trang.jpg",
  },
  {
    name: "Lào Cai",
    img: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/04/du-lich-nha-trang.jpg",
  },
  {
    name: "Hà Nội",
    img: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/04/du-lich-nha-trang.jpg",
  },
  {
    name: "Đà Nẵng",
    img: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/04/du-lich-nha-trang.jpg",
  },
];

const article = [
  {
    id: 1,
    author: "Thiệp",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 2,
    author: "Thiệp",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 3,
    author: "Thiệp",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 4,
    author: "Thiệp",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 5,
    author: "Thiệp",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 6,
    author: "Thiệp",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 7,
    author: "Thiệp",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 8,
    author: "Thiệp",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 9,
    author: "Thiệp",
    title: "Du lịch Đức: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 10,
    author: "Thiệp",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 11,
    author: "Thiệp",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 12,
    author: "Tài",
    title: "Du lịch Châu Đốc: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },

  {
    id: 13,
    author: "Thiệp",
    title: "Du lịch Núi Cấm: Cẩm nang du lịch từ A đến Z",
    image:
      "https://dulichkhatvongviet.com/wp-content/uploads/2022/03/an-giang.jpg",
  },
];

function App() {
  let PageSize = 9;
  const [search, setSearch] = useState(article);
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return search.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, search]);
  console.log(search);

  return (
    <div className="province-container">
      <div className="head-page">
        <div classname="prode">
          <div className="travel-in">Travel in</div>

          <div className="provinceName">{Province.province_name}</div>
          <p className="describe">{Province.description}</p>
        </div>
        <div id="parent">
          <img className="img1" src={Province.province_img}></img>
          {/* <img className="img2" src={img2}></img> */}
        </div>
        <div className="pick-destination">
          <div className="pickade">Pick a destination</div>
          <div className="option-board">
            {option.map((option, index) => (
              <a href="">
                <div key={index} className="option-item">
                  <img className="img-item" src={option.img} />
                  <div className="name">{option.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="province-search-container">
        <div className="waylf">What are you looking for?</div>
        <div className="input-container">
         
          <input
            type="text"
            onChange={(text) => {
              setSearch(
                article.filter((article) => {
                  return article.title
                    .toLowerCase()
                    .includes(text.target.value.toLowerCase());
                })
              );
            }}
            placeholder={
              "Type to search within" + " " + Province.province_name + "..." 
            }
          />
          <div className="search-icon">
            <RiSearchLine />
          </div>
        </div>
      </div>

      <div className="article">
        {currentTableData.map((search, index) => (
          <div key={index} className="article-item">
            <img className="img-article" src={search.image} />
            <div className="title-article">{search.title}</div>
            <div className="author-article">{search.author}</div>
          </div>
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={article.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
