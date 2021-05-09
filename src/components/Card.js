import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowCardInfo from "./ShowCardInfo";
import axios from "axios";
import { CopyOutlined } from "@ant-design/icons";

function Card() {
  const [loading, setLoading] = useState(false);
  const [cardOverview, setCardOverview] = useState(null);
  const [cardOverviewError, setCardOverviewError] = useState(null);
  const [cardDetailsError, setCardDetailsError] = useState(null);
  const [cardDetails, setCardDetails] = useState(null);

  const getCardOverview = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://run.mocky.io/v3/570ab08a-61c0-4b75-a69d-c11494e660fd"
      );
      console.log(
        "Proper format ===>",
        JSON.parse(response.data.slice(0, response.data.length - 3) + "}")
      );

      setLoading(false);

      setCardOverview(
        // Data returned from this endpoiny is not in proper JSON format
        // Below transformation is necessary to convert the faulty
        // response to proper json format
        JSON.parse(response.data.slice(0, response.data.length - 3) + "}")
      );
    } catch (err) {
      setLoading(false);
      console.log(err);
      setCardOverviewError(err);
    }
  };

  const getCardDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://run.mocky.io/v3/d50e1b3b-017b-4f52-abc5-51fdde133048"
      );

      setLoading(false);
      setCardDetails(response.data);
    } catch (err) {
      setLoading(false);
      console.log(err);
      setCardDetailsError(err);
    }
  };

  const cardInfoHandler = () => {
    getCardDetails();
  };

  useEffect(() => {
    getCardOverview();
  }, []);

  const formatToCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="outerWrapper">
      <div className="header">
        <h1>Your Card</h1>
        <p>
          Use this card to pay for programs in your plan. Purchases will be
          visible by your manager. Is your balance too low?{" "}
          <span className="header__prompt">Add additional funds.</span>
        </p>
      </div>

      <div className="left-side"></div>

      <div className="main">
        <div className="card ">
          <div>
            <h1 className="card__title">REMAINING BALANCE</h1>

            <div className="card__row">
              <div className="card__col card__balance">
                {cardOverview &&
                  formatToCurrency
                    .format(cardOverview.remainingBalance)
                    .replace(/^0+(?!\.)|(?:\.|(\..*?))0+$/gm, "$1")}
              </div>

              <div className="card__col card__chip">
                <img
                  src="https://pngimage.net/wp-content/uploads/2018/05/credit-card-chip-png-9.png"
                  alt="chip"
                />
              </div>
            </div>
            <div className="card__row card__number">
              <div className="card__col">
                <input
                  size="16"
                  disabled
                  type="text"
                  className="card__input card__input--large"
                  id="cardNumber"
                  placeholder="**** ***** **** 1234"
                  value={
                    cardDetails &&
                    cardDetails.cardNumber
                      .replace(/(\d{4})/g, "$1 ")
                      .replace(/(^\s+|\s+$)/, "")
                  }
                />
              </div>

              {cardDetails && (
                <CopyOutlined
                  onClick={() => {
                    navigator.clipboard.writeText(
                      cardDetails && cardDetails.cardNumber
                    );
                  }}
                  style={{
                    fontSize: "150%",
                    color: "white",
                  }}
                />
              )}
            </div>
            <div className="card__row">
              {!cardDetails ? (
                <div className="card__col">
                  <ShowCardInfo cardInfoHandler={cardInfoHandler} />
                </div>
              ) : (
                <>
                  <div className="card__col reveal">
                    <label for="cardCcv" className="card__label">
                      CVC
                    </label>
                    <input
                      disabled
                      type="text"
                      className="card__input"
                      id="cardCcv"
                      placeholder="xxx"
                      value={cardDetails && cardDetails.cvc}
                    />
                  </div>
                  <div className="card__col reveal">
                    <label for="cardExpiry" className="card__label">
                      EXP
                    </label>
                    <input
                      disabled
                      type="text"
                      className="card__input"
                      id="cardExpiry"
                      placeholder="xx/xx"
                      value={cardDetails && cardDetails.expiration}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="right-side">
        <h1>CARD HOLDER</h1>
        {!loading && cardOverview ? (
          <p>{cardOverview.cardHolder}</p>
        ) : (
          <img
            src="loader.gif"
            alt="loader image"
            width="100px"
            height="100px"
          />
        )}
        <h1>BILLING ADDRESS</h1>
        {!loading && cardOverview ? (
          <>
            <p>{cardOverview.billingAddress}</p>
            <p>
              {cardOverview.billingCity}, {cardOverview.billingState}{" "}
              {cardOverview.billingPostalCode}
            </p>
          </>
        ) : (
          <img
            src="loader.gif"
            alt="loader image"
            width="100px"
            height="100px"
          />
        )}
      </div>
      <div className="after-right-side"></div>
      <div className=" footer">
        <p className=" footer__text">
          Program does not accept cards? We can help.{" "}
          <span>
            <a
              className="footer__prompt"
              href="https://www.learnin.com/company/contact-us"
            >
              Contact us.
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
