import React from "react";
import { useTranslation } from "react-i18next";
import "./buttonBack.scss";

export default function ButtonBack() {
  const { t, i18n } = useTranslation("global");

  return (
    <div className="box-back">
      <a className="back-page" href="javascript:history.back()">
        {" "}
        {t("button.back")}{" "}
      </a>
    </div>
  );
}
