import React from "react";
import Card from "./Card.js";

export default function CardList({cardsArray}) {

    
    const list = cardsArray.map((card) => (
        <Card 
            key={card.id}
            cardId={card.id}
            front={card.front}
            back={card.back}
        /> 
    ));
    

    return (
        <>
            <h2>Cards</h2>
            {list}
        </>    
    );
}