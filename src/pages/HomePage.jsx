// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BQ from "../assets/BQ.png";
import { useNavigate } from "react-router-dom";
import "../style/PageHome.css";

export default function PageHome() {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateLogin = (e) => {
        e.preventDefault();

        const validationErrors = {};
        if (!userEmail) {
            validationErrors.email = "Por favor, escribe un email";
        }
        if (!password) {
            validationErrors.password = "Por favor, escribe una contraseña";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }


        
        fetch("http://localhost:8080/login", {
            method: "POST",
            body: JSON.stringify({ email: userEmail, password: password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then((resJson) => {
                localStorage.setItem("token", resJson.accessToken);
                const { role } = resJson.user;
                if (role === "admin") {
                    navigate("/admin");
                }
                if (role === "waitress") {
                    navigate("/waiter");
                } else if (role === "chef") {
                    navigate("/cook");
                }
            })
            .catch((err) => {
                console.log("Error:", err);
                setErrors({ resError: "Correo y/o contraseña incorrecta" });
            });
    };

    return (
        <>
         <div className="nav">  
                
                </div>
            <div className="containerLogin">
                <img src={BQ} alt="logo " className="logoLogin" />
                <form className="formLogin" onSubmit={validateLogin}>
                    <h1>Bienvenido</h1>
                    <input
                        placeholder="Escribe tu correo"
                        type="email"
                        onChange={(e) => {
                            setUserEmail(e.target.value);
                            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
                        }}
                        value={userEmail}
                    />
                    {errors.email && <p1 className="error">{errors.email}</p1>}
                    <input
                        placeholder="Escribe tu contraseña"
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
                        }}
                        value={password}
                    />
                    <div className="buttons">
                    <button>Iniciar Sesión</button> 
                    </div>
                    {errors.password && <p1 className="error">{errors.password}</p1>}
                    {errors.resError && <p1 className="error">{errors.resError}</p1>}
                
                </form>
            </div>
        </>
    );
}
