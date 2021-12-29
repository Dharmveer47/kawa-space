import React from "react";
import "../App.css";

const MainCard = (sUser) => {
  const singleUser = sUser.sUser;
  if (singleUser.length === 0) {
    return <div> </div>;

  } else {
    const fullName = Object.values(singleUser.name).join(" ");
    const street = Object.values(singleUser.location.street).join(" ");
    const location = singleUser.location;
    return (
      <div className="mainCard">
        <div>
          <div>
            <img src={singleUser.picture.large} alt="userImg" />
          </div>
          <div>
            <h2>
              I'm <span>{fullName}</span>
            </h2>
            <div> Address :{` ${street} ${location.city} ${location.state} ${location.postcode} ${location.country} `}</div>
            <div> Email : {singleUser.email}</div>
            <div>Gender: {singleUser.gender}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainCard;
