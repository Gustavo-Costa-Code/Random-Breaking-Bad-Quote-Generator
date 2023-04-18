import "./generate.css";

const Generate = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="button">
      Generate
    </button>
  );
};

export default Generate;
