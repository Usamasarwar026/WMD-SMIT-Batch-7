import React from 'react'
import { IonIcon } from '@ionic/react';
import { logoDiscord, logoTwitter, logoFacebook } from 'ionicons/icons';

const contactdata = [
    {
        heading: "Let's Talk",
        text: "Do you want to learn more about how I can help your company overcome problems? Let us have a conversation."
    }
]

function Contactcards(props) {
  return (
    <>
      <div className="contact">

<h2 className="h2">{contactdata[0]?.heading}</h2>

<div className="wrapper">

    <p>
        {contactdata[0]?.text}
    </p>

    <ul className="social-link">

    <li>
        <a href="#" className="icon-box discord">
            <IonIcon icon={logoDiscord} />
        </a>
    </li>

    <li>
        <a href="#" className="icon-box twitter">
            <IonIcon icon={logoTwitter} />
        </a>
    </li>

    <li>
        <a href="#" className="icon-box facebook">
            <IonIcon icon={logoFacebook} />
        </a>
    </li>

</ul>

</div>

</div>
    </>

  )
}

export default Contactcards
