import "./quote.css";

import quoteLeft from "../assets/images/quoteLeft.png";
import quoteRight from "../assets/images/quoteRight.png";

const Quote = ({ data }) => {
  console.log(data);
  return (
    <div
      className="quote"
      data-aos-duration="900"
      data-aos-delay="100"
      data-aos="fade-down"
    >
      <img
        data-aos="fade-down-right"
        data-aos-duration="1000"
        className="quote__icon--left"
        src={quoteLeft}
        alt="quote icon"
      />
      <p className="quote__text">
        {data ? data[0].quote : ""}
        <span className="quote__author">- {data ? data[0].author : ""}</span>
      </p>
      <img
        data-aos="fade-up-left"
        data-aos-duration="1000"
        className="quote__icon--right"
        src={quoteRight}
        alt="quote icon"
      />
    </div>
  );
};

export default Quote;
