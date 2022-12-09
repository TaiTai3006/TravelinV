import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

const Goto = () =>{
// const gotoDatas = [
//     {
//         id:1,
//         data: "Digital Normal",
//     },
//     {
//         id:2,
//         data: "Social Media",
//     },
//     {
//         id:3,
//         data: "Fech",
//     },
//     {
//         id:4,
//         data: "Lifestyle",
//     },
//     {
//         id:5,
//         data: "Clound",
//     },
//     {
//         id:6,
//         data:"Love anh Thunder"
//     }

// ]
    const [gotoDatas, setgotoDatas] = useState([{}])
    useEffect(()=>{
        const FecthDatas= async ()=>{
            try{
                await axios.get(`http://localhost:8800/SliderBlogs/Goto`).then((response) =>{
                    setgotoDatas(response.data)
                    console.log(response.data)
                })
            } catch (err) {
                console.log(err)
            }
        };
        FecthDatas();
    },[])
    return(
      <>
      <div className='goto-li-ctn'>
            {gotoDatas.map((gotoData, index)=>
                    <li className="goto-li">
                    <a className="goto-a" href={gotoData.data}>{gotoData.data}</a>
                    </li>
            )}
        </div>

        <div className="goto-li-ctn">
          {gotoDatas.map((gotoData, index) => (
            <li className="goto-li">
              <a className="goto-a" href={gotoData.data}>
                {gotoData.data}
              </a>
            </li>
          ))}
        </div>
      
        
    </>
  );
};
export default Goto;
