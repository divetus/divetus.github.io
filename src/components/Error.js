import React from "react";
import Unavailable from "../assets/Unavailable.png";

export default function Error() {
    return(
        <div className={'bodyContent errorContent'}>
            <img style={{marginLeft: '25rem', marginTop: '5rem'}}src={Unavailable} alt={'unavailable'}/>
        </div>
    )
}
