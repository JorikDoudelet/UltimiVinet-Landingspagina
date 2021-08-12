import React from "react";
import "./Landingspagina.css";

function Landingspagina() {
  return (
    <div className="landingspagina">
      <div className="logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Flogo.svg?alt=media&token=a09b2ac6-b418-472e-b9ec-6137e3466112"
          alt="logo"
        />
      </div>
      <div className="aanmeldingsformulier">
        <h1>Kom jij naar onze openeningsdag? </h1>
        <div className="flex center">
          <div className="leftSide">
            <p className="inputTitle">Naam</p>
            <input type="text" className="nameField" placeholder="naam" />
            <p className="inputTitle">E-mailadres</p>
            <input
              type="text"
              className="emailField"
              placeholder="naam@email.com"
            />
          </div>
          <div class="vl"></div>
          <div className="rightSide">
            <p className="inputTitle">Welke dag kom je?</p>
            <div className="flex">
              <div class="radio">
                <label>
                  <input type="radio" name="visitDate" value="10-10-2021" />{" "}
                  10-10-2021
                  <span></span>
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="visitDate" value="11-10-2021" />{" "}
                  11-10-2021
                  <span></span>
                </label>
              </div>
            </div>
            <p className="inputTitle">Met hoeveel personen kom je langs?</p>
            <select id="people" name="peoples">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
        <div className="button">
          <button>Bevestigen</button>
        </div>
      </div>
    </div>
  );
}

export default Landingspagina;
