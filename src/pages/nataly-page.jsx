import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import "../styles/FranPage.css";

const NatalyPage = () => {
    const navigate = useNavigate();

    return (
        <div className="special-page-container">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hola Mama!")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Se que no lo digo lo suficiente")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Pero gracias por todo lo que has hecho por mí")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Me he esforzado bastante estos dias")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Y creo ya haber encontrado mi vocacion")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Lo unico que pido es paciencia")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Pues me apasiona lo que hago")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Seguire estudiando y esforzandome")
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString("Pues quiero que siempre te sientas orgullosa de mí")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Muchas gracias mama")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Espero te guste el sitio web")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Te amo mucho")
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

export default NatalyPage;
