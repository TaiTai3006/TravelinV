import "../PersonalPage.css";
// import { IconContext } from "react-icons";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { BsFillFilterSquareFill } from "react-icons/bs";
import {useEffect} from 'react';
import {useState} from 'react';
import { FaEdit } from "react-icons/fa";
import { BsTextRight } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { MdOutlineBookmarkRemove } from "react-icons/md";
import { RiDislikeLine } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";

import axios from "axios"
// import { UserContext } from "../App";
import { useLocation } from "react-router-dom";
import { IconContext } from "react-icons";


const tabs=[
    {name:'Post', style:<IconContext.Provider value={{ className: 'Thang_a'}}><BsFillFilterSquareFill/></IconContext.Provider>},
    {name:'PostLike', style: <IconContext.Provider value={{ className: 'Thang_a'}}><BsBookmarkHeartFill/></IconContext.Provider>}, 
    {name:'Pending', style: <IconContext.Provider value={{ className: 'Thang_Icon_Pending'}}><MdOutlinePendingActions/></IconContext.Provider>}
]

export default function PersonalPage() {
    // const User = useContext(UserContext);
    // console.log(User.user)
    const [type, setType] = useState('Post')
    const [Name, setName] = useState([{}])
    const [Content, setContent] = useState([{}])
    const [CountPost, setCountPost] = useState();
    const [CountPostLike, setCountPostLike] = useState();
    const [CountPostPending, setCountPostPending] = useState();

    const location = useLocation()


    useEffect(()=>{
        const FecthCountPostLike = async ()=>{
            try{
                await axios.get(`http://localhost:8800/${location.pathname.split("/")[2]}/Personal/PostLike`).then((response) =>{
                    setCountPostLike(response.data.length)
                    
                })
            } catch (err) {
                console.log(err)
            }
        };
        const FecthCountPostPending = async ()=>{
            try{
                await axios.get(`http://localhost:8800/${location.pathname.split("/")[2]}/Personal/Pending`).then((response) =>{
                    setCountPostPending(response.data.length)
                    
                })
            } catch (err) {
                console.log(err)
            }
        };
        
        const FecthName = async ()=>{
            try{
                await axios.get(`http://localhost:8800/${location.pathname.split("/")[2]}`).then((response) =>{
                    setName(response.data)
                    console.log(response.data.length)
                })
            } catch (err) {
                console.log(err)
            }
        };
        FecthCountPostLike()
        FecthCountPostPending()
        FecthName()
    },[location])

    useEffect(() => {
        const FecthAllPost = async ()=>{
            try{
                await axios.get(`http://localhost:8800/${location.pathname.split("/")[2]}/Personal/${type}`).then((response) =>{
                   response.data && setContent(response.data)
                   if(type === 'Post')
                    setCountPost(response.data.length)
                    else if(type === 'PostLike')
                    setCountPostLike(response.data.length)
                        else if(type === 'PostPending')
                    setCountPostPending(response.data.length)

                })
            } catch (err) {
                console.log(err)
            }
        };
        FecthAllPost()
    },[type])

    const handleDeletePost = async (id) => {
        try {
          await axios.delete(`http://localhost:8800/${location.pathname.split("/")[2]}/Personal/DeleteLike/${id}`);
          await axios.delete(`http://localhost:8800/${location.pathname.split("/")[2]}/Personal/DeletePostDes/${id}`);
          await axios.delete(`http://localhost:8800/${location.pathname.split("/")[2]}/Personal/DeletePost/${id}`);
          await axios.get(`http://localhost:8800/${location.pathname.split("/")[2]}/Personal/${type}`).then((response) =>{
                   response.data && setContent(response.data)
                    setCountPost(response.data.length)
                })
        //   window.location.reload()
        } catch (err) {
          console.log(err);
        }
      };
      const handleDeletePostLike = async (id) => {
        try {
          await axios.delete(`http://localhost:8800/${location.pathname.split("/")[2]}/Personal/DeleteLike/${id}`);
          await axios.get(`http://localhost:8800/${location.pathname.split("/")[2]}/Personal/${type}`).then((response) =>{
                   response.data && setContent(response.data)
                    setCountPostLike(response.data.length)
                })
        //   window.location.reload()
        } catch (err) {
          console.log(err);
        }
      };

function HandlCoutEvent(type, id)
{
    if(type==='Post')
        return (
        <ul className='Thang_edit_remove'>
            <li id='Thang_li1'>
                <span className='Thang_span'><MdEdit id='mdedit'></MdEdit></span> Edit
            </li>
            <li id='Thang_li2' onClick={()=>{handleDeletePost(id)}}>
                <span className='Thang_span'><MdOutlineBookmarkRemove id='mdremove'></MdOutlineBookmarkRemove></span> Remove
            </li>
        </ul>)
    else if (type==='PostLike')
            return (
            <ul className='Thang_edit_remove'>
                <li className='Thang_li' onClick={()=>{handleDeletePostLike(id)}}>
                    <span className='Thang_span'><RiDislikeLine id='mdremove'></RiDislikeLine></span> Unlike
                </li>
            </ul>)
}

    return (
    <div className = "Thang_avatar">
    {/* {setType('Post')} */}
    {/* {console.log(PostPersonal)} */}
        <div id='Thang_avatar_child'>
            <img src={Name[0].avatar}/>  
        </div>
        <div id='Thang_card'>
            </div>

        <div id='Thang_content0'>
            <ul id="Thang_edit_setting">
                <button id='Thang_setting'> <FaEdit></FaEdit></button>
                <button id="Thang_edit">Chỉnh sửa thông tin cá nhân</button>
            </ul>
            <p className='Thang_name'>{Name[0].userName}</p>  
            <div id='Thang_tab'>
                <p className="Thang_tab_content"><span>{CountPost}</span> {tabs[0].name}</p>
                <p className="Thang_tab_content"><span>{CountPostLike}</span> {tabs[1].name}</p>
                <p className="Thang_tab_content"><span>{CountPostPending}</span> {tabs[2].name}</p>
            </div>
        </div>
        <div>
        <hr id='Thang_hr'/>
        </div>
        <div id = 'Thang_content'>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    style={type === tab.name ? 
                        {
                            color:'black',
                            borderTop: '2px outset #5f5f5f',
                        } : {}}
                    onClick={()=>setType(tab.name)}
                > 
                <div><span style={index === 2 ? {}:{}}>{tab.style}</span><p>{tab.name}</p></div>
                </button>
            ))}
           
        </div>
        
        <div id ='Thang_content1'>
            {/* {console.log(Content)}   */}
            {/* {console.log(PostPersonal)} */}
            {Content.map((Content0)=>(
                <div key={Content0.idPost}>
                    <img src={Content0.image}/>
                    <p id='Thang_CONTENT_mokuji'>
                        <li className="Thang_li"><a id='Thang_text_right'><BsTextRight id='Thang_bstextright'></BsTextRight></a>
                            {HandlCoutEvent(type, Content0.idPost)}
                        </li>
                    </p>
                    <p id='Thang_CONTENT'>
                        <p>{Content0.userName}</p>
                        <h1 id='Thang_Content_Author'>{Content0.postName}</h1>
                        <p>{Content0.provinceName}&nbsp;&nbsp;&nbsp;&nbsp;{Content0.Day}-{Content0.Month}-{Content0.Year}</p>
                    </p>
                </div>
            ))}
        </div>

    </div>
    );
}
