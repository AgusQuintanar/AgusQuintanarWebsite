import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
    return (
        <div className="navBar">
            <div className="navBar-header">
               

                <div>
                    <Link
                        to="/Laika/Consulta"
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}
                    >
                        <i className="fa fa-home fa-fw pointer"></i>
                        Home
                    </Link>
                </div>

                <div>
                    <Link
                        to="/Laika/RegistroGeneral"
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}
                    >
                        <i className="fa fa-tasks fa-fw pointer"></i>
                        Projects
                    </Link>
                </div>

                
            </div>
        </div>
    );
};

export default MenuBar;

