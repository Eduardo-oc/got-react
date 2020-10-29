import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";
import ButtonBack from "../../../shared/utils/ButtonBack/ButtonBack";
import "./CharacterDetaills.scss";
import NavBar from "../../../shared/utils/NavBar/NavBar";
import Footer from "../../../shared/utils/Footer/Footer";
import { useTranslation } from "react-i18next";

export default function CharacterDetaills() {
  const [character, setCharacter] = useState([]);
  const [house, setHouse] = useState([]);
  const param = useParams().character;

   const { t, i18n } = useTranslation("global");

  useEffect(() => {
    axios
      .get(`https://api.got.show/api/show/characters/${param}`)
      .then((res) => {
        setCharacter(res.data);
        axios
          .get(`https://api.got.show/api/show/houses/${res.data.house}`)
          .then((res) => {
            setHouse(res.data[0]);
          });
      });
  }, []);

  console.log(house);

  return (
    <div className="container-fluid">
      <div className="medium-box">
        <div>
          <ButtonBack />
          <NavBar />
        </div>
        <div className="d-flex flex-row justify-content-center text-center">
          <figure className="figure-detail col-6">
            <img className="img-detail" src={character.image} alt={character.name} />
            <figcaption className="figcaption-detail">{character.name}</figcaption>
          </figure>
        </div>

        <div className="row">
          <div className="col-2">
            <h5>{t("details.house")}</h5>
            <SimpleBar style={{ height: 220, overflowX: "hidden" }}>
              <figure className="img-shield">
                <img
                  className="img-detail"
                  src={house ? house.logoURL : ""}
                  alt={house ? house.name : ""}
                />
                <p className="p-detail">{character.house}</p>
              </figure>
            </SimpleBar>
          </div>

          <div className="col-2">
            <h5>{t("details.allegiances")}</h5>
            <SimpleBar style={{ maxHeight: 200 }}>
              {character &&
                character.allegiances &&
                character.allegiances.map((item) => {
                  return <p className="p-detail">{item}</p>;
                })}
            </SimpleBar>
          </div>
          <div className="col-2">
            <h5>{t("details.appearances")}</h5>
            <SimpleBar style={{ maxHeight: 200 }}>
              {character &&
                character.appearances &&
                character.appearances.map((item) => {
                  return <p className="p-detail">{item}</p>;
                })}
            </SimpleBar>
          </div>
          <div className="col-2">
            <h5>{t("details.father")}</h5>
            <SimpleBar style={{ maxHeight: 200 }}>
              <p className="p-detail">{character.father}</p>
            </SimpleBar>
          </div>
          <div className="col-2">
            <h5>{t("details.siblings")}</h5>
            <SimpleBar style={{ maxHeight: 200 }}>
              {character &&
                character.siblings &&
                character.siblings.map((item) => {
                  return <p className="p-detail">{item}</p>;
                })}
            </SimpleBar>
          </div>
          <div className="col-2">
            <h5>{t("details.titles")}</h5>
            <SimpleBar style={{ maxHeight: 200 }}>
              {character &&
                character.titles &&
                character.titles.map((item) => {
                  return <p className="p-detail">{item}</p>;
                })}
            </SimpleBar>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
