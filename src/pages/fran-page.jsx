import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import "../styles/FranPage.css";

const FranPage = () => {
    const navigate = useNavigate();

    return (
        <div className="special-page-container">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hola Fran!")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Un gusto el saludarte >(^_^)>")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Espero que estes teniendo un buen día :D")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Si estás leyendo esto, entonces el código sí funcionó DAKDASDKJASD")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("En fin")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Ojalá te esté yendo super en la uni!")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Siéndote sincero, extraño hablar contigo")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("No tengo idea si estás comprometida o interesada en alguien más a este punto aksjajkaas")
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString("Si es así, solo ignora esto")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Eso nada más")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Espero te guste el sitio web")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Cuídate")
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

export default FranPage;
