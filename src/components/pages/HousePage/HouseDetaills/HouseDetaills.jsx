import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./HouseDetails.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";
import ButtonBack from "../../../shared/utils/ButtonBack/ButtonBack";
import NavBar from "../../../shared/utils/NavBar/NavBar";
import { useTranslation } from "react-i18next";

export default function HouseDetaills() {
  const [houseName, setHouseName] = useState(useParams().name);

  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    axios
      .get(`https://api.got.show/api/show/houses/${houseName}`)
      .then((res) => {
        setHouseName(res.data);
      });
  }, []);

  console.log(houseName);
  return (
    <div className="conteiner-fluid">
      <div className="medium-box">
        <div>
          <ButtonBack />
          <NavBar />
        </div>
        <div className="d-flex flex-row justify-content-center text-center">
          <figure className="figure-detail col-6">
            <img className="img-detail" src={houseName[0].logoURL} alt=""></img>
            <figcaption className="figcaption-detail">
              {houseName[0].name}
            </figcaption>
          </figure>
        </div>

        <div className="row container">
          <div className="col-2 posicion">
            <h4>{t("houses.sigil")}</h4>
            <p className="p-detail">{houseName[0].sigil}</p>
          </div>

          <div className="col-2 posicion">
            <h4>{t("houses.seat")}</h4>
            <SimpleBar style={{ maxHeight: 200 }}>
              {houseName &&
                houseName[0].seat &&
                houseName[0].seat.map((item) => {
                  return <p className="p-detail">{item}</p>;
                })}
            </SimpleBar>
            {/* <p>{houseName[0].seat}</p>*/}
          </div>

          <div className="col-2 posicion">
            <h4>{t("houses.region")}</h4>
            <SimpleBar style={{ maxHeight: 200 }}>
              {houseName &&
                houseName[0].region &&
                houseName[0].region.map((item) => {
                  return <p className="p-detail">{item}</p>;
                })}
            </SimpleBar>

            {/* <p>{houseName[0].region}</p>*/}
          </div>

          <div className="col-2 posicion">
            <h4>{t("houses.allegiances")}</h4>
            <SimpleBar style={{ maxHeight: 200 }}>
              {houseName &&
                houseName[0].allegiance &&
                houseName[0].allegiance.map((item) => {
                  return <p className="p-detail">{item}</p>;
                })}
            </SimpleBar>
            {/*<p>{houseName[0].allegiance}</p>*/}
          </div>

          <div className="col-2 posicion">
            <h4>{t("houses.religion")} </h4>
            <SimpleBar style={{ maxHeight: 200 }}>
              {houseName &&
                houseName[0].religion &&
                houseName[0].religion.map((item) => {
                  return <p className="p-detail">{item}</p>;
                })}
            </SimpleBar>
          </div>

          <div className="col-2 posicion">
            <h4> {t("houses.foundation")}</h4>
            <p className="p-detail">{houseName[0].createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
