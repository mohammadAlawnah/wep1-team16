import React from 'react'
import './VideoCall.css'

function VideoCall() {
return (
<section className="videoCall">
    <div className="text-container">
        <h1>Video call</h1>
        <div>
            <i className="fa-solid fa-video"></i>
            <span>
                <b>Meet creators</b>
                <pre>
                    In no impression assistance contrasted Manners
                    she wishing justice hastily.
                </pre>
            </span>
        </div>

        <div>
            <i className="far fa-thumbs-up"></i>
            <span>
                <b>Support artists</b>
                <pre>
                    Handsome met debating sir dwelling age material.
                    As style lived he worse dried.
                </pre>
            </span>
        </div>
        </div>

        <div className="img-container">
            <img className=" circular-image" src={"./img/landingPageImg/02.jpg"} alt="circular image" />
            <img className=" rounded-image" src={"./img/landingPageImg/phone.png"} alt="rounded image" />
        </div>
</section>

)
}

export default VideoCall
