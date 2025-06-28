import { FaHome } from "react-icons/fa";
import "../styles/ConsoleLayout.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";


const ConsoleLayout = ({ title, children }) => {
   const navigate = useNavigate();
   
    return (
        <div className="console-layout">
            <div className="console-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="console-title">{title}</span>
                <button id="HomeButton"
                    onClick={() => {
                        navigate("/Home")
                    }}
                >
                    <FaHome style={{ marginRight: "8px" }} />
                </button>
            </div>
            <div className="console-content">
                {children}
            </div>
        </div>
    );
}

export default ConsoleLayout;