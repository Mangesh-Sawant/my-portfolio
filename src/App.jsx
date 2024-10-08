import './App.css'
import Header from './component/Header/Header.jsx'
import About from "./component/About/About.jsx";
import Project from "./component/Project/Project.jsx";
import Skill from "./component/Skill/Skill.jsx";
import Tools from "./component/Tools/Tools.jsx";
import ContactMe from "./component/ContactMe/ContactMe.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Hero from "./component/Hero/Hero.jsx";
import CustomCursorComponent from "./library/CustomCursor/CustomCursorComponent.jsx";

function App() {

    return (
        <>
            <CustomCursorComponent/>
            <Header/>
            <Hero/>
            <About/>
            <Skill/>
            <Project/>
            <Tools/>
            <ContactMe/>
            <Footer/>
        </>
    )
}

export default App
