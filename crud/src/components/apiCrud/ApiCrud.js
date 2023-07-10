import React, { useEffect, useState } from "react";
import Home from "../home/Home";

function ApiCrud() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
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