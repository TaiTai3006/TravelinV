import { useState } from "react";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
const relatedPosts = [
  {
    image:
      "https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg",
    title: "Địa điểm săn mây Đà Lạt",
  },
  {
    image:
      "https://i.pinimg.com/564x/6b/30/ef/6b30efc71a14e507e3821e5e6330ad30.jpg",
    title: "Đà Lạt và những cung đường thơ mộng",
  },
  {
    image:
      "https://i.pinimg.com/564x/af/b6/bd/afb6bd2c6c3efcb3fec27362febb8a58.jpg",
    title: "Bộ ảnh Đà Lạt qua đôi mắt của những “kẻ mộng mơ",
  },
];


const slideImages = [
    {
      url: 'https://www.sbb.ch/content/dam/internet/sharedimages/objekte/Swiss-Bankers-Travel.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
      titile:'Sustainable Travel',
      des: 'de di da lat thi ban can nhung gi1 co con chim vanh khuyen nho sac long muot nhu to ong goi da bao vang ay the ngoan nhat nha'
    },
    {
      url: 'https://v-biz.vn/static/media/Travel.ff88c854.jpg',
      titile:'chim chich bong',
      des: 'chim chich bong rat hay treo tu canh na sang canh buoi'
    },
    {
      url: 'https://e4life.vn/wp-content/uploads/2021/09/tu-vung-ielts-chu-de-travel.png',
      titile:'con co',
      des: 'con co may di an dem dau phai canh mem lon co xuong ao'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbK9ZHYnPY39soqR7NBQjuvykQwq2JSy1RuA&usqp=CAU',
      titile:'da la ne4',
      des: 'de di da lat thi ban can nhung gi4'
    }
  ];
const Slider = () => {
const [currentSlide, setCurrentSlide] = useState(0)
    const slideLengh = slideImages.length;
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLengh - 1 ? 0 : currentSlide + 1);
    }
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLengh - 1: currentSlide - 1);
    }
    return(
      <div className="">
          <div className="realated-post-ctn">
          <div className="sidebar-articles">
          <div className="sidebar-articles_container_blogs">
            {relatedPosts.map((relatedPost, index) => (
              <Link className="article-text-block" to="/Blogs/Dalat">
                <div className="article-text-block_image" key={index}>
                  <img src={relatedPost.image} alt="image of post"></img>
                </div>
                <div className="article-text-block_content">
                  <h2>{relatedPost.title}</h2>
                </div>
              </Link>
            ))}
          </div>
          </div>
          </div>
          <button className=" slider-btn" id="left" onClick={prevSlide} ><HiChevronLeft/></button>
          <button className=" slider-btn" id="right" onClick={nextSlide} ><HiChevronRight/></button>
          <span className="slider-title">{slideImages[currentSlide].titile}</span>
          <span className="slider-des">{slideImages[currentSlide].des}</span>
          <div className='button-ctn'>
            <a className="slider-button" href={slideImages.titile}>GO TO POST</a>
          </div>
          {slideImages.map((slideImage, index) =>(
                <div key={index} className="slide.active">
                  {index === currentSlide && (
                      <img className="slider-img" src={slideImage.url} ></img>)}
                  </div>
            )
            )}
          </div>


    );
}
export default Slider