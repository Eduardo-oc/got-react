import React from 'react'
import "./buttonBack.scss"

export default function ButtonBack() {


    return (
        <div className="box-back">
            <a className="back-page" href="javascript:history.back()"> Atrás </a>
        </div>
    )

}
