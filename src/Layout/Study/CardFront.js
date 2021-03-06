import React from "react";

export default function CardFront({currentCardData, flip, setFlip}) {


    return (
        <>
            <p className="card-text">{currentCardData.front}</p>
            <div>
                <button 
                    className="btn btn-secondary" 
                    type="button"
                    onClick={() => setFlip(!flip)}
                >
                    Flip
                </button>
            </div>   
        </>     
    );
}