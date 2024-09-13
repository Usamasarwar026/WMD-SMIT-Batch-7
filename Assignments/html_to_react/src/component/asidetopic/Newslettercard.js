import React from 'react'
import Button from '../button/Button'

const newsletterdata = [
    {
        heading: "Newsletter",
        text: "Subscribe to our newsletter to be among the first to keep up with the latest updates."
    }
]

function Newslettercard() {
    return (
        <>
            <div className="newsletter">

                <h2 className="h2">{newsletterdata[0]?.heading}</h2>

                <div className="wrapper">

                    <p>
                        {newsletterdata[0]?.text}
                    </p>

                    <form action="#">
                        <input type="email" name="email" placeholder="Email Address" required />

                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>

                </div>

            </div>
        </>
    )
}

export default Newslettercard
