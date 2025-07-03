import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import "../styles/FranPage.css";

const AzaelPage = () => {
    const navigate = useNavigate();

    return (
        <div className="special-page-container">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("HOLA AZAAA")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("TE EXTRAÑO MUCHO TWIN")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("ESPERO QUE LE VAYA BIEN COMPARE")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("YA CHAO ERA ESO NOMAS, TE QUIERO MUCHO NIGGA")
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

export default AzaelPage;
