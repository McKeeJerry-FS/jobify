import { Link } from "react-router-dom";


const About = () => {
    return (
        <div class="container-fluid">
            <header>
                <h2 class="display-1">About the App...</h2>
            </header>
            <div>
                <Link to='/dashboard'>Return Home</Link>
            </div>
        </div>
    )
}

export default About;