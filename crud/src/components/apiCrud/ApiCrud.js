import React, { useEffect, useState } from "react";
import Home from "../home/Home";

function ApiCrud() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((response) => response.json())
      .then((json) => {
        // console.log("json :>> ", json);
        setUser(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Home user={user} setUser={setUser} />
    </div>
  );
}

export default ApiCrud;
