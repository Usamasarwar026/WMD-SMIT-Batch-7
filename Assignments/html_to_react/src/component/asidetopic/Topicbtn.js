import React from 'react'
import { IonIcon } from '@ionic/react';
function Topic(props) {
    return (
        <>
                <a href="#" className="topic-btn">
                    <div className="icon-box">
                        <IonIcon icon={props.icon} />
                    </div>

                    <p>{props.title}</p>
                </a>

        </>
    )
}

export default Topic
