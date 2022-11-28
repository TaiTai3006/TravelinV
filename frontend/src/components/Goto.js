import React from "react";
const Goto = () =>{
const gotoDatas = [
    {
        id:1,
        data: "Digital Normal",
    },
    {
        id:2,
        data: "Social Media",
    },
    {
        id:3,
        data: "Fech",
    },
    {
        id:4,
        data: "Lifestyle",
    },
    {
        id:5,
        data: "Clound",
    },
    {
        id:6,
        data:"Love anh Thunder"
    }

]
    return(
        <div className='goto-li-ctn'>
            {gotoDatas.map((gotoData, index)=>
                    <li className="goto-li">
                    <a className="goto-a" href={gotoData.data}>{gotoData.data}</a>
                    </li>
            )}
        </div>
    )
}
export default Goto