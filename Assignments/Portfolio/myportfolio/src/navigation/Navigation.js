import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navheader from "../components/navheader/Navheader"
import Home from "../pages/home/Home"
import Skills from '../pages/skills/Skills'
import Project from '../pages/project/Project'
import Contact from '../pages/contact/Contact'
import './navigation.css'
import Footer from "../components/footer/Footer"


function Navigation() {
    return (
        <BrowserRouter>
            <div className="navigater">
                <Navheader />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Skills" element={<Skills />} />
                        <Route path="/Project" element={<Project />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="*" element={<Navigate to='/' />} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default Navigation