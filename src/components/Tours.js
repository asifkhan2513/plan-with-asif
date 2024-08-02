import Card from "./Card";
function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <p class="stroke">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="700"
            height="72"
            viewBox="0 0 700 72"
          >
            <text x="0" y="70">
              Plan with Asif
            </text>
          </svg>
        </p>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
