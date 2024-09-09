import React, { useEffect } from 'react';
import profilepic from '../../assests/profile.jpeg';
import Typewriter from '../../components/Typewriter';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import Aboutus from '../../components/about/Aboutus';

function Home() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out-sine',
            delay: 10,
        });
    }, []);

    return (
        <div className="main">
            <div className="leftcontent" data-aos='fade-right'>
                <div className="heading">Hello, am</div>
                <div className="headingName">Usama Sarwar</div>
                <p className='leftfirstpara'>I am a
                    <span>
                        <Typewriter />
                    </span>
                </p>
                <Aboutus />
            </div>
            <div className="rightcontent" data-aos="fade-left">
                <img src={profilepic} alt="profile" />
            </div>
        </div>
    );
}

export default Home;
