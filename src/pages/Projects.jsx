import { useNavigate } from "react-router-dom";
import ConsoleLayout from "../components/ConsoleLayout"
import CaesarCipherImage from "../assets/Caesar Cipher Translator.jpeg"
import TriviaGameImage from "../assets/Trivia Game.jpeg"
import GuessingGameImage from "../assets/Guessing Game.jpeg"
import UnitConverterImage from "../assets/Unit Converter.jpeg"
import WordleCloneImage from "../assets/Wordle Clone.jpeg"
import "../styles/ConsoleLayout.css";
import "../styles/Projects.css";



const Projects = () => {
    const navigate = useNavigate();

    return (
        <ConsoleLayout title="Projects">
            <div className="projects-container">
                <h1 id="projects-header">My projects!</h1>

                <div className="project-card">
                    <img
                        src={CaesarCipherImage}
                        alt="Caesar Cipher Translator"
                        className="project-image"
                    />
                    <div className="project-info">
                        <h3>Caesar Cipher Translator</h3>
                        <p>
                            This project is a web application built with React that allows users to encrypt text using the Caesar Cipher, a classical encryption technique.
                            <br />
                            Users can input plain text and select a shift value (between 1 and 25).
                            <br />
                            The app automatically calculates and displays the encrypted version of the text in real time.
                            <br />
                            You can check the code <a href="https://github.com/RicVeraPerez/Caesar-Cipher-Translator.git" target="_blank">here!</a>
                        </p>
                        <a className="project-btn" href="https://ricveraperez.github.io/Caesar-Cipher-Translator/" target="_blank" rel="noopener noreferrer">Try it!</a>
                    </div>
                </div>

                <div className="project-card">
                    <img
                        src={GuessingGameImage}
                        alt="Guess the Number Game"
                        className="project-image"
                    />
                    <div className="project-info">
                        <h3>Guess the Number</h3>
                        <p>
                            This game is a simple React-based guessing game where the user has to find a secret number between 1 and 100.
                            <br />
                            The app provides hints like "Too high" or "Too low" until the user finds the correct number.
                            <br />
                            Includes a reset option and number of attempts counter.
                            <br />
                            You can check the code <a href="https://github.com/RicVeraPerez/Guessing-Game" target="_blank">here!</a>
                        </p>
                        <a className="project-btn" href="https://ricveraperez.github.io/Guessing-Game/" target="_blank" rel="noopener noreferrer">Try it!</a>
                    </div>
                </div>

                <div className="project-card">
                    <img
                        src={TriviaGameImage}
                        alt="Trivia Game"
                        className="project-image"
                    />
                    <div className="project-info">
                        <h3>Trivia Game</h3>
                        <p>
                            This React app is a quiz about me! :D
                            <br />
                            It displays score, correct answers, and allows restarting the quiz.
                            <br />
                            Great to test general knowledge about objetcs and array manipulation
                            <br />
                            You can check the code <a href="https://github.com/RicVeraPerez/Trivia-Game" target="_blank">here!</a>
                        </p>
                        <a className="project-btn" href="https://ricveraperez.github.io/Trivia-Game/" target="_blank" rel="noopener noreferrer">Try it!</a>
                    </div>
                </div>

                <div className="project-card">
                    <img
                        src={UnitConverterImage}
                        alt="Unit Converter"
                        className="project-image"
                    />
                    <div className="project-info">
                        <h3>Unit Converter</h3>
                        <p>
                            A React app that allows users to convert miles to kilometers and viceversa.
                            <br />
                            Includes input validation and real-time conversion.
                            <br />
                            Good for practicing component state management and conditional rendering.
                            <br />
                            You can check the code <a href="https://github.com/RicVeraPerez/Unit-Converter" target="_blank">here!</a>
                        </p>
                        <a className="project-btn" href="https://ricveraperez.github.io/Unit-Converter/" target="_blank" rel="noopener noreferrer">Try it!</a>
                    </div>
                </div>

                <div className="project-card">
                    <img
                        src={WordleCloneImage}
                        alt="Wordle Clone"
                        className="project-image"
                    />
                    <div className="project-info">
                        <h3>Wordle Clone</h3>
                        <p>
                            A clone of the popular Wordle game built in React. Guess the 5-letter word in 6 tries!
                            <br />
                            Features keyboard interaction, color-coded feedback, and game restart logic.
                            <br />
                            Styled to mimic the original game and improve React skills with state logic.
                            <br />
                            You can check the code <a href="https://github.com/RicVeraPerez/Wordle-Clone" target="_blank">here!</a>
                        </p>
                        <a className="project-btn" href="https://ricveraperez.github.io/Wordle-Clone/" target="_blank" rel="noopener noreferrer">Try it!</a>
                    </div>
                </div>
            </div>
        </ConsoleLayout>
    );
};

export default Projects;