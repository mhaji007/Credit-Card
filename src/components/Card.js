import React, { useEffect, useState } from "react";
import ShowCardInfo from "./ShowCardInfo";
import axios from "axios";

function Card() {
  const [loading, setLoading] = useState(false);
  const [cardOverview, setCardOverview] = useState(null);
  const [cardOverviewError, setCardOverviewError] = useState(null)

  const getCardOverview = async() => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://run.mocky.io/v3/570ab08a-61c0-4b75-a69d-c11494e660fd"
      );
      console.log("Response from axios ===>", response.data.cardOverview)
      setLoading(false);
      setCardOverview(response.data);
      // console.log("response after setting cardOverview ===>", cardOverview);
    } catch (err) {
      setLoading(false);
      console.log(err);
      setCardOverviewError(err)
    }
      // axios.get(
      //   "https://run.mocky.io/v3/570ab08a-61c0-4b75-a69d-c11494e660fd"
      // ).then((response) =>setCardOverview(response.data));

    // console.log("response after setting cardOverview ===>", cardOverview);

  };


  useEffect(() => {
    // fetch("https://run.mocky.io/v3/570ab08a-61c0-4b75-a69d-c11494e660fd")
    //   .then((res) => res.json())
    //   .then((data) => setCardOverview(data));
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        "https://run.mocky.io/v3/570ab08a-61c0-4b75-a69d-c11494e660fd"
      );
          console.log("Response from axios ===>", result.data);
      setLoading(false);
      setCardOverview(result.data);
    };

    fetchData();
    //  getCardOverview()

  }, []);

  return (
    <div className="outerWrapper">
      <div className="innerWrapper">
        <div className="container__row">
          <div className="container__col container__card">
            <div className="card">
              <form>
                <h1 className="card__title">REMAINING BALANCE</h1>

                <div className="card__row">
                  <div className="card__col card__balance">$2,950</div>
                  {/* <div className="card__balance">
            $2,950
          </div> */}

                  <div className="card__col card__chip">
                    {/* <img src="img/chip.png" alt="chip" /> */}
                    <img
                      src="https://pngimage.net/wp-content/uploads/2018/05/credit-card-chip-png-9.png"
                      alt="chip"
                    />
                  </div>
                </div>
                <div className="card__row">
                  <div className="card__col">
                    <input
                      type="text"
                      className="card__input card__input--large"
                      id="cardNumber"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                    />
                  </div>
                </div>
                <div className="card__row">
                  <div className="card__col">
                    <ShowCardInfo />
                    {/* <label for="cardCcv" className="card__label">
                  CVC
                  </label>
                  <input
                  type="text"
                  className="card__input"
                  id="cardCcv"
                  placeholder="xxx"
                  />
                  </div>
                  <div className="card__col">
                  <label for="cardExpiry" className="card__label">
                  EXP
                  </label>
                  <input
                  type="text"
                  className="card__input"
                  id="cardExpiry"
                  placeholder="xx/xx"
                /> */}
                  </div>
                  {/* <div className="card__col card__brand">
                <i id="cardBrand"></i>
              </div> */}
                </div>
              </form>
            </div>
          </div>
          <div className="container__col desc">
            <h1>CARD HOLDER</h1>
           {(!loading&&cardOverview)?cardOverview:"Loading..."}
            <h1>BILLING ADDRESS</h1>
            <p>1882 Gerard Street</p>
            <p>San Fransisco, CA 94108</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
