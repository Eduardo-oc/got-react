import React from 'react'
import { Link, Router } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {

    const { t, i18n } = useTranslation("global");



    return (
        <footer >

            <ul >
                <li className="ul-footer"><Link className="link-footer" to="/CharacterPage">{t("footer.characters")}</Link></li>
                <li className="li-margin ul-footer"><Link className="link-footer" to="/HousePage">{t("footer.house")}</Link></li>
                <li className="li-margin ul-footer"><Link className="link-footer" to="/ChronoPage">{t("footer.chronology")}</Link></li>
            </ul>

        </footer>
    )
}