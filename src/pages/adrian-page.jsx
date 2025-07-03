import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import "../styles/FranPage.css";

const AdrianPage = () => {
    const navigate = useNavigate();

    return (
        <div className="special-page-container">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("OUMAGAAAAA")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("NO WAYYYYYYYYYYY")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("JORDAN NEVER DID THAT MOVEEEEE")
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

export default AdrianPage;