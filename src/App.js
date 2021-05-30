import React, { useState, useEffect } from "react";
import "./App.css";

// https://api.github.com/users/pambwillenz

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, [login]);

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
  return <div>No User Available</div>;
}

export default App;
