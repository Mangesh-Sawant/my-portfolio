import './App.css'
import Header from './component/Header/Header.jsx'
import About from "./component/About/About.jsx";
import Project from "./component/Project/Project.jsx";
import Skill from "./component/Skill/Skill.jsx";
import Tools from "./component/Tools/Tools.jsx";

function App() {

    return (
        <>
            <Header/>
            <About/>
            <Skill/>
            <Tools/>
            <Project/>
        </>
    )
}

export default App
