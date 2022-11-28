import "../PersonalPage.css";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { BsFillHandbagFill } from "react-icons/bs";
import { BsFillFilterSquareFill } from "react-icons/bs";
import {useEffect} from 'react';
import {useState} from 'react';
import { FaEdit } from "react-icons/fa";
import { BsTextRight } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { MdOutlineBookmarkRemove } from "react-icons/md";
import { RiDislikeLine } from "react-icons/ri";




var Name = 'Nguyễn Ngọc Thắng'
const tabs=[{name:'Post', style:<BsFillFilterSquareFill className='Thang_a'></BsFillFilterSquareFill>},{name:'PostLike', style: <BsBookmarkHeartFill className='Thang_'></BsBookmarkHeartFill>},{name:'Bag', style: <BsFillHandbagFill className='Thang_a'></BsFillHandbagFill>}]

const Event_bv={id: 'Post'/*,content: <ul id='edit_remove'><li><button className='Thang_event'><span><MdEdit id='mdedit'></MdEdit></span> Edit</button></li><li><button className='Thang_event'><span><MdOutlineBookmarkRemove id='mdremove'></MdOutlineBookmarkRemove></span> Remove</button></li></ul>*/}
const Event_like={id: 'PostLike'/*, content: <ul id='edit_remove'><li><button className='Thang_event'><span><RiDislikeLine id='mdremove'></RiDislikeLine></span> Unlike</button></li></ul>*/}
const Event_td={id: 'Bag'/*, content: <ul id='edit_remove'><li><button className='Thang_event'><span><MdOutlineBookmarkRemove id='mdremove'></MdOutlineBookmarkRemove></span> Remove</button></li></ul>*/}

const Bag=[
    {
     "Image": "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/316241281_2167460543438400_1162359507881539794_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=gmlGm8qGSQkAX9ezcEg&tn=LBhcdzXBroSyhQQ6&_nc_ht=scontent-tpe1-1.xx&oh=00_AfBpMod-KAnhRo_craBySBywdAU-tH-NricAQ4IlqPUkMQ&oe=637F737B",
     "Title": "Đà Nẵng",
     "Time": "20/02/2022 - 05/03/2022",
     "id": "1"
    },
    {
     "Image": "https://khongsolac.com/wp-content/uploads/2019/09/flc-quy-nhon-5.jpg",
     "Title": "Bình Định",
     "Time": "21/05/2022 - 05/06/2022",
     "id": "2"
    }
]

const PostsLike=[
    {
        "Title": "Đà Nẵng liệu có phải là nơi đáng sống",
        "Location": "Đà Nẵng",
        "Time": "26/09/2022",
        "Image": "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/316241281_2167460543438400_1162359507881539794_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=gmlGm8qGSQkAX9ezcEg&tn=LBhcdzXBroSyhQQ6&_nc_ht=scontent-tpe1-1.xx&oh=00_AfBpMod-KAnhRo_craBySBywdAU-tH-NricAQ4IlqPUkMQ&oe=637F737B",
        "Author": "Lê Thiệp",
        "id": "1"
    },
    {
        "Title": "Hành trình khám phá nét đẹp hoài cổ đầy độc đáo",
        "Location": "Quảng Nam",
        "Time": "20/11/2022",
        "Image": "https://statics.vinpearl.com/du-lich-pho-co-hoi-an-5654_1628254007.jpg",
        "Author": "Phú Sỹ",
        "id": "2"
    },
    {
     "Title": "Địa điểm du lịch Bình Định nổi tiếng không thể bỏ qua",
     "Location": "Bình Định",
     "Time": "10/10/2022",
     "Image": "https://khongsolac.com/wp-content/uploads/2019/09/flc-quy-nhon-5.jpg",
     "Author": "Sơn Trần",
     "id": "3"
    },
    {
        "Title": "Những điều cần biết khi đến Đà Lạt",
        "Location": "Đà Lạt",
        "Time": "10/10/2022",
        "Image": "https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg",
        "Author": "Tấn Tài",
        "id": "4"
    }
]

