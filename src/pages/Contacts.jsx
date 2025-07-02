import ConsoleLayout from "../components/ConsoleLayout";
import "../styles/ConsoleLayout.css";
import "../styles/Contacts.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";

const Contacts = () => {
    return (
        <ConsoleLayout title={"Contacts"}>
            <div className="contacts-container">
                <div className="contacts-header">
                    <h1>Contact Me</h1>
                    <p>I do not have commission opens yet!</p>
                    <p>But if you want to get in touch!</p>
                    <p>feel free to reach out via:</p>
                </div>
                <div className="contact-links">
                    <a className="contact-item"
                        href="https://www.linkedin.com/in/ricardo-vera-perez-234376344/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="LinkButton">
                            <FaLinkedin className="Icon" />
                            Linkedin
                        </button>
                    </a>
                    <a className="contact-item"
                        href="https://www.instagram.com/faceless._eyes_/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="LinkButton">
                            <FaInstagram className="Icon" />
                            Instagram
                        </button>
                    </a>
                    <a className="contact-item"
                        href="https://github.com/RicVeraPerez"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="LinkButton">
                            <FaGithub className="Icon" />
                            Github
                        </button>
                    </a>
                    <a  className="contact-item"
                        href="mailto:ricveraperez@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="LinkButton">
                            <MdEmail className="Icon" />
                            Email
                        </button>
                    </a>
                </div>
            </div>
        </ConsoleLayout>
    );
};

export default Contacts;