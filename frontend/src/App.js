import React, { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("Loading...");

  useEffect(() => {
    fetch("/api/username")
      .then((response) => response.json())
      .then((data) => setUsername(data.username))
      .catch((error) => setUsername("Error fetching username"));
  }, []);

  return <h1>Hello Docker with {username}!</h1>;
}

export default App;
