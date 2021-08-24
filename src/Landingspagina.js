import React, { useState } from "react";
import firebase from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Link } from "react-router-dom";
import "./Landingspagina.css";
import Bedankt from "./Bedankt";
import emailjs from "emailjs-com";

function Landingspagina() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [persons, setPersons] = useState(0);
  const [form, setForm] = useState(0);

  const ref = firebase.firestore().collection("aanmeldingen");

  function addAanmelding(newAanmelding) {
    ref
      //.doc() use if for some reason you want that firestore generates the id
      .doc(newAanmelding.id)
      .set(newAanmelding)
      .catch((err) => {
        console.error(err);
      });
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_530r333",
        "template_niduuvn",
        e.target,
        "user_Ck1SXvq6GbqEAhuObl8dj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setForm(1);
  }

  return (
    <div className="landingspagina">
      <div className="logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Flogo.svg?alt=media&token=a09b2ac6-b418-472e-b9ec-6137e3466112"
          alt="logo"
        />
      </div>
      <div className="flex">
        <div
          className={
            form == 0 ? "aanmeldingsformulier" : "aanmeldingsformulier hidden"
          }
        >
          <form onSubmit={sendEmail}>
            <h1>Kom jij naar onze lancering? </h1>
            <div className="flex center">
              <div className="leftSide">
                <p className="inputTitle">Naam</p>
                <input
                  type="text"
                  className="nameField"
                  placeholder="naam"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <p className="inputTitle">E-mailadres</p>
                <input
                  type="text"
                  className="emailField"
                  placeholder="naam@email.com"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="vl"></div>
              <div className="rightSide">
                <p className="inputTitle">Welke dag kom je?</p>
                <div className="flex">
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="date"
                        value="2-10-2021"
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />{" "}
                      2-10-2021
                      <span></span>
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="date"
                        value="3-10-2021"
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />{" "}
                      3-10-2021
                      <span></span>
                    </label>
                  </div>
                </div>
                <p className="inputTitle">Om hoelaat zou je willen komen?</p>
                <select
                  id="hour"
                  name="hour"
                  className={date == "3-10-2021" ? "hidden" : ""}
                  onChange={(e) => setHour(e.target.value)}
                >
                  <option value="11u - 14u">11u - 14u</option>
                  <option value="11u - 14u">16u - 19u</option>
                </select>
                <select
                  id="hour"
                  className={date == "3-10-2021" ? "" : "hidden"}
                  onChange={(e) => setHour(e.target.value)}
                >
                  <option value="11u - 14u">11u - 14u</option>
                </select>
                <p className="inputTitle">Met hoeveel personen kom je langs?</p>
                <select
                  id="people"
                  name="persons"
                  onChange={(e) => setPersons(Number(e.target.value))}
                  required
                >
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
            <Link to="./bedankt">
              <input
                type="submit"
                value="Bevestigen"
                onClick={() =>
                  addAanmelding({
                    name,
                    email,
                    date,
                    hour,
                    persons,
                    id: uuidv4(),
                  })
                }
              />
            </Link>
          </form>
        </div>
        <div className="verwachtingen">
          <h2>Wat kan je verwachten?</h2>
          <p className="verwachting">
            Ultimi Vineti nodigt u graag uit op de lancering van de wijnwebshop
            en wijndegustatie. U heeft de keuze om langs te komen op 2-10-21 of
            op 3-10-21. De degustatie zal doorgaan in de zaal De Kring in
            Lembeek. <br></br>
            Te vinden op <strong>Stevens-de Waelplein 14, 1502 Lembeek</strong>.
            <br />
            <br />
            De inkom betreft €20 waarbij u 14 wijnen zal kunnen degusteren en
            waar er na afloop nog een kaas- en charcuterieplankje kan genuttigd
            worden.
          </p>
        </div>
      </div>
      <div className={form == 1 ? "bedankt" : "bedankt hidden"}>
        <Bedankt></Bedankt>
      </div>
    </div>
  );
}

export default Landingspagina;
