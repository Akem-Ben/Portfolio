import Banner from "../Components/Banner/Banner"
import Contact from "../Components/Contact/Contact"
import Navigation from "../Components/Navbar/Navbar"
import Projects from "../Components/Projects/Projects"
import Skills from "../Components/Skills/Skills"


const LandingPage = () => {

    return (
        <>
        <Navigation />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        </>
    )
}

export default LandingPage