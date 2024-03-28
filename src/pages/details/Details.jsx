import "./Details.css";

const Details = () => {
  return (
    <div>
      <div className="details-container">
        <img className="img-detail" src="./test.png" />
        <div className="details-info">
          <div className="top">
            <div className="code">#00</div>
            <div className="title-detail">Roupa</div>
          </div>
          <div className="bottom">
            <div className="size">M</div>
            <div className="price">5€</div>
            <div className="desc">Bla blablabla</div>
            <div className="buttonDetails-container">
              <button>Contactar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
