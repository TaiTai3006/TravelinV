import '../admin.css';
import {MdOutlineArticle} from 'react-icons/md'
import {AiFillCaretRight} from 'react-icons/ai'
import {GrGroup} from 'react-icons/gr'
import DataPost from './adminMap';
import { React, useState, useEffect } from "react";
import {BiSearch} from 'react-icons/bi'
import {GrUserAdmin} from 'react-icons/gr'
import {BsPersonCircle} from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs'
import {HiChevronRight} from 'react-icons/hi'
import { DataUser } from './adminMap';
import {IoSearchCircle} from 'react-icons/io5'
import Axios, * as others from 'axios';




function Admin() {
  const [search, setSearch] = useState([])
  const [searchUser, setSearchUser] = useState([])
  const [posts, setpost] = useState([
    // {
    //   id: 1,
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   usename: "Thang",
    //   title: "10 điểm đến hấp dẫn tại Bình Định",
    //   createat: "1/12/2022",
    //   status: "Aprroved",
    //   option: <BsThreeDots/>,
    // },

    // {
    //   id: 2,
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   usename: "SonTran",
    //   title: "5 điểm đến hấp dẫn tại Bình Dương ", 
    //   createat: "2/12/2022",
    //   status: "Pending",
    // },

    // {
    //   id: 3,
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   usename: "ThiepLe",
    //   title: "7 điểm đến hấp dẫn tại Lâm Đồng ",
    //   createat: "3/12/2022",
    //   status: "Pending",
      
    // },

    // {
    //   id: 4,
    //   usename: "ThiepLe",
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   title: "10 điểm đến hấp dẫn tại Đà Nẵng ",
    //   createat: "3/12/2022",
    //   status: "Pending",
      
    // },

    // {
    //   id: 5,
    //   usename: "ThiepLe",
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   title: "5 điểm đến hấp dẫn tại Hà Nội ",
    //   createat: "4/12/2022",
    //   status: "Aprroved",
      
    // },

    // {
    //   id: 6,
    //   usename: "PhuSy",
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   title: "Bảng xếp hạng trai đẹp UIT ",
    //   createat: "4/12/2022",
    //   status: "Aprroved",
      
    // },

    // {
    //   id: 7,
    //   usename: "Trí",
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   title: "10 địa điểm vui chơi giải trí tại Biên Hòa ",
    //   createat: "5/12/2022",
    //   status: "Pending",
      
    // },

    // {
    //   id: 8,
    //   usename: "TaiTai",
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   title: "Review Sơn Trần ",
    //   createat: "5/12/2022",
    //   status: "Pending",
      
    // },

    // {
    //   id: 9,
    //   usename: "PhuSy",
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   title: "Hành trình khám phá Di Linh cùng Thịp cute ",
    //   createat: "13/10/2023",
    //   status: "Aprroved",
      
    // },

    // {
    //   id: 10,
    //   usename: "Thang",
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   title: "Nhật ký sinh tồn ở Bắc Cực ft. TaiTai ",
    //   createat: "6/12/2022",
    //   status: "Pending",
      
    // },


    // {
    //   id: 11,
    //   usename: "SonTran",
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   title: "Tiềm năng du lịch của UIT ",
    //   createat: "10/12/2022",
    //   status: "Pending",
      
    // },

    // {
    //   id: 12,
    //   usename: "Baolacai",
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   title: "Hotboy TaiTai chia sẻ bí quyết giữ gìn hạnh phúc gia đình",
    //   createat: "1/3/2030",
    //   status: "Pending",
      
    // },

  ]);
   const [user, setuser] = useState ([
    // {
    //   id: 1,
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   usename: "Thang",
    //   gender: "Male",
    //   mail: "Thangnguyen@xyz.com",
    //   phone: "0978567234",
    //   account: "User",
    // },
  
    // {
    //   id: 2,
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   usename: "SonTran",
    //   gender: "Male",
    //   mail: "SonTran123@xyz.com",
    //   phone: "0937587234",
    //   account: "User",
    // },
  
    // {
    //   id: 3,
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   usename: "Thiep",
    //   gender: "Female",
    //   mail: "Thiepcute@xyz.com",
    //   phone: "0913102002",
    //   account: "User",
    // },
  
    // {
    //   id: 4,
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   usename: "Tri",
    //   gender: "Male",
    //   mail: "TriUIT@xyz.com",
    //   phone: "0978567542",
    //   account: "User",
    // },
  
    // {
    //   id: 5,
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   usename: "TaiTai",
    //   gender: "Male",
    //   mail: "Taine@xyz.com",
    //   phone: "0986167234",
    //   account: "Admin",
    // },
  
    // {
    //   id: 6,
    //   avatar: 'https://i.pinimg.com/originals/9f/e7/11/9fe711fe90bd16ebbebc7a4df0f31d60.jpg',
    //   usename: "PhuSy",
    //   gender: "Male",
    //   mail: "Fujisan@xyz.com",
    //   phone: "0901182002",
    //   account: "Admin",
    // },
  ]);
  
  
  useEffect(() =>{
    Axios.get('http://localhost:8800/admin').then((response)=>{
      setpost(response.data);
      setSearch(response.data);
    })
    Axios.get("http://localhost:8800/admin/user").then((response) =>{
      setuser(response.data)
      setSearchUser(response.data)
    })
  },[])


  
  const [type, settype] = useState('blog')
  
  function handleEvent (type) {
    if (type==='blog')
    return  <div className="info data-item ">
      {/* <DataPost posts={search}/>  */}
      </div>
    if (type==="user") return <div className='info-user' >
      <DataUser user={searchUser} posts ={posts}/>
    </div>

  }   

  function handleBar (type) {
    if (type==='blog')
    return (
      <div className="info-bar">
         <div className="username">Username</div>
         <div className="title">Title</div>
         <div className="create-at">Create at</div>
        <div className="status">Status</div>
      </div>
    ) 
    if (type==='user') return (
      <div className="info-bar">
         <div className="username">Username</div>
         <div className="title">Gender</div>
         <div className="username">Mail</div>
         <div className="create-at">Phone</div>
        <div className="status">Account</div>
      </div>
    )


  }
  const [iconArrow, seticonArrow] = useState("inline")
  const [blogColor, setblogColor] = useState("#F4F2EE")
  const [iconArrow2, seticonArrow2] = useState("none")
  const [userColor, setuserColor] = useState("none")
  const handleArrow = () => {
      setblogColor('#F4F2EE')
      seticonArrow("inline")
      seticonArrow2("none")
      setuserColor("")
    }
  const handleArrow2 = () => {
    seticonArrow2("inline")
    setuserColor("#F4F2EE")
    setblogColor("")
    seticonArrow("none")
  }
  
  
  return (
    <div className="admin-page">
      <div className="dashBoard">
        <div className="logo">Logo</div>
        <div className="text1">Pages</div>
        <div onClick={handleArrow}  style={{backgroundColor: blogColor}} className="flex-blog">
          <div className="icon-blog">
            <MdOutlineArticle/>
          </div>
          <div className="text2" onClick={() => settype('blog')}>Blog</div>
          <div className="icon-arrow" style={{display: iconArrow}}><HiChevronRight/></div>
        </div>
        <div onClick={handleArrow2} style={{backgroundColor: userColor}} className="flex-user">
          <div className="icon-user"><GrGroup/></div>
          <div className="icon-arrow-2" style={{display: iconArrow2}}><HiChevronRight/></div>
        <div className="text3" onClick={()=>settype('user')}>Users</div>
        </div> 
      </div>

      <div className="head">
        <div className="text6">Admin</div>
        <div className="flex-home">
          <a href="" className="text4">Home</a>
          <div className="icon-home"><HiChevronRight/></div>
          <a href="" className="text5">Dashboard</a>
        </div>
      </div>

      <div className="main-bar">
        <div className="text-tour">Blog</div>
        <div className="search-bar">
        <input type="text" onChange={(text) => {
      setSearch(posts.filter((post)=>{
      return post.postName.toLowerCase().includes(text.target.value.toLowerCase()) ||  post.postName.toLowerCase().includes(text.target.value.toLowerCase())
    }
    ))
    setSearchUser(user.filter((user)=>{
      return user.name.toLowerCase().includes(text.target.value.toLowerCase())
    }
    ))
      
      
        }} placeholder="Search.."/>
        <div className="find-icon"><IoSearchCircle color='#48D10C'/></div>
        </div>
        <div className="ad-info">
          <img className='ad-img' src='https://i.pinimg.com/736x/cd/1e/8b/cd1e8b2a7457a49216b4d4b1a3d32e3b.jpg'/>
          <div className="ad-name">Name admin</div>
        </div>

      </div>

      {handleBar(type)}
      {handleEvent(type)} 
    </div>
  )
}

export default Admin;