const Posts=[
    {
     "Title": "Những điều cần biết khi đến Đà Lạt",
     "Location": "Đà Lạt",
     "Time": "10/10/2022",
     "Image": "https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg",
     "id": "1"
    },
    {
     "Title": "Địa điểm du lịch Bình Định nổi tiếng không thể bỏ qua",
     "Location": "Bình Định",
     "Time": "10/10/2022",
     "Image": "https://khongsolac.com/wp-content/uploads/2019/09/flc-quy-nhon-5.jpg",
     "id": "2"
    },
    {
     "Title": "Đà Nẵng liệu có phải là nơi đáng sống",
     "Location": "Đà Nẵng",
     "Time": "26/09/2022",
     "Image": "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/316241281_2167460543438400_1162359507881539794_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=gmlGm8qGSQkAX9ezcEg&tn=LBhcdzXBroSyhQQ6&_nc_ht=scontent-tpe1-1.xx&oh=00_AfBpMod-KAnhRo_craBySBywdAU-tH-NricAQ4IlqPUkMQ&oe=637F737B",
     "id": "3"
    }
]

export default function PersonalPage() {

    const [type, setType] = useState('Post')
    const [Content, setContent] = useState([])
    const [CountPost, setCountPost] = useState()
    const [CountPostLike, setCountPostLike] = useState()
    const [CountBag, setCountBag] = useState()

    useEffect(() => {
        setCountPost(Posts.length)
        setCountPostLike(PostsLike.length)
        setCountBag(Bag.length)
        if(type===Event_bv.id) {setContent(Posts)}
        else if(type===Event_like.id) {setContent(PostsLike)}
        else if(type===Event_td.id) {setContent(Bag)}
    },[type])

function HandlCoutEvent(type, id)
{
    if(type===Event_bv.id)
        return <ul className='Thang_edit_remove'><li id='Thang_li1'><span className='Thang_span'><MdEdit id='mdedit'></MdEdit></span> Edit</li><li id='Thang_li2' onClick={()=>{const NewPosts=Content.filter(post=>post.id !== id); setContent(NewPosts); setCountPost(NewPosts.length)}}><span className='Thang_span'><MdOutlineBookmarkRemove id='mdremove'></MdOutlineBookmarkRemove></span> Remove</li></ul>
    else if (type===Event_like.id)
            return <ul className='Thang_edit_remove'><li className='Thang_li' onClick={()=>{const NewPostLike=Content.filter(postlike=>postlike.id !== id); setContent(NewPostLike); setCountPostLike(NewPostLike.length)}}><span className='Thang_span'><RiDislikeLine id='mdremove'></RiDislikeLine></span> Unlike</li></ul>
        else if (type===Event_td.id)
            return <ul className='Thang_edit_remove'><li className='Thang_li' onClick={()=>{const NewBag=Content.filter(bag=>bag.id !== id); setContent(NewBag); setCountBag(NewBag.length)}}><span className='Thang_span'><MdOutlineBookmarkRemove id='mdremove'></MdOutlineBookmarkRemove></span> Remove</li></ul>
}

function HandlCoutContent(type, location, time)
{
    if(type===Event_bv.id || type===Event_like.id)
        return <p>{location}&nbsp;&nbsp;&nbsp;&nbsp;{time}</p>
    else
        return <p>{time}</p>
}

    return (
    <div className = "Thang_avatar"> 
        <div id='Thang_avatar_child'>
            <img src='https://i.pinimg.com/564x/da/ca/ec/dacaecc0b7fe84c6bebf8c142033f265.jpg'/>  
        </div>
        <div id='Thang_card'>
            </div>

        <div id='Thang_content0'>
            <ul id="Thang_edit_setting">
                <button id='Thang_setting'> <FaEdit></FaEdit></button>
                <button id="Thang_edit">Chỉnh sửa thông tin cá nhân</button>
            </ul>
            <p className='Thang_name'>{Name}</p>  
            <div id='Thang_tab'>
                <p className="Thang_tab_content"><span>{CountPost}</span> {tabs[0].name}</p>
                <p className="Thang_tab_content"><span>{CountPostLike}</span> {tabs[1].name}</p>
                <p className="Thang_tab_content"><span>{CountBag}</span> {tabs[2].name}</p>
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
                <div><span>{tab.style}</span><p>{tab.name}</p></div>
                </button>
            ))}
           
        </div>
        
        <div id ='Thang_content1'>
            {Content.map((Content0)=>(
                <div key={Content0.id}>
                    <img src={Content0.Image}/>
                    <p id='Thang_CONTENT_mokuji'>
                        <li className="Thang_li"><a id='Thang_text_right'><BsTextRight id='Thang_bstextright'></BsTextRight></a>
                        {HandlCoutEvent(type, Content0.id)}
                        </li>
                    </p>
                    <p id='Thang_CONTENT'>
                        <p >{Content0.Author}</p>
                        <h1 id='Thang_Content_Author'>{Content0.Title}</h1>
                        {HandlCoutContent(type, Content0.Location, Content0.Time)}                   </p>
                </div>
            ))}
        </div>

    </div>
    );
}
