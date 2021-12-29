import React from "react";

const SingleUser=(user)=>{
    return (
        <div user={user}></div> 
    )
}
const SmallCard = (props) => {
   
    const User = props.sUser;

    const fullName = Object.values(User.name).join(" ");
  
};

export default SmallCard;
export {SingleUser};
