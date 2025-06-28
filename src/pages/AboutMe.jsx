import ConsoleLayout from "../components/ConsoleLayout";
import "../styles/ConsoleLayout.css";
import "../styles/AboutMe.css";

const AboutMe = () => {
    return (
        <ConsoleLayout title={"About"}>
            <h1 id="about-me-header">About Me</h1>
            <div className="about-me-content">
                <div className = "about-me-text">
                    <p>
                        Hello! I'm Ricardo Vera, a passionate self taught web developer with a keen interest in creating dynamic and responsive web applications.</p>
                    <p>
                        Full-Stack Developer knowledge, using React, CSS, and Javascript for the Front-end side and SQL, Express and Node.js for the Back-end side. 
                    </p>
                    <p>
                        My coding career started in high school where i participated in a Javascript Bootcamp campaign, from that point i went on to learn new languages and technologies.
                    </p>
                </div>
                <div className="about-me-Education">
                    <h2>Education</h2>
                    <ul>
                        <li>Self-taught Web Development</li>
                        <li>Online Courses in JavaScript, React, and Node.js</li>
                        <li>Ongoing Learning in Web Technologies</li>
                    </ul>
                </div>
                <div className="about-me-skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js & Express</li>
                        <li>HTML & CSS</li>
                        <li>Git & GitHub</li>
                    </ul>
                </div>
                <div className="about-me-interests">
                    <h2>Other Interests</h2>
                    <ul>
                        <li>Music - I love learning to play new instruments!</li>
                        <li>Game Dev - Really interested in the game dev industry.</li>
                        <li>Reading - A good book can change your whole life.</li>
                        <li></li>
                        <li>Gaming and Technology</li>
                    </ul>
                </div>
                <div className="about-me-languages">
                    <h2>Languages</h2>
                    <ul>
                        <li>English - Fluent</li>
                        <li>Spanish - Native</li>
                        <li>Portuguese - Basic</li>
                    </ul>
                </div>
            </div>
        </ConsoleLayout>
    );
}

export default AboutMe;