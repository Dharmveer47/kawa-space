import React, { useEffect, useState } from "react";
import "./App.css";
import MainCard from "./Components/MainCard";

const App = () => {
  const [UserShow, setUserShow] = useState([]);
  const [singleUser, setSingleUser] = useState([]);
  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
    )
      .then((res) => res.json())
      .then((result) => setUserShow(result.results));
  }, []);
 
  return (
    <>
      <MainCard sUser={singleUser}/>

      <div className="App">
        {UserShow.map((sUser) => {
           const fullName = Object.values(sUser.name).join(" ");
          return (
            <button onClick={()=> setSingleUser(sUser)} key={sUser.email} >
              <div>
                Name : <span>{fullName}</span>
              </div>
              <div>
                Email : <span>{sUser.email}</span>
              </div>
              <div>
                Gender : <span>{sUser.gender}</span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default App;
