import React from "react";

export default function home() {
    return(
        <div className="bodyContent home">
            <p className="homeContent"> Divetus is a hobbyist freelance artist that mostly draws images for twitch (badges, emotes, banners) and small illustrations. They occasionally dabble in UI/UX design work but these projects are only available to long-term clients.
            <br/><br/>
            Twitch emote commissions are typically indefinitely opened, but the status and speed of completion are based on their real-life schedule.
                <br/><br/>
                To inquire about any type of commission, use the social media links or the email button on the left navigation bar.
                To look at the work schedule and approximation of when your commission would be done, please take a look at the schedule.
                <br/><br/>
            </p>
            <p className="homeContentRed">Please read the <a className="homeTOS" href='tos'>Terms of Service</a> tab before sending a message.
            <br/><br/>
                I consider anyone who commissions art/designs from me through any platform (twitter, discord, email) to have read and agree with these terms.</p>
        </div>
    )
}
