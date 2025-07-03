import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/UserContext"
import ConsoleLayout from "../components/ConsoleLayout";
import "../styles/ConsoleLayout.css";
import "../styles/Login.css";

const Login = () => {
    const [input, setInput] = useState("");
    const { setUsername } = useUser();
    const navigate = useNavigate();

const handleLogin = () => {
    const trimmedInput = input.trim();
    
    if (trimmedInput !== "") {
        setUsername(trimmedInput);

        if (trimmedInput.toLowerCase() === "fran" || trimmedInput.toLowerCase() === "franchesca") {
            navigate("/fran-page");
        } else if (trimmedInput.toLowerCase() === "nataly") {
            navigate("/nataly-page");
        }
        else if (trimmedInput.toLowerCase() === "azael") {
            navigate("/azael-page");
        }
        else if (trimmedInput.toLowerCase() === "adrian") {
            navigate("/adrian-page");
        }
        else if (trimmedInput.toLowerCase() === "gabriel") {
            navigate("/gabriel-page");
        }
        else if (trimmedInput.toLowerCase() === "vayholett") {
            navigate("/vayholett-page");
        } else {
            navigate("/home");
        }
    } else {
        alert("Please enter a valid username.");
    }
};


    return (
        <ConsoleLayout title={"Login"}>
            <div className="login-container">
                <h1 id="login-header">Hi!</h1>
                <p>Please insert an username</p>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="_________"
                    className="login-input"
                /><br></br>
                <button
                    onClick={handleLogin}
                    className="login-button"
                >
                    Enter
                </button>
            </div>
        </ConsoleLayout>
    );
};

export default Login;
