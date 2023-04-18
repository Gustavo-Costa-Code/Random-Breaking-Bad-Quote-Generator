import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

import Header from "./components/Header";
import Quote from "./components/Quote";
import Generate from "./components/Generate";

function App() {
  {
    AOS.init();
  }
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => fetchData(), []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="App">
      <Header />
      <Quote data={data} />
      <Generate handleClick={handleClick} />
    </div>
  );
}

export default App;
