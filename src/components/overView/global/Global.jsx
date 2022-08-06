import "./Global.css";
import Card from "../card/Card";

function Global({ data }) {
  // use array to render many cards
  const cards = [
    { id: 1, title: "Total Cases", label: "TotalConfirmed", type: "cases" },
    {
      id: 2,
      title: "Total Recoverd",
      label: "TotalRecovered",
      type: "recoverd",
    },
    { id: 3, title: "Total Deaths", label: "TotalDeaths", type: "deaths" },
    { id: 4, title: "New Cases", label: "NewConfirmed", type: "cases" },
    { id: 5, title: "New Recoverd", label: "NewRecovered", type: "recoverd" },
    { id: 6, title: "New Deaths", label: "NewDeaths", type: "deaths" },
  ];
  return (
    <div className="global-data-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          number={data[card.label]?.toLocaleString()}
          type={card.type}
        />
      ))}
    </div>
  );
}

export default Global;
