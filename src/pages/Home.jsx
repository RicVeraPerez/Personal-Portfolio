import { useNavigate } from "react-router-dom";
import ConsoleLayout from "../components/ConsoleLayout";
import { useUser } from "../components/UserContext";
import "../styles/ConsoleLayout.css";
import "../styles/Home.css";
import { FaUser, FaEnvelope, FaProjectDiagram, FaQuestionCircle } from "react-icons/fa";

const Home = () => {
    const { username } = useUser();
    const navigate = useNavigate();

    return (
        <ConsoleLayout title="Home">
            <div className="HomeGridWrapper">
                <div className="Header">
                    <h1>
                        Welcome {username}, <span>I'm Ricardo</span>
                    </h1>
                    <p>This is my personal portfolio! :D</p>
                    <p>Here you'll get to know me, my projects, and much more!</p>
                    <p>Also I'll be updating this page with every new project, so follow my socials.</p>
                    <p>Thanks for visiting!</p>
                </div>
                <div className="ButtonWrapper">
                    <button
                        className="LinkButton"
                        onClick={() => navigate("/AboutMe")}
                    >
                        <FaUser className="Icon" /><br />
                        About Me
                    </button>
                    <button
                        className="LinkButton"
                        onClick={() => navigate("/Contacts")}
                    >
                        <FaEnvelope className="Icon" /><br />
                        Contacts
                    </button>
                    <button
                        className="LinkButton"
                        onClick={() => navigate("/Projects")}
                    >
                        <FaProjectDiagram className="Icon" /><br />
                        Projects
                    </button>
                    <button
                        className="LinkButton"
                        onClick={() => navigate("/FAQ")}
                    >
                        <FaQuestionCircle className="Icon" /><br />
                        FAQ
                    </button>
                </div>
            </div>
        </ConsoleLayout>
    );
};

export default Home;
