import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import "../styles/FranPage.css";

const VayholettPage = () => {
    const navigate = useNavigate();
    return (
        <div className="special-page-container">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("HOLA VAYHOLETT AKJDSHKASD")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("MIRA LO Q PUEDO HACER")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Soy todo un genio, meu deus")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Es q muchas te tendrian envidia por tener un primo como yo")
                        .pauseFor(1500)
                        .deleteAll()
                         .typeString("En fin, ojala te guste la pagina! :D")
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

export default VayholettPage;