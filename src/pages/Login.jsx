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
        if (input.trim() !== "") {
            setUsername(input);
            navigate("/home");
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
