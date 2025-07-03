import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import "../styles/FranPage.css";

const GabrielPage = () => {
    const navigate = useNavigate();

    return (
        <div className="special-page-container">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Traba lindo?")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("O mina fea?")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Esa es la verdadera pregunta")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("NIGGA")
                        .pauseFor(3000)
                        .callFunction(() => {
                            navigate("/home");
                        })
                        .start();
                }}
                options={{
                    autoStart: true,
                    loop: false,
                    delay: 50,
                    deleteSpeed: 200,
                }}
            />
        </div>
    );
};

export default GabrielPage;