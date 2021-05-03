import React from "react";
import { NavLink } from "react-router-dom";

export default function Breadcrumb({deckName}) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {deckName}
                </li>
            </ol>
        </nav>
    );
}