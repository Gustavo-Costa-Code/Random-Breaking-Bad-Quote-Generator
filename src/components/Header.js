import "./header.css";

import image from "../assets/images/header.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__image" src={image} alt="Walter White Face" />
      <h1 className="header__title">Random Quote Generator</h1>
    </header>
  );
};

export default Header;
