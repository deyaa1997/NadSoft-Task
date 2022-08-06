import "./Card.css";

function Card({ title, number, type }) {
  return (
    <div className="card">
      <div className="card-content">
        <h4 style={{ fontWeight: "500" }}>{title}</h4>
        <p className={"" + type}>{number}</p>
      </div>
    </div>
  );
}

export default Card;
