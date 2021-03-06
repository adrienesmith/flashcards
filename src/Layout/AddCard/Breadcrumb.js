import React from "react";
import { NavLink, useParams } from "react-router-dom";

export default function Breadcrumb({deckName}) {

    const { deckId } = useParams();

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li className="breadcrumb-item">
                    <NavLink to={`/decks/${deckId}`}>
                        {deckName}
                    </NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Add Card
                </li>
            </ol>
        </nav>
    );
}