import React from "react";
import ShowCardInfo from "./ShowCardInfo";

function card() {
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
            <p>ERIC SAMSON</p>
            <h1>BILLING ADDRESS</h1>
            <p>1882 Gerard Street</p>
            <p>San Fransisco, CA 94108</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
