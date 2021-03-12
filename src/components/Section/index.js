import React from 'react'
import "./index.scss"
import newReleases from "../../img/newReleases.jpeg"

const Section = () => {
    return (
        <div>
            <section className="section">
                <img className="releases" src={newReleases} alt="NEW RELEASES"/>

            </section>
        </div>
    )
}

export default Section
