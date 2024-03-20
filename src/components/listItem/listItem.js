import React from "react";

import './listItem.css'

const ListItem = (props) =>{
    return(
        <li>
            <i className="fa-solid fa-check"></i>
            <p>{props.text}</p>
        </li>
    )
}

export default ListItem